"use client";

import { useState, useEffect } from "react";
import { GlassCard, Typography } from "@/components/atoms";
import { ShieldCheck, Activity, Database, Globe } from "lucide-react";

/**
 * ChainlinkAuditPanel component
 * Provides a real-time visualization of asset verification via Chainlink Oracles.
 * Simulates the audit trail with a typewriter effect to demonstrate transparency 
 * and legal compliance for RWAs.
 */
export const ChainlinkAuditPanel = () => {
    const [logs, setLogs] = useState<string[]>([]);
    const [currentStep, setCurrentStep] = useState(0);

    const auditSteps = [
        "> Establishing connection to Chainlink Decentralized Oracle Network...",
        "> Requesting cryptographic Proof of Reserve for asset trust...",
        "> Querying Public Property Registry (Puebla) via external adapter...",
        "> Fiduciary Trust No. F/4892-8 status: ACTIVE & VERIFIED.",
        "> Validating on-chain token supply vs physical hectare reserve...",
        "> Cross-referencing current market valuation (Oracle Feed: RWA/USD)...",
        "> AUDIT COMPLETE: Asset 100% backed and legally compliant."
    ];

    useEffect(() => {
        if (currentStep < auditSteps.length) {
            const timer = setTimeout(() => {
                setLogs(prev => [...prev, auditSteps[currentStep]]);
                setCurrentStep(prev => prev + 1);
            }, 1200);
            return () => clearTimeout(timer);
        }
    }, [currentStep]);

    return (
        <GlassCard className="p-8 border-white/5 bg-black/40 overflow-hidden relative group" hover={false}>
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShieldCheck className="w-24 h-24 text-[--rebeka-success]" />
            </div>

            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[--rebeka-success]/10 border border-[--rebeka-success]/20">
                    <Activity className="w-5 h-5 text-[--rebeka-success]" />
                </div>
                <div>
                    <Typography variant="h3" className="text-lg font-bold text-white tracking-tight m-0">Chainlink CRE Audit</Typography>
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[--rebeka-success]">Oracle Status: Active</span>
                </div>
            </div>

            <div className="bg-black/60 rounded-xl p-5 font-mono text-[11px] leading-relaxed border border-white/5 min-h-[180px]">
                <div className="flex flex-col gap-2">
                    {logs.map((log, i) => (
                        <div key={i} className={`${i === logs.length - 1 ? 'text-[--rebeka-success]' : 'text-white/60'} animate-fade-in`}>
                            {log}
                        </div>
                    ))}
                    {currentStep < auditSteps.length && (
                        <div className="text-white/30 animate-pulse">_</div>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                    <Database className="w-4 h-4 text-white/40" />
                    <div>
                        <span className="block text-[9px] uppercase font-bold text-white/30">Proof of Reserve</span>
                        <span className="text-[11px] font-bold text-white uppercase">Verified On-Chain</span>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                    <Globe className="w-4 h-4 text-white/40" />
                    <div>
                        <span className="block text-[9px] uppercase font-bold text-white/30">Oracle Network</span>
                        <span className="text-[11px] font-bold text-white uppercase">Arbitrum Nodes</span>
                    </div>
                </div>
            </div>
        </GlassCard>
    );
};
