import React from 'react';

export default function Roadmap() {
    const phases = [
        {
            phase: "Phase 1",
            title: "Foundation & Launch",
            status: "Active",
            items: [
                "Smart Contract Development & Audit",
                "Website & DApp Launch",
                "Community Building (Twitter, Telegram)",
                "Token Presale Live"
            ]
        },
        {
            phase: "Phase 2",
            title: "Expansion & Liquidity",
            status: "Upcoming",
            items: [
                "Presale Conclusion & Token Claim",
                "DEX Listing (Uniswap)",
                "Liquidity Pool Locked (30% Supply)",
                "CoinMarketCap & CoinGecko Listings"
            ]
        },
        {
            phase: "Phase 3",
            title: "Ecosystem Growth",
            status: "Upcoming",
            items: [
                "Staking dApp Release",
                "Strategic Partnerships",
                "Marketing Campaign Scaling",
                "CEX Listing Explorations"
            ]
        }
    ];

    return (
        <section className="py-24 bg-black border-y border-red-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-5xl md:text-6xl font-extrabold tracking-wide text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]">
                        Roadmap
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        Our strategic plan to build, launch, and scale the Cryone ecosystem securely.
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative max-w-4xl mx-auto">

                    {/* Central Vertical Line (Neon Glow) */}
                    <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-red-900 via-red-500 to-red-900 shadow-[0_0_15px_rgba(239,68,68,0.5)] transform md:-translate-x-1/2 rounded-full"></div>

                    {phases.map((phase, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16 last:mb-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >

                            {/* Center Node (Dot) */}
                            <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-black border-4 border-red-500 rounded-full transform -translate-x-1/2 md:-translate-x-1/2 shadow-[0_0_20px_rgba(239,68,68,1)] z-10 mt-6 md:mt-0"></div>

                            {/* Empty Space for the alternating layout on Desktop */}
                            <div className="hidden md:block w-[45%]"></div>

                            {/* Content Card */}
                            <div className="w-full pl-20 md:pl-0 md:w-[45%]">
                                <div className={`bg-[#0a0a0a] border border-red-900/40 rounded-2xl p-8 shadow-[0_0_15px_rgba(220,38,38,0.1)] hover:shadow-[0_0_25px_rgba(239,68,68,0.2)] hover:border-red-500/50 transition-all duration-300 relative group`}>

                                    {/* Status Badge */}
                                    <div className={`absolute -top-4 -right-4 px-4 py-1 rounded-full text-xs font-bold border ${phase.status === "Active"
                                            ? "bg-red-950/80 text-red-400 border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] animate-pulse"
                                            : "bg-zinc-900 text-gray-400 border-gray-700"
                                        }`}>
                                        {phase.status}
                                    </div>

                                    <span className="text-red-500 font-bold tracking-widest text-sm uppercase mb-2 block">
                                        {phase.phase}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-red-400 transition-colors">
                                        {phase.title}
                                    </h3>

                                    <ul className="space-y-3">
                                        {phase.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span className="text-gray-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
