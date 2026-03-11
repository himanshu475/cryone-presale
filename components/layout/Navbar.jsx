"use client";
import Link from "next/link";
import ConnectButton from "./ConnectButton";
import { useAccount, useReadContract } from 'wagmi';
import { CONTRACT_ADDRESSES, PRESALE_ABI } from '../../app/config/contracts';

export default function Navbar() {
    const { address, isConnected } = useAccount();

    const { data: contractOwner } = useReadContract({
        address: CONTRACT_ADDRESSES.PRESALE,
        abi: PRESALE_ABI,
        functionName: 'owner',
    });

    const isOwner = isConnected && address && contractOwner && address.toLowerCase() === contractOwner.toLowerCase();

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-red-900/20 bg-black/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Left: Logo Section */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">

                        {/* Custom Neon SVG Symbol */}
                        <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            {/* Outer Glow */}
                            <div className="absolute inset-0 bg-red-600 rounded-full blur-[12px] opacity-60"></div>

                            {/* Inner Shape */}
                            <svg className="relative z-10 w-full h-full text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,1)]" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 2L34 16L20 38L6 16L20 2Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                                <path d="M20 2L20 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70" />
                                <path d="M6 16L34 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70" />
                                <circle cx="20" cy="16" r="4" fill="black" stroke="currentColor" strokeWidth="2.5" />
                            </svg>
                        </div>

                        <h1 className="text-2xl md:text-3xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] transform -rotate-[3deg] hover:rotate-0 origin-bottom-left transition-transform duration-300">
                            CRY<span className="text-red-600 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)] neon-text">ONE</span>
                        </h1>
                    </Link>

                    {/* Center: Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {/* Notice Home is red to show it's the active page */}
                        <Link href="/" className="text-red-500 font-semibold tracking-wide drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">
                            Home
                        </Link>
                        <Link href="/presale" className="text-gray-300 font-semibold tracking-wide hover:text-red-500 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] transition-all duration-300">
                            Presale
                        </Link>
                        {isOwner && (
                            <Link href="/admin" className="text-gray-300 font-semibold tracking-wide hover:text-red-500 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] transition-all duration-300">
                                Admin
                            </Link>
                        )}
                    </div>

                    {/* Right: Wallet Connect Button */}
                    <div>
                        <ConnectButton />
                    </div>

                </div>
            </div>
        </nav>
    );
}