import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Showcase from "@/components/sections/Showcase";
import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-screen bg-giwa-charcoal text-hanji-white relative">
            {/* Global Noise Overlay */}
            <div className="hanji-texture" />

            <Hero />
            <Problem />
            <Showcase />

            <footer className="py-20 text-center bg-wood-dark text-hanji-white/50 font-serif">
                <p>© 2026 Teumsae. All rights reserved.</p>
                <p className="mt-2 text-sm text-hanji-white/30">Based efficiently in Seoul, KR.</p>
            </footer>
        </main>
    );
}
