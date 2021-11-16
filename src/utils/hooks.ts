import { RefObject, useEffect } from "react"

export function useOnClickOutside(
  ref: RefObject<HTMLElement>,
  handler: (event?: Event) => void
) {
  useEffect(
    () => {
      const listener = (event: Event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target as Node | null)) {
          return
        }

        setTimeout(() => handler(event), 300)
      }

      document.addEventListener("mousedown", listener)
      document.addEventListener("touchstart", listener)

      return () => {
        document.removeEventListener("mousedown", listener)
        document.removeEventListener("touchstart", listener)
      }
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  )
}

export function useOnMouseOver(
  ref: RefObject<HTMLElement>,
  handler: (event?: Event) => void
) {
  useEffect(
    () => {
      const listener = (event: Event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target as Node | null)) {
          return
        }

        setTimeout(() => handler(event), 300)
      }

      document.addEventListener("onmouseover", listener)

      return () => {
        document.removeEventListener("mousedown", listener)
        document.removeEventListener("onmouseout", listener)
        document.removeEventListener("touchstart", listener)
      }
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  )
}

export const useLockBodyScroll = (activate: boolean = false) => {
  useEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow
    if (activate) {
      // Prevent scrolling on mount
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = originalStyle
    }
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [activate]) // Empty array ensures effect is only run on mount and unmount
}
