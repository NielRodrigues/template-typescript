import React, { useContext } from 'react'
import MousePosition from '../../utils/MousePosition'
import { motion } from 'framer-motion';
import "./style.css"
import { MouseContext } from '../../contexts/MouseHoverContext';

function CursorMask({ mask }: {mask?: boolean}) {
    const { click } = useContext(MouseContext)

    const { x, y }: { x: number, y: number} = MousePosition();
    const size = mask || click ? 64 : 32

    return (
        <motion.div 
            className={mask || click ? "mask-click" : "mask"}
            style={{position: "fixed"}}
            animate={{
                top: `${y - size/2}px`,
                left: `${x - size/2}px`,
              }}
              transition={{type: "tween", ease: "backOut"}}
        />
    )
}

export default CursorMask