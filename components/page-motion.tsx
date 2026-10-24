"use client"

import { useEffect, useRef } from "react"

export function PageMotion() {
  const progressRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"))
    let observer: IntersectionObserver | undefined
    let frame = 0

    const show = (element: HTMLElement) => {
      element.dataset.revealState = "visible"
      observer?.unobserve(element)
    }

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) show(entry.target as HTMLElement)
        })
      }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" })
    }

    const prepareReveals = () => {
      observer?.disconnect()
      elements.forEach((element) => {
        // Keep content visible until animation support and preferences are known.
        if (!observer || preference.matches || element.dataset.revealState === "visible" || element.getBoundingClientRect().top < window.innerHeight - 24) {
          show(element)
        } else {
          element.dataset.revealState = "pending"
          observer.observe(element)
        }
      })
    }

    const revealFocusedContent = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return
      elements.forEach((element) => {
        if (element.contains(event.target as Node)) show(element)
      })
    }

    const updateProgress = () => {
      frame = 0
      const distance = document.documentElement.scrollHeight - window.innerHeight
      const progress = distance > 0 ? Math.max(0, Math.min(1, window.scrollY / distance)) : 0
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`
    }

    const requestProgressUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress)
    }

    prepareReveals()
    updateProgress()
    preference.addEventListener("change", prepareReveals)
    document.addEventListener("focusin", revealFocusedContent)
    window.addEventListener("scroll", requestProgressUpdate, { passive: true })
    window.addEventListener("resize", requestProgressUpdate)

    return () => {
      observer?.disconnect()
      window.cancelAnimationFrame(frame)
      preference.removeEventListener("change", prepareReveals)
      document.removeEventListener("focusin", revealFocusedContent)
      window.removeEventListener("scroll", requestProgressUpdate)
      window.removeEventListener("resize", requestProgressUpdate)
      elements.forEach((element) => { delete element.dataset.revealState })
    }
  }, [])

  return <div aria-hidden="true" className="reading-progress"><span ref={progressRef} /></div>
}
