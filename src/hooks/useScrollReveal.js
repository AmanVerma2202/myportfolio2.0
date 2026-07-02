import { useEffect, useRef } from 'react'

const defaultClasses = ['reveal', 'reveal-left', 'reveal-right', 'reveal-scale']

export default function useScrollReveal(classes = defaultClasses, options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const classList = Array.isArray(classes) ? classes : [classes]
    const selector = classList.map((c) => `.${c}`).join(',')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, ...options }
    )

    const targets = node.querySelectorAll(selector)
    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [classes, options])

  return ref
}
