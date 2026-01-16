"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Problem() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const noiseTextRef = useRef<HTMLDivElement>(null);
    const calmTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=2000",
                scrub: 1,
                pin: true,
            },
        });

        // Chaos phase
        tl.to(noiseTextRef.current, {
            opacity: 1,
            scale: 1.5,
            filter: "blur(0px)",
            duration: 1,
        })
            .to(noiseTextRef.current, {
                opacity: 0,
                filter: "blur(20px)",
                scale: 3,
                duration: 1,
            })
            // Transition to Calm
            .to(sectionRef.current, {
                backgroundColor: "#2E4C38", // pine-green tint transition
                duration: 1.5,
            }, "-=0.5")
            .fromTo(calmTextRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1 }
            );

    }, []);

    return (
        <section ref={sectionRef} className="relative h-screen w-full flex flex-col items-center justify-center bg-giwa-charcoal overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div ref={noiseTextRef} className="text-center opacity-0 blur-sm">
                    <h2 className="text-6xl md:text-9xl font-bold font-sans text-mute-gray/30 tracking-tighter">
                        NOISE
                        <br />
                        STRESS
                        <br />
                        CROWD
                    </h2>
                </div>
            </div>

            <div ref={calmTextRef} className="relative z-10 text-center opacity-0">
                <p className="text-xl md:text-2xl font-serif text-hanji-white mb-4">
                    하지만 이곳에는
                </p>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-hanji-white">
                    오직 바람 소리와 <br />
                    처마 끝의 곡선뿐입니다.
                </h2>
            </div>
        </section>
    );
}
