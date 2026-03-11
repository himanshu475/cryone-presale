"use client";

import React, { createContext, useContext, useState } from 'react';
import WalletModal from '../../components/layout/WalletModal';

const WalletModalContext = createContext();

export function WalletModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <WalletModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            {isOpen && <WalletModal onClose={closeModal} />}
        </WalletModalContext.Provider>
    );
}

export const useWalletModal = () => useContext(WalletModalContext);
