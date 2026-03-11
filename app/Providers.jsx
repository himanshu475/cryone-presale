"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
import { useState } from 'react'
import { WalletModalProvider } from './context/WalletModalContext'

export function Providers({ children }) {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}
