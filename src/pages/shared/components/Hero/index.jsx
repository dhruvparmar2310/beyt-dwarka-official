import { Anton } from 'next/font/google'
import React from 'react'
import { motion } from 'framer-motion'

const Anton_Font = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })

const Hero = () => {
    return (
        <>
            <section className='hero-section'>
                <div className='inner-content'>
                    <motion.h1
                        className={`${Anton_Font?.className}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        Dw<span>a</span>rka
                    </motion.h1>
                    <motion.h3
                        className={Anton_Font?.className}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
                    >
                        The Kingdom of Lord Krishna
                    </motion.h3>
                </div>
            </section>
        </>
    )
}

export default Hero
