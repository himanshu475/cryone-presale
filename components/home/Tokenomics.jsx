import React from 'react';

// Reusable SVG Icons
const TrendingUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
        <polyline points="16 7 22 7 22 13"></polyline>
    </svg>
);

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
);

const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
);

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);

export default function Tokenomics() {
    const distribution = [
        { label: "Public Presale", percent: 40 },
        { label: "Liquidity Pool", percent: 30 },
        { label: "Ecosystem & Rewards", percent: 15 },
        { label: "Team & Development", percent: 10 },
        { label: "Airdrop / Marketing", percent: 5 },
    ];

    return (
        <section className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-5xl md:text-6xl font-extrabold tracking-wide text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]">
                        Tokenomics
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-medium">
                        Carefully designed supply distribution with built-in mechanisms to ensure long-term sustainability
                    </p>
                </div>

                {/* Top 3 Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

                    {/* Total Supply Card */}
                    <div className="bg-[#0a0a0a] border border-red-900/40 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-[0_0_15px_rgba(220,38,38,0.1)] hover:shadow-[0_0_25px_rgba(239,68,68,0.2)] hover:border-red-500/50 transition-all duration-300">
                        <div className="w-16 h-16 rounded-full border border-red-900/50 flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-950/20 transition-colors">
                            <TrendingUpIcon />
                        </div>
                        <h3 className="text-3xl font-bold text-red-500 mb-2 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">20,000,000</h3>
                        <p className="text-gray-400 font-medium">Total Supply</p>
                    </div>

                    {/* Max Transaction Card */}
                    <div className="bg-[#0a0a0a] border border-red-900/40 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-[0_0_15px_rgba(220,38,38,0.1)] hover:shadow-[0_0_25px_rgba(239,68,68,0.2)] hover:border-red-500/50 transition-all duration-300">
                        <div className="w-16 h-16 rounded-full border border-red-900/50 flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-950/20 transition-colors">
                            <ShieldIcon />
                        </div>
                        <h3 className="text-3xl font-bold text-red-500 mb-2 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">0.5%</h3>
                        <p className="text-gray-400 font-medium">Max Transaction</p>
                    </div>

                    {/* Max Wallet Card */}
                    <div className="bg-[#0a0a0a] border border-red-900/40 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-[0_0_15px_rgba(220,38,38,0.1)] hover:shadow-[0_0_25px_rgba(239,68,68,0.2)] hover:border-red-500/50 transition-all duration-300">
                        <div className="w-16 h-16 rounded-full border border-red-900/50 flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-950/20 transition-colors">
                            <LockIcon />
                        </div>
                        <h3 className="text-3xl font-bold text-red-500 mb-2 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">1.5%</h3>
                        <p className="text-gray-400 font-medium">Max Wallet</p>
                    </div>

                </div>

                {/* Bottom 2 Cards Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Supply Distribution Card */}
                    <div className="bg-[#0a0a0a] border border-red-900/40 rounded-2xl p-8 shadow-[0_0_15px_rgba(220,38,38,0.1)] hover:shadow-[0_0_25px_rgba(239,68,68,0.2)] hover:border-red-500/50 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-red-400 mb-8 drop-shadow-[0_0_5px_rgba(239,68,68,0.3)]">Supply Distribution</h3>

                        <div className="space-y-5">
                            {distribution.map((item, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex justify-between text-sm font-semibold">
                                        <span className="text-gray-300">{item.label}</span>
                                        <span className="text-red-500">{item.percent}%</span>
                                    </div>
                                    {/* Progress Bar Track */}
                                    <div className="w-full bg-zinc-900 border border-zinc-800 rounded-full h-2.5 overflow-hidden">
                                        {/* Progress Bar Fill */}
                                        <div
                                            className="bg-red-600 h-2.5 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.8)]"
                                            style={{ width: `${item.percent}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Vesting Schedule Card */}
                    <div className="bg-[#0a0a0a] border border-red-900/40 rounded-2xl p-8 shadow-[0_0_15px_rgba(220,38,38,0.1)] hover:shadow-[0_0_25px_rgba(239,68,68,0.2)] hover:border-red-500/50 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-red-400 mb-8 drop-shadow-[0_0_5px_rgba(239,68,68,0.3)]">Vesting Schedule</h3>

                        <div className="space-y-8 mt-4">

                            {/* Team Vesting Item */}
                            <div className="flex items-start gap-4">
                                <div className="text-red-500 mt-1">
                                    <ClockIcon />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-200">Team Vesting</h4>
                                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                                        6 month cliff, 24 month linear vesting
                                    </p>
                                </div>
                            </div>

                            {/* Investor Vesting Item */}
                            <div className="flex items-start gap-4">
                                <div className="text-red-500 mt-1">
                                    <UsersIcon />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-200">Investor Vesting</h4>
                                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                                        25% instant, remaining over 90 days
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
