"use client";

import React, { useState, useEffect } from 'react';
import { useReadContract } from 'wagmi';
import { formatUnits } from 'viem';
import { CONTRACT_ADDRESSES, PRESALE_ABI } from '../../app/config/contracts';

export default function PresaleStatus() {
    const { data: currentPhaseId } = useReadContract({
        abi: PRESALE_ABI,
        address: CONTRACT_ADDRESSES.PRESALE,
        functionName: "currentPhase",
        watch: true
    });

    const phaseId = currentPhaseId ? Number(currentPhaseId) : 1;

    const { data: phaseDetails } = useReadContract({
        address: CONTRACT_ADDRESSES.PRESALE,
        abi: PRESALE_ABI,
        functionName: "phases",
        args: [phaseId],
        watch: true,
    })

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);


    let tokenRate = "0";
    let maxTokens = 0;
    let tokensSold = 0;

    if (phaseDetails) {
        tokenRate = Number(phaseDetails[0]);
        maxTokens = Number(formatUnits(phaseDetails[1], 18));
        tokensSold = Number(formatUnits(phaseDetails[2], 18));
    }

    const progressPercentage = maxTokens > 0 ? (tokensSold / maxTokens) * 100 : 0;

    const getPhaseName = (id) => {
        if (id === 1) return "Phase 1 (Early Bird)";
        if (id === 2) return "Phase 2 (Public)";
        if (id === 3) return "Phase 3 (Final)";

        return `Phase ${id}`;
    }
    if (!mounted) return <div className="h-40 bg-[#0a0a0a] rounded-3xl animate-pulse"></div>;
    return (
        <div className="bg-[#0a0a0a] border border-red-900/40 rounded-3xl p-6 md:p-8 relative overflow-hidden group">
            {/* Ambient Background Glow matching the progress */}
            <div
                className="absolute top-0 left-0 h-full w-1/2 bg-red-900/5 blur-[80px] pointer-events-none transition-all duration-1000"
                style={{ width: `${progressPercentage}%` }}
            ></div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                {/* Left Side: Phase Info */}
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="px-3 py-1 bg-red-950/50 border border-red-900 rounded-md text-red-500 text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse hidden sm:block"></span>
                            LIVE NOW
                        </div>
                        <h2 className="text-2xl font-black text-white tracking-wide">
                            {getPhaseName(phaseId)}
                        </h2>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Secure your allocation before the phase ends and price increases.
                    </p>
                </div>
                {/* Right Side: Key Stats Cards */}
                <div className="flex gap-4 w-full md:w-auto">
                    <div className="bg-black border border-zinc-800 rounded-xl p-4 flex-1 md:w-32 text-center">
                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Current Price</p>
                        <p className="text-lg font-black text-white">1 ETH = {tokenRate.toLocaleString()} <span className="text-sm text-gray-400 font-medium">CRYN</span></p>

                    </div>
                    {/* Note: We removed 'Total ETH Raised' here because the smart contract phases() mapping only returns tokensSold. To calculate exact ETH raised per phase, we would multiply tokensSold * tokenRate */}
                </div>
            </div>
            {/* Progress Bar Section */}
            <div className="relative z-10">
                <div className="flex justify-between text-sm font-bold mb-3">
                    <span className="text-gray-400">Phase {phaseId} Progress</span>
                    <span className="text-red-400 tracking-wider">
                        {tokensSold.toLocaleString()} / {maxTokens.toLocaleString()} CRYN
                    </span>
                </div>
                {/* The Bar */}
                <div className="w-full h-4 bg-black rounded-full overflow-hidden border border-zinc-800 p-0.5">
                    <div
                        className="h-full bg-gradient-to-r from-red-800 via-red-600 to-red-500 rounded-full relative shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all duration-1000 ease-out"
                        style={{ width: `${progressPercentage}%` }}
                    >
                        {/* Shimmer effect inside the bar */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-full">
                            <div className="w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] animate-[shimmer_2s_infinite]"></div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-3 text-xs font-semibold text-gray-500">
                    <span>{progressPercentage.toFixed(1)}% Sold</span>
                    <span>Target: {maxTokens.toLocaleString()} CRYN</span>
                </div>
            </div>
        </div>
    );
}