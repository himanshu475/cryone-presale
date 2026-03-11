"use client";

import React, { useEffect, useState } from 'react';
import { useConnect } from 'wagmi';


export default function WalletModal({ onClose }) {
    const [selectedNetwork, setSelectedNetwork] = useState('sepolia');
    const { connect, connectors } = useConnect();

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);


    const handleConnect = (walletId) => {
        console.log(`Connecting to ${walletId} on ${selectedNetwork} network...`);


        let targetConnectorId = '';
        if (walletId === 'metaMask') targetConnectorId = 'metaMaskSDK';
        else if (walletId === 'walletConnect') targetConnectorId = 'walletConnect';
        else if (walletId === 'coinbaseWallet') targetConnectorId = 'coinbaseWalletSDK';
        else if (walletId === 'injected') targetConnectorId = 'injected';

        // Map UI Network names to actual ETH Chain IDs
        const chainMap = {
            'ethereum': 1,
            'sepolia': 11155111,
            'arbitrum': 42161,
            'optimism': 10,
            'polygon': 137,
            'base': 8453
        };

        const targetChainId = chainMap[selectedNetwork] || 1;

        //only works if user has new version of wallet
        let connector = connectors.find((c) => c.id === targetConnectorId);

        // MetaMask fallback 
        if (!connector && walletId === 'metaMask') {
            connector = connectors.find(c => c.id === 'io.metamask' || c.id === 'injected');
        }

        // Final generic fallback
        if (!connector) {
            connector = connectors.find(c => c.id === 'injected');
        }

        if (connector) {
            connect({ connector, chainId: targetChainId });
            onClose();
        } else {
            console.error("No applicable connector found for:", walletId);
        }
    };

    const networks = [
        { id: 'sepolia', name: 'Sepolia (Testnet)', color: 'bg-gray-500' },
        { id: 'ethereum', name: 'Ethereum', color: 'bg-blue-500' },
        { id: 'arbitrum', name: 'Arbitrum', color: 'bg-indigo-500' },
        { id: 'optimism', name: 'Optimism', color: 'bg-red-500' },
        { id: 'polygon', name: 'Polygon', color: 'bg-purple-500' },
        { id: 'base', name: 'Base', color: 'bg-blue-600' },
    ];

    const wallets = [
        { id: 'metaMask', name: 'MetaMask', description: 'Connect using browser extension' },
        { id: 'walletConnect', name: 'WalletConnect', description: 'Scan with your mobile wallet' },
        { id: 'coinbaseWallet', name: 'Coinbase Wallet', description: 'Connect to your Coinbase app' },
        { id: 'injected', name: 'Browser Wallet', description: 'Default browser wallet (e.g. Brave, Rabby)' },
    ];

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

            <div className="relative w-full max-w-3xl bg-[#0a0a0a] border border-zinc-800 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col md:flex-row min-h-[500px] animate-in fade-in zoom-in-95 duration-200">

                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 z-20 text-gray-500 hover:text-white transition-colors bg-zinc-900/80 hover:bg-zinc-800 rounded-full p-2 border border-zinc-800 cursor-pointer">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>

                {/* Left Panel: Networks */}
                <div className="w-full md:w-1/3 bg-[#050505] p-6 border-b md:border-b-0 md:border-r border-zinc-800/50 relative z-10">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">1. Select Network</h3>
                    <div className="space-y-2 flex flex-row overflow-x-auto md:flex-col md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
                        {networks.map(net => (
                            <button
                                key={net.id}
                                onClick={() => setSelectedNetwork(net.id)}
                                className={`flex-shrink-0 md:w-full flex items-center gap-3 p-3 rounded-xl transition-all border ${selectedNetwork === net.id ? 'bg-zinc-900 border-zinc-700' : 'bg-transparent border-transparent hover:bg-zinc-900/50'}`}
                            >
                                <div className={`w-8 h-8 rounded-full ${net.color} flex items-center justify-center bg-opacity-20 border border-white/10`}>
                                    <span className={`w-2.5 h-2.5 rounded-full ${net.color}`}></span>
                                </div>
                                <span className={`font-semibold ${selectedNetwork === net.id ? 'text-white' : 'text-gray-400'}`}>
                                    {net.name}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Panel: Wallets */}
                <div className="w-full md:w-2/3 p-6 md:p-8 relative">
                    {/* decorative background glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/5 blur-[80px] rounded-full pointer-events-none"></div>

                    <h3 className="text-2xl font-black text-white mb-2 relative z-10">Connect Wallet</h3>
                    <p className="text-gray-400 text-sm mb-8 relative z-10">Choose a wallet to connect to the <span className="text-white font-bold capitalize">{selectedNetwork}</span> network.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                        {wallets.map(wallet => (
                            <button
                                key={wallet.id}
                                onClick={() => handleConnect(wallet.id)}
                                className="flex flex-col items-start p-5 bg-zinc-900/40 hover:bg-zinc-800 border border-zinc-800 hover:border-red-900/50 rounded-2xl transition-all group text-left"
                            >
                                <div className="w-12 h-12 rounded-xl bg-black border border-zinc-700 group-hover:border-red-500/50 flex items-center justify-center mb-4 transition-colors shadow-inner">
                                    <svg className="w-6 h-6 text-gray-400 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                                </div>
                                <h4 className="font-bold text-white text-lg mb-1">{wallet.name}</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">{wallet.description}</p>
                            </button>
                        ))}
                    </div>

                    <div className="mt-8 p-4 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-start gap-4 relative z-10 mt-auto">
                        <svg className="w-6 h-6 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <p className="text-xs text-gray-400">By connecting a wallet, you agree to Cryone's Terms of Service and acknowledge that you have read and understand the Protocol Disclaimer.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
