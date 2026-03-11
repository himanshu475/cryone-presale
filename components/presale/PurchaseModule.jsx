"use client";

import React, { useState, useEffect } from 'react';
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';
import { CONTRACT_ADDRESSES, PRESALE_ABI } from '../../app/config/contracts';
import { useWalletModal } from '../../app/context/WalletModalContext';

export default function PurchaseModule() {
    const { isConnected } = useAccount();
    const { openModal } = useWalletModal();
    const [mounted, setMounted] = useState(false);
    const [ethAmount, setEthAmount] = useState('');

    //Transaction Hooks
    const { writeContract, data: hash, isPending } = useWriteContract();
    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
        hash,
    });

    //Get the  current phase id, [1,2, 3]
    const { data: currentPhaseId } = useReadContract({
        address: CONTRACT_ADDRESSES.PRESALE,
        abi: PRESALE_ABI,
        functionName: "currentPhase",
        watch: true,
    });

    //currentPhaseId still undefined, this is just to handle crashing
    const phaseId = currentPhaseId ? Number(currentPhaseId) : 1;

    //WIll get [tokenRate, maxTokens, sold]
    const { data: phaseDetails } = useReadContract({
        address: CONTRACT_ADDRESSES.PRESALE,
        abi: PRESALE_ABI,
        functionName: "phases",
        args: [phaseId],
        watch: true,
    });

    const TOKEN_RATE = phaseDetails ? Number(phaseDetails[0]) : 0;

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleBuy = () => {
        if (!ethAmount || isNaN(parseFloat(ethAmount))) return;

        writeContract({
            address: CONTRACT_ADDRESSES.PRESALE,
            abi: PRESALE_ABI,
            functionName: "buyWithETH",
            value: parseEther(ethAmount.toString())
        });
    };


    //Clearing input box
    useEffect(() => {
        if (isSuccess) {
            setEthAmount('');
        }
    }, [isSuccess]);



    const crynAmount = ethAmount && !isNaN(parseFloat(ethAmount)) && TOKEN_RATE > 0 ?
        (parseFloat(ethAmount) * TOKEN_RATE).toLocaleString() : '0';

    if (!mounted) {
        return <div className="bg-black border border-zinc-800 rounded-3xl min-h-[400px] animate-pulse"></div>;
    }

    return (
        <div className="bg-gradient-to-b from-[#0a0a0a] to-black border border-zinc-800 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl">

            {/* Header */}
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center border border-red-500/30">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                Purchase Tokens
            </h3>

            {/* Connection Overlay */}
            {!isConnected && (
                <div className="absolute inset-0 z-20 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center rounded-3xl border border-zinc-800/50">
                    <div className="w-20 h-20 bg-red-950/40 rounded-full flex items-center justify-center mb-6 border border-red-900 shadow-[0_0_30px_rgba(220,38,38,0.2)]">
                        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    </div>
                    <h4 className="text-2xl font-black text-white mb-2 tracking-wide text-center">Wallet Not Connected</h4>
                    <p className="text-gray-400 text-center max-w-sm mb-8">
                        You must connect your Web3 wallet to the network in order to participate in the presale.
                    </p>
                    <button
                        onClick={() => openModal()}
                        className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all flex items-center gap-2 transform hover:scale-105"
                    >
                        Connect Wallet Now
                    </button>
                </div>
            )}

            {/* Main Interactive UI */}
            <div className={`space-y-6 transition-all duration-500 ${!isConnected ? 'opacity-20 pointer-events-none blur-sm select-none' : 'opacity-100'}`}>

                {/* Pay Section */}
                <div className="bg-[#111] p-5 rounded-2xl border border-zinc-800 focus-within:border-red-500/50 transition-colors">
                    <div className="flex justify-between mb-2">
                        <label className="text-xs text-gray-500 uppercase font-bold tracking-wider">You Pay</label>
                        <span className="text-xs text-gray-400 font-medium tracking-wide">Balance: 0.00 ETH</span>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <input
                            type="number"
                            placeholder="0.0"
                            className="bg-transparent text-4xl font-black text-white w-full outline-none placeholder-zinc-700"
                            value={ethAmount}
                            onChange={(e) => setEthAmount(e.target.value)}
                        />
                        <div className="bg-black px-4 py-2.5 rounded-xl flex items-center gap-2 border border-zinc-800 shrink-0">
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.4)]">
                                <span className="text-white text-[10px] font-bold">ETH</span>
                            </div>
                            <span className="text-white font-bold">ETH</span>
                        </div>
                    </div>
                </div>

                {/* Arrow Connector */}
                <div className="flex justify-center -my-3 relative z-10">
                    <div className="w-12 h-12 bg-black border-4 border-[#0a0a0a] rounded-full flex items-center justify-center text-red-500 shadow-[0_0_15px_rgba(220,38,38,0.15)]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                    </div>
                </div>

                {/* Receive Section */}
                <div className="bg-red-950/10 p-5 rounded-2xl border border-red-900/30">
                    <div className="flex justify-between mb-2">
                        <label className="text-xs text-red-500 uppercase font-bold tracking-wider">You Receive</label>
                        <span className="text-xs text-red-500/70 font-medium tracking-wide">Rate: 1 ETH = {TOKEN_RATE.toLocaleString()} CRYN</span>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <input
                            type="text"
                            className="bg-transparent text-4xl font-black text-white w-full outline-none truncate"
                            value={crynAmount}
                            readOnly
                        />
                        <div className="bg-red-950/50 px-4 py-2.5 rounded-xl flex items-center gap-2 border border-red-900/50 shrink-0">
                            <span className="text-red-500 font-bold tracking-widest">CRYN</span>
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <button
                    onClick={handleBuy}
                    disabled={!ethAmount || parseFloat(ethAmount) <= 0 || isPending || isConfirming}
                    className="w-full py-4 mt-4 bg-red-600 disabled:bg-zinc-800 disabled:text-zinc-500 hover:bg-red-500 text-white font-black text-lg tracking-wide rounded-xl shadow-[0_0_20px_rgba(220,38,38,0.4)] disabled:shadow-none transition-all duration-300 transform active:scale-[0.98] disabled:transform-none"
                >
                    {isPending ? 'Confirming in Wallet...' :
                        isConfirming ? 'Processing Transaction...' :
                            ethAmount && parseFloat(ethAmount) > 0 ? "Purchase Tokens" : "Enter Amount"}
                </button>

                {isSuccess && (
                    <p className="text-center text-emerald-500 text-sm font-bold mt-2 animate-pulse">
                        🎉 Transaction Successful! Tokens purchased.
                    </p>
                )}


            </div>
        </div>
    );
}
