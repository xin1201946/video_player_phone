// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
export function AppTitle (){
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const title = "VideoPlayer"

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <h1 className="logo text-6xl font-bold relative overflow-hidden ">
                {title.split('').map((char, index) => (
                    <motion.span
                        key={index}
                        className="inline-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: isVisible ? 1 : 0,
                            y: isVisible ? 0 : 20,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.1,
                        }}
                        style={{
                            background: 'var(--semi-color-text-0)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        {char}
                    </motion.span>
                ))}
            </h1>
            <br/>
        </div>
    )
}