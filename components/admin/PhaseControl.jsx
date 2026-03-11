"use client";

import React, { useState, useEffect } from 'react';
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { CONTRACT_ADDRESSES, PRESALE_ABI } from '../../app/config/contracts';

export default function PhaseControl() {
    const { isConnected, address } = useAccount();
    const [mounted, setMounted] = useState(false);
    const { writeContract, data: hash, isPending: isWritePending, error } = useWriteContract();

    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
        hash
    });

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

    const handleTogglePresale = () => {
        writeContract({
            address: CONTRACT_ADDRESSES.PRESALE,
            abi: PRESALE_ABI,
            functionName: 'setPresaleStatus',
            args: [!isPresaleActive]
        });
    };

    const handleSetPhase = (newPhaseNumber) => {
        writeContract({
            address: CONTRACT_ADDRESSES.PRESALE,
            abi: PRESALE_ABI,
            functionName: 'setPhase',
            args: [newPhaseNumber],
        });
    };




    if (!mounted) {
        return <div className="bg-[#0a0a0a] border border-zinc-800 rounded-3xl min-h-[300px] animate-pulse"></div>;
    }

    if (!isConnected) {
        return (
            <div className="bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-red-950/40 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-white">Wallet Not Connected</h3>
                <p className="text-gray-400 mt-2">Connect an Admin wallet to manage the presale.</p>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-br from-[#0a0a0a] to-[#111] border border-zinc-800 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-red-900/10 rounded-full blur-[100px] pointer-events-none transition-opacity duration-1000 ${isPresaleActive ? 'opacity-100' : 'opacity-0'}`}></div>

            <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                Lifecycle Controls
            </h3>

            {(isWritePending || isConfirming) && (
                <div className="bg-blue-500/10 border border-blue-500/30 text-blue-400 p-4 rounded-xl mb-6 flex items-center justify-center gap-2 animate-pulse font-bold">
                    <svg className="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Processing Transaction on Sepolia...
                </div>
            )}

            {error && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-500 p-4 rounded-xl mb-6 text-sm break-all">
                    <span className="font-bold">Transaction Failed:</span> {error.shortMessage || error.message}
                </div>
            )}


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Global Status Control */}
                <div className="bg-black border border-zinc-800 rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-gray-400 font-bold uppercase tracking-wider text-sm">Sale Status</span>
                        {isPresaleActive ? (
                            <span className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase border border-emerald-500/30">Live Now</span>
                        ) : (
                            <span className="bg-zinc-900 text-zinc-500 px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase border border-zinc-800">Paused</span>
                        )}
                    </div>

                    <button
                        onClick={handleTogglePresale}
                        disabled={isWritePending || isConfirming}
                        className={`w-full py-4 rounded-xl font-black text-lg transition-all ${isPresaleActive
                            ? 'bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700'
                            : 'bg-red-600 hover:bg-red-500 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]'
                            }`}
                    >
                        {isPresaleActive ? "Pause Presale" : "START PRESALE"}
                    </button>
                    <p className="text-xs text-zinc-500 text-center mt-3">
                        {isPresaleActive ? "Pausing will prevent any new purchases." : "This will immediately allow users to buy tokens."}
                    </p>
                </div>

                {/* Phase Control */}
                <div className="bg-black border border-zinc-800 rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-gray-400 font-bold uppercase tracking-wider text-sm">Active Phase</span>
                        <span className="text-white font-black text-xl">Phase {currentPhaseId ? Number(currentPhaseId) : 1}</span>
                    </div>

                    <div className="flex gap-2">
                        {[1, 2, 3].map((phaseNum) => (
                            <button
                                key={phaseNum}
                                onClick={() => handleSetPhase(phaseNum)}
                                disabled={isWritePending || isConfirming || Number(currentPhaseId) === phaseNum}
                                className={`flex-1 py-4 rounded-xl font-bold transition-all border ${Number(currentPhaseId) === phaseNum
                                    ? 'bg-red-600 border-red-500 text-white shadow-[0_0_15px_rgba(220,38,38,0.3)]'
                                    : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                                    }`}
                            >
                                Ph {phaseNum}
                            </button>
                        ))}
                    </div>
                    <p className="text-xs text-zinc-500 text-center mt-3">
                        Switching phases will instantly update the rate globally.
                    </p>
                </div>

            </div>
        </div>
    );
}
