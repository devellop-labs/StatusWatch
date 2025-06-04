import { useState, useEffect, useCallback } from 'react';
import { Plus } from 'lucide-react';
import { Website } from '../types';

import WebsiteCard from '../components/WebsiteCard';
import StatusBadge from '../components/StatusBadge';
import AddWebsiteModal from '../components/AddWebsiteModal';
import EmptyState from '../components/EmptyState';

import { useMonitoring } from '../hooks/useMonitoring';

export default function Dashboard() {
    const [websites, setWebsites] = useState<Website[]>(() => {
        try {
            const saved = localStorage.getItem('websites');
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error('Failed to load websites from localStorage:', error);
            return [];
        }
    });

    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }));
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { isMonitoring } = useMonitoring(websites, setWebsites);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem('websites', JSON.stringify(websites));
        } catch (error) {
            console.error('Failed to save websites to localStorage:', error);
        }
    }, [websites]);

    const handleAddWebsite = useCallback((website: Pick<Website, 'name' | 'url'>) => {
        const newWebsite: Website = {
            ...website,
            id: Date.now(),
            lastChecked: new Date().toISOString(),
            status: 'operational',
            responseTime: 0,
            uptime: 100,
            checks: []
        };

        setWebsites(prevWebsites => [...prevWebsites, newWebsite]);
        setIsModalOpen(false);
    }, []);

    const handleDeleteWebsite = useCallback((id: number) => {
        setWebsites(prevWebsites => prevWebsites.filter(w => w.id !== id));
    }, []);

    const overallStatus = websites.length > 0
        ? websites.every(w => w.status === 'operational') ? 'operational' : 'degraded'
        : 'operational';

    const averageUptime = websites.length > 0
        ? Math.round((websites.reduce((acc, curr) => acc + curr.uptime, 0) / websites.length) * 100) / 100
        : 0;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <main className="container mx-auto px-4 py-8">
                {websites.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                                <h3 className="text-lg font-medium mb-2">System Status</h3>
                                <StatusBadge status={overallStatus} />
                            </div>

                            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                                <h3 className="text-lg font-medium mb-2">Average Uptime</h3>
                                <p className="text-3xl font-bold text-blue-400">{averageUptime}%</p>
                            </div>

                            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                                <h3 className="text-lg font-medium mb-2">Monitored Services</h3>
                                <p className="text-3xl font-bold text-purple-400">{websites.length}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {websites.map(website => (
                                <WebsiteCard
                                    key={website.id}
                                    website={website}
                                    onDelete={() => handleDeleteWebsite(website.id)}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <EmptyState />
                )}

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="fixed bottom-8 right-8 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 transition-colors px-6 py-3 rounded-full font-medium shadow-lg"
                >
                    <Plus className="h-5 w-5" />
                    Add Website
                </button>
            </main>

            <AddWebsiteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={handleAddWebsite}
            />
        </div>
    );
}