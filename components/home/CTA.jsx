import Link from "next/link";

export default function CTA() {
    return (
        <section className="py-24 bg-[#080808] relative overflow-hidden border-t border-red-900/30">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                    Ready to Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Future</span> of DeFi?
                </h2>

                <p className="text-gray-400 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
                    Secure your $CRYN allocation early in Phase 1 before the price increases. The dashboard awaits your connection.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <Link href="/presale" className="group relative px-10 py-5 bg-red-600 text-white rounded-xl font-bold text-xl tracking-wide shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_40px_rgba(239,68,68,0.8)] transition-all duration-300 overflow-hidden w-full sm:w-auto flex items-center justify-center gap-3 transform hover:scale-105">
                        <span className="relative z-10 flex items-center gap-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            Enter Presale Dashboard
                        </span>
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 h-full w-0 bg-red-500 transition-all duration-[400ms] ease-out group-hover:w-full z-0"></div>
                    </Link>
                </div>

                <p className="mt-6 text-sm text-gray-500 font-semibold tracking-widest uppercase">
                    Supported: ETH, USDT, USDC
                </p>
            </div>
        </section>
    );
}
