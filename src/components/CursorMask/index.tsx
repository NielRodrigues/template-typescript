import React from 'react'
import MousePosition from '../../utils/MousePosition'
import { motion } from 'framer-motion';
import "./style.css"

function CursorMask({ mask }: {mask?: boolean}) {

    const { x, y }: { x: number, y: number} = MousePosition();
    const size = mask ? 64 : 32

    return (
        <motion.div 
            className={mask ? "mask-click" : "mask"}
            animate={{
                WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`,
                WebkitMaskSize: `${size}px`,
                top: `${y - size/2}px`,
                left: `${x - size/2}px`,
              }}
              transition={{type: "tween", ease: "backOut"}}
        />
    )
}

export default CursorMask