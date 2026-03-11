import { CONTRACT_ADDRESSES } from "../../app/config/contracts";

export default function ContractCard() {


    return (
        <div className="bg-[#0a0a0a] border border-red-900/30 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Contract Details
            </h3>
            <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-zinc-800 pb-2">
                    <span className="text-gray-500">Network</span>
                    <span className="text-gray-300 font-medium tracking-wide">Sepolia Testnet</span>
                </div>
                <div className="flex justify-between border-b border-zinc-800 pb-2">
                    <span className="text-gray-500">Token</span>
                    <span className="text-gray-300 font-medium tracking-wide">$CRYN</span>
                </div>
                <div className="flex flex-col gap-1 pt-1">
                    <span className="text-gray-500">Presale Contract</span>
                    <span className="text-red-400 font-mono text-xs break-all bg-red-950/30 p-2 rounded border border-red-900/50">{CONTRACT_ADDRESSES.PRESALE}</span>
                </div>
            </div>
        </div>
    )
}