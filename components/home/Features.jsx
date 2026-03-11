import React from 'react';

export default function Features() {
    const features = [
        {
            title: "Staking Rewards",
            description: "Lock your $CRYN tokens to earn high-yield APY rewards directly from the ecosystem treasury.",
            icon: (
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            )
        },
        {
            title: "Governance Rights",
            description: "Holders get voting power to decide on future protocol upgrades, partnerships, and treasury allocations.",
            icon: (
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                </svg>
            )
        },
        {
            title: "VIP DApp Access",
            description: "Exclusive access to premium tools, analytics, and early access to partnered project presales.",
            icon: (
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
            )
        }
    ];

    return (
        <section className="py-24 bg-black border-y border-red-900/30 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Header Section */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-5xl md:text-6xl font-extrabold tracking-wide text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                        Ecosystem <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-400 to-red-900 drop-shadow-md">Features</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        More than just a token. $CRYN is the key to unlocking a suite of powerful DeFi tools and rewards.
                    </p>
                </div>

                {/* Features Content */}
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left: 3D Interactive Element */}
                    <div className="flex-1 w-full flex justify-center perspective-[1200px]">
                        <div className="w-64 h-64 md:w-80 md:h-80 relative transform-style-3d animate-[spin_20s_linear_infinite] hover:[animation-play-state:paused] cursor-pointer group">

                            {/* Central Core */}
                            <div className="absolute inset-0 m-auto w-24 h-24 bg-black border-2 border-red-500 rounded-lg shadow-[0_0_30px_rgba(239,68,68,0.8)] flex items-center justify-center [transform:translateZ(60px)] z-20 group-hover:scale-110 transition-transform duration-500">
                                <span className="text-red-500 font-bold tracking-widest">$CRYN</span>
                            </div>

                            {/* Surrounding floating glass panels */}
                            <div className="absolute top-0 left-0 w-32 h-32 bg-red-900/20 backdrop-blur-md border border-red-500/30 rounded-xl [transform:translateZ(-40px)_translateX(-20px)_translateY(-20px)] shadow-[0_0_15px_rgba(220,38,38,0.2)]"></div>

                            <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-800/20 backdrop-blur-md border border-red-500/30 rounded-full [transform:translateZ(-80px)_translateX(40px)_translateY(40px)] shadow-[0_0_20px_rgba(220,38,38,0.3)]"></div>

                            <div className="absolute top-1/2 right-0 w-20 h-20 bg-zinc-900/80 border border-zinc-700 rounded-lg [transform:translateZ(100px)_rotateY(45deg)] z-30 flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>

                        </div>
                    </div>

                    {/* Right: Feature List */}
                    <div className="flex-1 space-y-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-[#0a0a0a] border border-red-900/40 rounded-2xl p-6 md:p-8 flex items-start gap-6 hover:bg-zinc-900/80 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-full bg-red-950/40 border border-red-900/50 flex flex-shrink-0 items-center justify-center group-hover:bg-red-900/60 group-hover:scale-110 transition-all duration-300">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
