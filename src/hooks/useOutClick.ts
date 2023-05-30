import { useEffect, useRef } from 'react'

export const useOutClick = <Element extends globalThis.Element>(callback: () => void) => {
    const ref = useRef<Element>(null)

    useEffect(() => {
        const handleOutClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement
            if (!ref.current?.contains(target)) {
                callback()
            }
        }

        document.addEventListener('mousedown', handleOutClick)
        return () => {
            document.removeEventListener('mousedown', handleOutClick)
        }
    }, [callback])

    return ref
}
