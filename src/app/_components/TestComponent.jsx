'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollEffect() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return (
        <div ref={ref} className="flex h-[200vh] items-center justify-center bg-zinc-950">
            <motion.div
                style={{ scale, opacity }}
                className="sticky top-20 h-96 w-96 rounded-2xl bg-indigo-600 shadow-2xl flex items-center justify-center text-white font-bold text-xl"
            >
                Scroll Motion
            </motion.div>
        </div>
    );
}