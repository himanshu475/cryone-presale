import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import WalletStatusBadge from "../../components/presale/WalletStatusBadge";
import PhaseControl from "../../components/admin/PhaseControl";

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-red-500 selection:text-white flex flex-col">

            <Navbar />

            <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 mt-16 md:mt-24">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                            <span className="text-red-500 font-bold tracking-[0.2em] uppercase text-sm">Owner Access Only</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                            Admin <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">Panel</span>
                        </h1>
                        <p className="text-zinc-400 mt-4 max-w-2xl text-lg">
                            Manage the presale lifecycle, control the pricing phases, and oversee the security locks for the Cryone presale contract.
                        </p>
                    </div>

                    <div className="shrink-0 flex translate-y-2">
                        <WalletStatusBadge />
                    </div>
                </div>

                {/* Admin Modules Grid */}
                <div className="grid grid-cols-1 gap-8 mb-16">
                    <PhaseControl />
                    {/* Security controls will go here next */}
                </div>

            </main>

            <Footer />
        </div>
    );
}
