"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    const phrases = ["Anti-Whale Protection.", "Sustainable Vesting.", "Fair Distribution."];

    useEffect(() => {
        let ticker = setInterval(() => {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];

            if (isDeleting) {
                setCurrentText(fullText.substring(0, currentText.length - 1));
                setTypingSpeed(50); // Faster delete
            } else {
                setCurrentText(fullText.substring(0, currentText.length + 1));
                setTypingSpeed(100); // Normal typing
            }

            if (!isDeleting && currentText === fullText) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause at end of word
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(200); // Pause before next word starts
            }
        }, typingSpeed);

        return () => clearInterval(ticker);
    }, [currentText, isDeleting, loopNum, typingSpeed]);

    return (
        <main className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">

            {/* Background Glow Effects to fill space */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-800/10 rounded-full blur-[150px] pointer-events-none"></div>

            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">

                {/* Early Access / Live Badge */}
                <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-950/30 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="text-red-400 text-sm font-semibold tracking-wide uppercase">Presale is Live Phase 1</span>
                </div>

                {/* Massive Glowing Title */}
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-[0_0_25px_rgba(255,255,255,0.1)] mb-6">
                    CRY<span className="text-red-600 drop-shadow-[0_0_35px_rgba(239,68,68,0.8)] neon-text">ONE</span>
                </h1>



                {/* Ticker Symbol */}
                <div className="mb-8 rotate-3 hover:rotate-0 transition-transform duration-300">
                    <span className="px-6 py-2 border-2 border-red-600/50 bg-black text-red-500 text-xl md:text-2xl font-bold tracking-widest shadow-[4px_4px_0px_0px_rgba(220,38,38,0.8)]">
                        $CRYN
                    </span>
                </div>

                {/* Subtitle */}
                <p className="text-gray-400 text-lg md:text-2xl font-medium tracking-wide max-w-3xl leading-relaxed mb-12 min-h-[80px]">
                    The Next Generation DeFi Token with hardcoded <br className="hidden md:block" />
                    <span className="text-white font-bold ml-1 border-r-2 border-red-500 pr-1 animate-[blink-caret_0.75s_step-end_infinite]">
                        {currentText}
                    </span>
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 mb-24 w-full sm:w-auto">
                    {/* Join Presale Button */}
                    <Link href="/presale" className="group relative px-8 py-4 bg-red-600 text-white rounded-lg font-bold text-lg tracking-wide shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_40px_rgba(239,68,68,0.8)] transition-all duration-300 overflow-hidden w-full sm:w-auto">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Join Presale Now
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        {/* Button hover gradient sweep */}
                        <div className="absolute inset-0 h-full w-0 bg-red-500 transition-all duration-[400ms] ease-out group-hover:w-full z-0"></div>
                    </Link>

                    {/* Download Whitepaper Button */}
                    <a href="/whitepaper.pdf" download="Cryone_Whitepaper.pdf" className="px-8 py-4 bg-transparent border-2 border-zinc-800 hover:border-red-500/50 hover:bg-zinc-900 text-white rounded-lg font-bold text-lg tracking-wide transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 group">
                        Download Whitepaper
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    </a>
                </div>

                {/* Floating "Trusted By" / Tech Stack Bar to fill lower space */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-12 border-t border-red-900/20 w-full max-w-4xl mx-auto opacity-60">
                    <div className="flex flex-col items-center gap-2 text-zinc-500 hover:text-red-400 transition-colors cursor-default">
                        <span className="font-bold text-xl tracking-wider">ERC-20</span>
                        <span className="text-xs font-medium uppercase">Standard</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-zinc-500 hover:text-red-400 transition-colors cursor-default">
                        <span className="font-bold text-xl tracking-wider">1.5%</span>
                        <span className="text-xs font-medium uppercase">Max Wallet</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-zinc-500 hover:text-red-400 transition-colors cursor-default">
                        <span className="font-bold text-xl tracking-wider">Vested</span>
                        <span className="text-xs font-medium uppercase">Team Tokens</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-zinc-500 hover:text-red-400 transition-colors cursor-default">
                        <span className="font-bold text-xl tracking-wider">0.5%</span>
                        <span className="text-xs font-medium uppercase">Max TX</span>
                    </div>
                </div>

            </div>

        </main>
    );
}