"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            containerRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 2, ease: "power2.out" }
        )
            .fromTo(
                textRef.current,
                { y: 50, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" },
                "-=1"
            )
            .fromTo(
                subRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
                "-=1"
            );

        // Parallax effect on scroll
        gsap.to(".hero-bg", {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 hero-bg">
                <Image
                    src="/assets/hero_bg.png"
                    alt="Traditional Hanok Giwa Roofs"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-giwa-charcoal/30 via-transparent to-giwa-charcoal/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <h1
                    ref={textRef}
                    className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-hanji-white mb-6 drop-shadow-2xl"
                >
                    소음 속의 틈새
                </h1>
                <p
                    ref={subRef}
                    className="text-lg md:text-xl font-sans text-hanji-white/80 max-w-2xl mx-auto leading-relaxed"
                >
                    복잡한 도시의 소음 너머, <br className="hidden md:block" />
                    당신만을 위한 고요한 한옥의 정취를 만나보세요.
                </p>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <span className="text-sm font-sans tracking-widest text-hanji-white uppercase">Scroll</span>
            </div>
        </section>
    );
}
