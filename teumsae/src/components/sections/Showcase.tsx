"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SPOTS = [
    { id: 1, name: "북촌의 아침", desc: "고즈넉한 골목길의 시작", color: "bg-wood-dark" },
    { id: 2, name: "서촌의 오후", desc: "예술과 일상이 만나는 곳", color: "bg-pine-green" },
    { id: 3, name: "은평의 저녁", desc: "북한산을 마주하는 쉼터", color: "bg-giwa-charcoal" },
    { id: 4, name: "성북의 밤", desc: "시간이 멈춘 성곽길", color: "bg-sunset-red" },
];

export default function Showcase() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const sections = gsap.utils.toArray(".showcase-item");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: "+=3000",
            },
        });
    }, []);

    return (
        <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-hanji-white text-giwa-charcoal">
            <div className="absolute top-12 left-12 z-10">
                <h2 className="text-3xl font-serif font-bold border-b-2 border-giwa-charcoal pb-2">
                    발견된 틈새
                </h2>
            </div>

            <div ref={wrapperRef} className="flex h-full w-[400%]">
                {SPOTS.map((spot, i) => (
                    <div key={spot.id} className="showcase-item w-screen h-full flex items-center justify-center p-20 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] border border-giwa-charcoal/20 rounded-lg" />

                        <div className="relative w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className={`aspect-[4/5] ${spot.color} rounded-sm shadow-xl flex items-center justify-center text-hanji-white/50 text-4xl`}>
                                {/* Placeholder for real images */}
                                Image {spot.id}
                            </div>
                            <div className="text-left">
                                <span className="text-lg font-mono text-wood-dark mb-2 block">0{spot.id}</span>
                                <h3 className="text-5xl font-serif font-bold mb-6">{spot.name}</h3>
                                <p className="text-xl font-sans text-gray-600 mb-8">{spot.desc}</p>
                                <button className="px-8 py-3 border border-giwa-charcoal hover:bg-giwa-charcoal hover:text-hanji-white transition-colors duration-300 rounded-full font-serif">
                                    자세히 보기
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
