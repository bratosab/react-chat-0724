import { useEffect, useRef } from "react";

export function useAutoScroll(deps) {
    const scrollElement = useRef();

    useEffect(() => {
      scrollElement.current.scrollIntoView({ behavior: "smooth" })
    }, [deps])

    return [scrollElement]
}