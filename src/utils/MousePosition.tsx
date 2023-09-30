import { useState, useEffect} from 'react'

function MousePosition() {

    const [position, setPosition] = useState<{ x: number, y: number}>({ x: 0, y: 0});

    const handleMousePosition = (event: MouseEvent) => {
        setPosition({
            x: event.clientX,
            y: event.clientY,
        })
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMousePosition)

        return () => {
            window.removeEventListener("mousemove", handleMousePosition)
        }
    }, [])

    return position
}

export default MousePosition