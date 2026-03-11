"use client";

import React, { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';

export default function WalletStatusBadge() {
    const { isConnected } = useAccount();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-[140px] h-[36px] bg-zinc-900 rounded-lg animate-pulse"></div>;
    }

    return (
        <div className="flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 rounded-lg px-4 py-2 transition-colors">
            <span className={`w-2 h-2 rounded-full shadow-[0_0_8px_currentColor] animate-pulse ${isConnected ? 'bg-green-500 text-green-500' : 'bg-red-500 text-red-500'}`}></span>
            <span className="text-sm font-bold text-gray-300">
                {isConnected ? 'Wallet Connected' : 'Not Connected'}
            </span>
        </div>
    );
}
