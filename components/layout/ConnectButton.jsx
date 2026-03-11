"use client";

import { useAccount, useDisconnect } from 'wagmi';
import { useWalletModal } from '../../app/context/WalletModalContext';
import { useEffect, useState } from 'react';

export default function ConnectButton() {
    const { address, isConnected } = useAccount();
    const { openModal } = useWalletModal();
    const { disconnect } = useDisconnect();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-[160px] h-[44px] bg-zinc-900 rounded-md animate-pulse"></div>;
    }

    if (isConnected) {
        return (
            <button
                onClick={() => disconnect()}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-700 text-white rounded-md font-semibold tracking-wide hover:bg-red-950/50 hover:border-red-900 hover:text-red-400 transition-all duration-300"
                title="Click to disconnect"
            >
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                {address?.slice(0, 6)}...{address?.slice(-4)}
            </button>
        );
    }

    return (
        <button
            onClick={() => openModal()}
            className="flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white rounded-md font-semibold tracking-wide shadow-[0_0_15px_rgba(220,38,38,0.6)] hover:bg-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,1)] transition-all duration-300"
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
            </svg>
            Connect Wallet
        </button>
    );
}
