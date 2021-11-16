import React, {
  CSSProperties,
  LegacyRef,
  MutableRefObject,
  useEffect,
} from "react"
import { useRef } from "react"
import { useState } from "react"

function useIntersectionObserver(
  ref: MutableRefObject<Element | null>,
  options: IntersectionObserverInit = {},
  forward: boolean = true
) {
  const [element, setElement] = useState<Element | null>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const observer = useRef<null | IntersectionObserver>(null)

  const cleanOb = () => {
    if (observer.current) {
      observer.current.disconnect()
    }
  }

  useEffect(() => {
    setElement(ref.current)
  }, [ref])

  useEffect(() => {
    if (!element) return
    cleanOb()
    const ob = (observer.current = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting
        if (!forward) {
          setIsIntersecting(isElementIntersecting)
        } else if (forward && !isIntersecting && isElementIntersecting) {
          setIsIntersecting(isElementIntersecting)
          cleanOb()
        }
      },
      { ...options }
    ))
    ob.observe(element)
    return () => {
      cleanOb()
    }
  }, [element, options])

  return isIntersecting
}

interface LazyLoadProps {
  root?: Element | null
  threshold?: number | number[]
  rootMargin?: string
  forward?: boolean
  style?: CSSProperties
  className?: string
  src: string
  alt?: string
}

const LazyImage = (props: LazyLoadProps) => {
  const ref: LegacyRef<HTMLImageElement> = useRef(null)
  const isIntersecting = useIntersectionObserver(
    ref,
    {
      root: props.root ?? null,
      threshold: props.threshold ?? 0,
      rootMargin: props.rootMargin,
    },
    props.forward
  )

  return (
    <img
      ref={ref}
      style={props.style}
      className={props.className}
      src={isIntersecting ? props.src : null}
      alt={props.alt}
    />
  )
}

export default LazyImage
