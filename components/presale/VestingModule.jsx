"use client";

import React, { useState, useEffect } from 'react';
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { formatUnits } from 'viem';
import { CONTRACT_ADDRESSES, PRESALE_ABI } from '../../app/config/contracts';
import { ArrowDownToLine, LockOpen, Clock, AlertCircle } from 'lucide-react';


export default function VestingModule() {
    const { address, isConnected } = useAccount();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    //1. Read: USER's total allocation
    const { data: investorData } = useReadContract({
        address: CONTRACT_ADDRESSES.PRESALE,
        abi: PRESALE_ABI,
        functionName: "investors",
        args: [address],
        query: {
            enabled: !!address,
        },
        watch: true,
    });

    const { data: claimableData } = useReadContract({
        address: CONTRACT_ADDRESSES.PRESALE,
        abi: PRESALE_ABI,
        functionName: "calculateClaimableAmount",
        args: [address],
        query: {
            enabled: !!address,
        },
        watch: true
    });

    // Read: Is Presale Active?
    const { data: isPresaleActive } = useReadContract({
        address: CONTRACT_ADDRESSES.PRESALE,
        abi: PRESALE_ABI,
        functionName: 'isPresaleActive',
        watch: true,
    });

    const { writeContract, data: hash, isPending } = useWriteContract();
    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
        hash,
    });

    const handleClaim = () => {
        writeContract({
            address: CONTRACT_ADDRESSES.PRESALE,
            abi: PRESALE_ABI,
            functionName: "claimTokens",

        });
    };

    let totalAllocated = 0;
    let claimedAmount = 0;
    let currentlyClaimable = 0;

    if (investorData) {
        totalAllocated = formatUnits(investorData[0], 18);
        claimedAmount = formatUnits(investorData[1], 18);
        currentlyClaimable = Number(formatUnits(claimableData, 18));
    }

    const lockedAmount = totalAllocated - claimedAmount - currentlyClaimable;
    const progressPercentage = totalAllocated > 0 ? (claimedAmount / totalAllocated) * 100 : 0;

    // Loading State
    if (!mounted) return <div className="h-40 bg-[#0a0a0a] rounded-3xl animate-pulse"></div>;
    // Disconnected State
    if (!isConnected) {
        return (
            <div className="bg-[#0a0a0a] border border-zinc-800/50 rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                <LockOpen className="w-12 h-12 text-zinc-700 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Connect Wallet to View Vesting</h3>
                <p className="text-zinc-500 text-sm max-w-sm">
                    Connect your wallet to see your $CRYN token allocation, vesting schedule, and claim unlocked tokens.
                </p>
            </div>
        );
    }
    // Connected but no tokens state
    if (Number(totalAllocated) === 0) {
        return (
            <div className="bg-[#0a0a0a] border border-zinc-800/50 rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                <AlertCircle className="w-12 h-12 text-zinc-700 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No Allocation Found</h3>
                <p className="text-zinc-500 text-sm max-w-sm">
                    You don't have any $CRYN tokens locked in vesting yet. Participate in the active presale phase to secure your allocation.
                </p>
            </div>
        );
    }
    return (
        <div className="bg-[#0a0a0a] border border-zinc-800/50 rounded-3xl p-6 md:p-8 flex flex-col h-full">
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h2 className="text-2xl font-black text-white tracking-wide mb-1">Your Allocation</h2>
                    <p className="text-zinc-400 text-sm">Manage and claim your $CRYN tokens</p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 px-4 py-2 rounded-xl text-right">
                    <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider mb-0.5">Total Owned</p>
                    <p className="text-lg font-black text-white">{totalAllocated.toLocaleString()} <span className="text-xs text-zinc-500">CRYN</span></p>
                </div>
            </div>
            {/* Claims Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-black border border-zinc-800/80 rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <LockOpen className="w-4 h-4 text-emerald-500" />
                        <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Available Now</p>
                    </div>
                    <p className="text-2xl font-black text-emerald-400">{currentlyClaimable.toLocaleString()}</p>
                </div>
                <div className="bg-black border border-zinc-800/80 rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-amber-500" />
                        <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Still Locked</p>
                    </div>
                    <p className="text-2xl font-black text-white">{lockedAmount.toLocaleString()}</p>
                </div>
            </div>
            {/* Visual Progress */}
            <div className="mb-8">
                <div className="flex justify-between text-xs font-bold text-zinc-500 mb-2">
                    <span>Claim Progress</span>
                    <span>{progressPercentage.toFixed(0)}%</span>
                </div>
                <div className="w-full h-2 bg-black rounded-full overflow-hidden border border-zinc-800">
                    <div
                        className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>
                <div className="flex justify-between text-[10px] text-zinc-600 mt-2 font-medium uppercase tracking-wider">
                    <span>Claimed: {claimedAmount.toLocaleString()}</span>
                    <span>Total: {totalAllocated.toLocaleString()}</span>
                </div>
            </div>
            {/* Action Area */}
            <div className="mt-auto">
                <button
                    onClick={handleClaim}
                    disabled={isPresaleActive || currentlyClaimable === 0 || isPending || isConfirming}
                    className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-2
                        ${!isPresaleActive && currentlyClaimable > 0 && !isPending && !isConfirming
                            ? 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                            : 'bg-zinc-900 text-zinc-600 cursor-not-allowed border border-zinc-800'
                        }`}
                >
                    {isPresaleActive ? 'Vesting Locked: Presale Active' :
                        isPending ? 'Confirm in Wallet...' :
                            isConfirming ? 'Processing block...' :
                                (
                                    <>
                                        <ArrowDownToLine className="w-4 h-4" />
                                        {currentlyClaimable === 0 ? 'Nothing to Claim' : 'Claim Tokens'}
                                    </>
                                )}
                </button>
                {isSuccess && (
                    <p className="text-emerald-500 text-center text-xs mt-3 font-bold animate-pulse">
                        Tokens Claimed Successfully!
                    </p>
                )}
            </div>
        </div>
    );
}