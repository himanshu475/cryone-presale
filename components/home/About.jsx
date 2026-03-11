import React from 'react';

export default function About() {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-800/5 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* Left Text Content */}
                    <div className="flex-1 space-y-8">
                        <div className="inline-block bg-zinc-900 border border-red-900/30 rounded-full px-4 py-1.5 mb-2">
                            <span className="text-red-500 font-semibold tracking-wide text-sm uppercase">The Vision</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                            Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Sustainable Wealth</span> in DeFi
                        </h2>

                        <div className="space-y-6 text-gray-400 text-lg">
                            <p>
                                Cryone ($CRYN) isn&apos;t just another token. It is a meticulously architected ecosystem designed from the ground up to protect investors and ensure long-term, sustainable growth.
                            </p>
                            <p>
                                We analyzed the failures of traditional launches—whales dumping on retail, team tokens flooding the market, and lack of utility. We built our smart contract to directly combat these issues with hardcoded limits and immutable vesting schedules.
                            </p>
                            <p className="font-semibold text-gray-300 border-l-4 border-red-500 pl-4 py-1">
                                Our mission is simple: Fair distribution, transparent mechanics, and a community-first approach where everyone has an equal opportunity to win.
                            </p>
                        </div>

                        {/* Stats/Highlights Row */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-red-900/20">
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">100%</h4>
                                <p className="text-sm text-red-500 font-medium tracking-wide">Secure Contract</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">0</h4>
                                <p className="text-sm text-red-500 font-medium tracking-wide">Team Dump Risk</p>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <h4 className="text-3xl font-bold text-white mb-1">Fair</h4>
                                <p className="text-sm text-red-500 font-medium tracking-wide">Launch Mechanics</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual Element */}
                    <div className="flex-1 relative w-full max-w-lg mx-auto lg:mr-0">
                        {/* Glossy Abstract Shape Container */}
                        <div className="aspect-square rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-red-900/30 shadow-[0_0_40px_rgba(220,38,38,0.15)] flex items-center justify-center relative overflow-hidden group">

                            {/* 3D Solar System Representation */}
                            <div className="relative z-10 w-full h-full flex items-center justify-center perspective-[1200px]">

                                {/* The Entire System Wrapper (Tilted to view from above) */}
                                <div className="relative w-64 h-64 flex items-center justify-center [transform-style:preserve-3d] [transform:rotateX(65deg)] mt-12">

                                    {/* The Sun / Core ($CRYN) */}
                                    <div className="absolute w-20 h-20 bg-gradient-to-br from-red-500 shadow-[0_0_50px_rgba(239,68,68,1)] flex items-center justify-center z-30 [transform-style:preserve-3d] [transform:rotateX(-65deg)] rounded-full border border-red-400">
                                        <div className="absolute inset-0 bg-red-600 rounded-full blur-[10px] opacity-80 animate-pulse"></div>
                                        <span className="text-white font-black text-xl drop-shadow-[0_0_8px_rgba(255,255,255,1)] relative z-10">$CRYN</span>
                                    </div>

                                    {/* Orbit 1: Inner Planet */}
                                    <div className="absolute w-36 h-36 rounded-full border-[1.5px] border-red-500/30 animate-[spin_6s_linear_infinite] [transform-style:preserve-3d]">
                                        <div className="absolute top-0 left-1/2 w-4 h-4 rounded-full [transform:translate(-50%,-50%)]">
                                            {/* The Planet (Anti-rotated to stay upright) */}
                                            <div className="w-full h-full bg-gradient-to-br from-red-300 to-red-600 rounded-full shadow-[0_0_15px_rgba(252,165,165,0.8)] animate-[spin_6s_linear_infinite_reverse] [transform:rotateX(-65deg)]"></div>
                                        </div>
                                    </div>

                                    {/* Orbit 2: Middle Planet */}
                                    <div className="absolute w-52 h-52 rounded-full border-[1.5px] border-red-700/40 border-dashed animate-[spin_12s_linear_infinite_reverse] [transform-style:preserve-3d]">
                                        <div className="absolute bottom-0 left-1/2 w-6 h-6 rounded-full [transform:translate(-50%,50%)]">
                                            {/* The Planet */}
                                            <div className="w-full h-full bg-gradient-to-br from-red-500 to-red-900 rounded-full shadow-[0_0_20px_rgba(220,38,38,1)] animate-[spin_12s_linear_infinite] [transform:rotateX(-65deg)]"></div>
                                        </div>
                                    </div>

                                    {/* Orbit 3: Outer Moon/Planet */}
                                    <div className="absolute w-[280px] h-[280px] rounded-full border-[1px] border-red-900/50 animate-[spin_20s_linear_infinite] [transform-style:preserve-3d]">
                                        <div className="absolute top-1/2 right-0 w-3 h-3 rounded-full [transform:translate(50%,-50%)]">
                                            {/* The Planet */}
                                            <div className="w-full h-full bg-red-200 rounded-full shadow-[0_0_10px_rgba(254,226,226,0.9)] animate-[spin_20s_linear_infinite_reverse] [transform:rotateX(-65deg)]"></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* Decorative nodes */}
                            <div className="absolute top-8 right-8 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,1)] animate-ping"></div>
                            <div className="absolute bottom-12 left-12 w-2 h-2 bg-red-600 rounded-full shadow-[0_0_8px_rgba(220,38,38,1)]"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
