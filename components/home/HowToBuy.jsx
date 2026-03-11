"use client";

import React, { useState } from 'react';

export default function HowToBuy() {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            number: "01",
            title: "Connect Your Wallet",
            description: "Use MetaMask, WalletConnect, or Coinbase Wallet to connect to the dApp on the Ethereum network.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>
            )
        },
        {
            number: "02",
            title: "Choose ETH Amount",
            description: "Enter the amount of ETH in the swap UI. The DApp will instantly calculate your $CRYN allocation based on the current phase price.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
            )
        },
        {
            number: "03",
            title: "Confirm Transaction",
            description: "Approve the transaction in your wallet popup. Wait for the network confirmation to officially secure your presale tokens.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            )
        },
        {
            number: "04",
            title: "Claim Tokens Later",
            description: "Once the presale concludes, return to the dApp dashboard to securely claim your vested tokens via the smart contract.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            )
        }
    ];

    return (
        <section className="py-24 bg-[#050505] relative">
            {/* Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header Section */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-5xl md:text-6xl font-extrabold tracking-wide text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                        How to <span className="text-transparent drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" style={{ WebkitTextStroke: '2px #ef4444' }}>Buy</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium mb-12">
                        Joining the Cryone presale is simple, secure, and decentralized. Click through the steps to see how to participate.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">

                    {/* Left side: Interactive Steps List */}
                    <div className="flex-1 w-full space-y-4">
                        {steps.map((step, index) => {
                            const isActive = activeStep === index;
                            return (
                                <div
                                    key={index}
                                    onClick={() => setActiveStep(index)}
                                    className={`relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden flex items-start gap-4 
                                        ${isActive
                                            ? 'bg-zinc-900/80 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)] transform scale-[1.02]'
                                            : 'bg-black border-zinc-800 hover:border-red-900/50 hover:bg-zinc-900/50'
                                        }`}
                                >
                                    {/* Active Gradient Sweep Background */}
                                    {isActive && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent pointer-events-none"></div>
                                    )}

                                    {/* Icon */}
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 relative z-10
                                        ${isActive ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(239,68,68,0.6)] scale-110' : 'bg-zinc-800 text-gray-500'}
                                    `}>
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className={`text-sm font-black ${isActive ? 'text-red-500' : 'text-gray-600'}`}>{step.number}</span>
                                            <h3 className={`text-xl font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400'}`}>
                                                {step.title}
                                            </h3>
                                        </div>
                                        {isActive && (
                                            <p className="text-gray-300 text-sm leading-relaxed mt-2 animate-[fadeIn_0.3s_ease-out]">
                                                {step.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right side: Interactive Visual Interface */}
                    <div className="flex-1 w-full flex justify-center perspective-[1000px]">
                        {/* 3D Tilted container for the Mock UI */}
                        <div className="w-full max-w-md aspect-[4/5] bg-gradient-to-b from-[#111] to-black border border-red-900/40 rounded-3xl shadow-[0_0_50px_rgba(220,38,38,0.15)] relative overflow-hidden flex flex-col pt-8 px-6 pb-6 transform transition-all duration-500 hover:[transform:rotateY(-5deg)_rotateX(5deg)] style-preserve-3d [transform:rotateY(-10deg)_rotateX(5deg)]">

                            {/* Browser/Window mock header */}
                            <div className="absolute top-0 left-0 w-full h-10 bg-black/80 backdrop-blur-md border-b border-zinc-800 flex items-center px-4 gap-2 z-20">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                <div className="ml-auto w-1/3 h-2 bg-zinc-800 rounded-full"></div>
                            </div>

                            <div className="mt-8 flex-1 flex flex-col justify-center items-center relative z-10">

                                {/* Step 1: Connect Wallet Mock UI */}
                                <div className={`w-full absolute transition-all duration-500 ${activeStep === 0 ? 'opacity-100 translate-y-0 relative z-20' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                                    <div className="text-center mb-8">
                                        <div className="w-20 h-20 bg-red-900/20 rounded-full mx-auto flex items-center justify-center border border-red-500/30 mb-4 shadow-[0_0_30px_rgba(220,38,38,0.2)] animate-pulse">
                                            <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                                        </div>
                                        <h4 className="text-2xl font-bold text-white tracking-wide">Connect Wallet</h4>
                                        <p className="text-sm text-gray-400 mt-2">Link your Web3 wallet to start</p>
                                    </div>
                                    <div className="space-y-4">
                                        <button className="w-full py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-red-500/50 rounded-xl flex items-center justify-between px-6 transition-all group">
                                            <span className="text-white font-medium group-hover:text-red-400 transition-colors">MetaMask</span>
                                            <div className="w-6 h-6 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                                        </button>
                                        <button className="w-full py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-red-500/50 rounded-xl flex items-center justify-between px-6 transition-all group">
                                            <span className="text-white font-medium group-hover:text-red-400 transition-colors">WalletConnect</span>
                                            <div className="w-6 h-6 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                        </button>
                                    </div>
                                </div>

                                {/* Step 2: Choose ETH Amount Mock UI */}
                                <div className={`w-full absolute transition-all duration-500 ${activeStep === 1 ? 'opacity-100 translate-y-0 relative z-20' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                                    <h4 className="text-xl font-bold text-white text-center mb-6">Presale Swap</h4>
                                    <div className="bg-[#151515] p-5 rounded-2xl border border-zinc-700 relative">
                                        <label className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-2 block">You Pay</label>
                                        <div className="flex justify-between items-center">
                                            <input type="text" className="bg-transparent text-4xl font-bold text-white w-1/2 outline-none" value="1.5" readOnly />
                                            <div className="bg-black px-4 py-2 rounded-xl flex items-center gap-2 border border-zinc-800">
                                                <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(96,165,250,0.5)]"><span className="text-white text-[10px] font-bold">ETH</span></div>
                                                <span className="text-white font-bold">ETH</span>
                                            </div>
                                        </div>
                                        <div className="text-xs text-gray-500 mt-2">Balance: 2.45 ETH</div>
                                    </div>

                                    <div className="flex justify-center -my-3 relative z-10">
                                        <div className="w-12 h-12 bg-black border-[4px] border-[#0a0a0a] rounded-full flex items-center justify-center text-red-500 hover:text-white hover:bg-red-600 transition-colors shadow-[0_0_15px_rgba(220,38,38,0.3)] cursor-pointer">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                                        </div>
                                    </div>

                                    <div className="bg-red-950/20 p-5 rounded-2xl border border-red-900/50 relative">
                                        <label className="text-xs text-red-400 uppercase font-bold tracking-wider mb-2 block">You Receive</label>
                                        <div className="flex justify-between items-center">
                                            <input type="text" className="bg-transparent text-4xl font-bold text-white w-2/3 outline-none" value="150,000" readOnly />
                                            <div className="bg-red-900/40 px-4 py-2 rounded-xl flex items-center gap-2 border border-red-500/30">
                                                <span className="text-red-400 font-bold tracking-widest text-sm">CRYN</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="w-full py-4 mt-6 bg-red-600 hover:bg-red-500 text-white font-black text-lg rounded-xl shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all transform hover:scale-[1.02]">
                                        Review Transaction
                                    </button>
                                </div>

                                {/* Step 3: Confirm Transaction Mock UI */}
                                <div className={`w-full absolute transition-all duration-500 ${activeStep === 2 ? 'opacity-100 translate-y-0 relative z-20' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                                    <div className="text-center mb-8">
                                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-zinc-900 border-[3px] border-zinc-700 mb-6 animate-[spin_4s_linear_infinite] shadow-[0_0_15px_rgba(255,255,255,0.05)] relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-red-600/20 rounded-full animate-spin"></div>
                                            <svg className="w-10 h-10 text-gray-500 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                                        </div>
                                        <h4 className="text-2xl font-bold text-white mb-2">Signature Request</h4>
                                        <p className="text-sm text-gray-400 px-6">Review the transaction details in your wallet provider to sign and confirm.</p>
                                    </div>

                                    <div className="bg-black/50 backdrop-blur-sm rounded-xl p-5 border border-zinc-800 space-y-4 shadow-inner">
                                        <div className="flex justify-between items-center text-sm border-b border-zinc-800 pb-3">
                                            <span className="text-gray-400">Estimated Gas Fee</span>
                                            <span className="text-gray-300 font-medium">0.0021 ETH <br /><span className="text-xs text-gray-500">(~$3.42)</span></span>
                                        </div>
                                        <div className="flex justify-between items-end text-sm">
                                            <span className="text-gray-400 text-lg font-bold">Total Pay</span>
                                            <span className="text-white text-xl font-bold">1.5021 ETH <br /><span className="text-xs text-gray-500 font-normal float-right">(~$2,450.00)</span></span>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 mt-6">
                                        <button className="flex-1 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-xl transition-all border border-zinc-700">Reject</button>
                                        <button className="flex-1 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.6)] animate-pulse">Confirm</button>
                                    </div>
                                </div>

                                {/* Step 4: Claim Tokens Mock UI */}
                                <div className={`w-full absolute transition-all duration-500 ${activeStep === 3 ? 'opacity-100 translate-y-0 relative z-20' : 'opacity-0 translate-y-8 pointer-events-none'}`}>

                                    <div className="text-center mb-8">
                                        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-500 to-red-900 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(239,68,68,0.7)] border-4 border-[#151515] relative">
                                            <div className="absolute inset-0 rounded-full border border-red-400 animate-ping opacity-60"></div>
                                            <span className="text-white font-black text-2xl tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">CRYN</span>
                                        </div>
                                    </div>

                                    <div className="bg-[#151515] rounded-xl p-5 border border-red-900/30 text-center mb-6">
                                        <h4 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-1">Your Allocation</h4>
                                        <p className="text-3xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">150,000</p>
                                        <p className="text-red-500 text-xs font-bold tracking-widest mt-1">$CRYN SECURED</p>
                                    </div>

                                    <div className="space-y-2 mb-8">
                                        <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                                            <span className="text-green-400">25% Unlocked</span>
                                            <span className="text-gray-500">75% Vesting</span>
                                        </div>
                                        <div className="w-full h-3 bg-black rounded-full overflow-hidden border border-zinc-800 relative">
                                            <div className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-green-600 to-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)] rounded-r-full border-r border-green-300"></div>
                                        </div>
                                    </div>

                                    <button className="w-full py-4 bg-zinc-900 text-white font-bold text-lg tracking-wide rounded-xl transition-all duration-300 border border-zinc-700 hover:border-green-500 group relative overflow-hidden shadow-lg">
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            Claim 37,500 Tokens
                                            <svg className="w-5 h-5 text-green-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                        </span>
                                        <div className="absolute inset-0 w-0 bg-green-600 group-hover:w-full transition-all duration-500 z-0"></div>
                                    </button>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
