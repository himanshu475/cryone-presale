"use client";
import React, { useState, useEffect } from 'react';
import { useReadContract } from 'wagmi';
import { CONTRACT_ADDRESSES, PRESALE_ABI } from '../../app/config/contracts';

export default function PresalePhases() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const { data: isPresaleActive } = useReadContract({
        address: CONTRACT_ADDRESSES.PRESALE,
        abi: PRESALE_ABI,
        functionName: 'isPresaleActive',
        watch: true,
    });

    const { data: currentPhaseId } = useReadContract({
        address: CONTRACT_ADDRESSES.PRESALE,
        abi: PRESALE_ABI,
        functionName: 'currentPhase',
        watch: true,
    });

    // Mock data for the phases based on the tokenomics plan
    const phases = [
        {
            id: 1,
            name: "Phase 1 - Early Bird",
            price: "1 ETH = 170,000 CRYN",
            allocation: "2,000,000 CRYN",
            perks: "Highest Bonus, Instant 25% TGE Unlock"
        },
        {
            id: 2,
            name: "Phase 2 - Public Round",
            price: "1 ETH = 145,000 CRYN",
            allocation: "3,000,000 CRYN",
            perks: "Standard Vesting Applies"
        },
        {
            id: 3,
            name: "Phase 3 - Final Call",
            price: "1 ETH = 125,000 CRYN",
            allocation: "3,000,000 CRYN",
            perks: "Last Chance Before Dex Listing"
        }
    ];

    return (
        <div className="bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                Presale Phases
            </h3>

            <div className="space-y-4">
                {mounted && phases.map((phase, index) => {
                    const pId = Number(currentPhaseId || 1);
                    let status = "upcoming";

                    if (phase.id < pId) {
                        status = "past";
                    } else if (phase.id === pId) {
                        status = isPresaleActive ? "active" : "paused";
                    } else {
                        status = "upcoming";
                    }

                    const isActive = status === 'active';
                    const isPast = status === 'past';
                    const isPaused = status === 'paused';

                    return (
                        <div
                            key={index}
                            className={`relative p-5 rounded-2xl border transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4
                                ${isActive ? 'bg-red-950/20 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.15)]' :
                                    isPast ? 'bg-zinc-900/50 border-zinc-800 opacity-60' :
                                        isPaused ? 'bg-amber-950/10 border-amber-500/50' :
                                            'bg-black border-zinc-800 hover:border-zinc-700'}
                            `}
                        >
                            {/* Left Side: Status & Name */}
                            <div className="flex items-center gap-4">
                                <div className={`w-3 h-3 rounded-full flex-shrink-0 
                                    ${isActive ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse' :
                                        isPast ? 'bg-gray-600' :
                                            isPaused ? 'bg-amber-500 animate-pulse' : 'bg-zinc-700'}
                                `}></div>
                                <div>
                                    <h4 className={`text-lg font-bold ${isActive || isPaused ? 'text-white' : 'text-gray-300'}`}>
                                        {phase.name}
                                    </h4>
                                    <span className={`text-xs uppercase font-bold tracking-wider 
                                        ${isActive ? 'text-red-400' : isPast ? 'text-gray-500' : isPaused ? 'text-amber-500' : 'text-gray-600'}
                                    `}>
                                        {isActive ? 'Live Now' : isPast ? 'Completed' : isPaused ? 'Paused' : 'Upcoming'}
                                    </span>
                                </div>
                            </div>

                            {/* Right Side: Details */}
                            <div className="flex flex-wrap gap-4 sm:gap-8 w-full sm:w-auto mt-2 sm:mt-0">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-0.5">Price</p>
                                    <p className={`font-mono font-medium ${isActive || isPaused ? 'text-white' : 'text-gray-400'}`}>{phase.price}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-0.5">Allocation</p>
                                    <p className={`font-medium ${isActive || isPaused ? 'text-white' : 'text-gray-400'}`}>{phase.allocation}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-6 pt-5 border-t border-zinc-800/50">
                <p className="text-xs text-gray-500 tracking-wide">
                    * Tokens purchased in any phase are subject to the global smart contract vesting schedule (25% TGE Unlock, 75% linear over 90 days).
                </p>
            </div>
        </div>
    );
}
