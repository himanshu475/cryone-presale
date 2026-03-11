import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PresaleStatus from "../../components/presale/PresaleStatus";
import PresalePhases from "../../components/presale/PresalePhases";
import WalletStatusBadge from "../../components/presale/WalletStatusBadge";
import PurchaseModule from "../../components/presale/PurchaseModule";
import VestingModule from "../../components/presale/VestingModule";
import { CONTRACT_ADDRESSES } from "../../app/config/contracts";
import ContractCard from "../../components/presale/ContractCard";

export default function PresaleDashboard() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-red-500 selection:text-white flex flex-col">

            <Navbar />

            {/* Dashboard Content */}
            <main className="flex-grow relative border-t border-red-900/20">
                {/* Subtle Background Glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-red-900/10 rounded-b-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">

                    {/* Dashboard Header */}
                    <div className="mb-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black tracking-wide text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                                Presale <span className="text-red-500 neon-text">Dashboard</span>
                            </h1>
                            <p className="text-gray-400 mt-2 font-medium">Manage your allocations and participate in the live token sale.</p>
                        </div>

                        {/* Connected Wallet Status */}
                        <WalletStatusBadge />
                    </div>

                    {/* Dashboard Grid Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* Left Column: Status & Buy Module */}
                        <div className="lg:col-span-8 flex flex-col gap-8">
                            {/* 1. Presale Status Panel */}
                            <PresaleStatus />

                            {/* 2. Purchase Module */}
                            <PurchaseModule />

                            {/* 3. Phases Timeline */}
                            <PresalePhases />
                        </div>

                        {/* Right Column: Vesting & Info */}
                        <div className="lg:col-span-4 flex flex-col gap-8">
                            {/* 3. Personal Vesting Module */}
                            <VestingModule />

                            {/* Contract Info Card */}
                            <ContractCard />
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
