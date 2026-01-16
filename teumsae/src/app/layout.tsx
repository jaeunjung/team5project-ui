import type { Metadata } from "next";
import { Noto_Serif_KR, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/providers/SmoothScroller";

const serif = Noto_Serif_KR({
    subsets: ["latin"],
    weight: ["200", "400", "700"],
    variable: "--font-serif",
});

const sans = Noto_Sans_KR({
    subsets: ["latin"],
    weight: ["300", "400", "500"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "틈새 (Teumsae) - 복잡한 서울 속, 당신을 위한 틈새",
    description: "서울의 숨겨진 한적한 명소를 추천하는 프리미엄 서비스",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" className={`${serif.variable} ${sans.variable}`}>
            <body className="bg-giwa-charcoal text-hanji-white antialiased overflow-hidden">
                <SmoothScroller>
                    {children}
                </SmoothScroller>
            </body>
        </html>
    );
}
