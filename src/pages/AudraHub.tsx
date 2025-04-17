
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/layout/MobileLayout';
import { Music, ListMusic, Radar } from 'lucide-react';

const AudraHub = () => {
  const navigate = useNavigate();

  const features = [
    {
      id: 'origins',
      title: 'Origins',
      description: 'Track samples and discover song lineage',
      icon: Music,
      color: 'from-audra-teal to-blue-500',
      path: '/audrahub/origins'
    },
    {
      id: 'playlists',
      title: 'Cross-Platform Playlists',
      description: 'Sync playlists across music services',
      icon: ListMusic,
      color: 'from-audra-purple to-pink-500',
      path: '/audrahub/playlists'
    },
    {
      id: 'predictor',
      title: 'Drop Predictor AI',
      description: 'AI forecasts for upcoming music releases',
      icon: Radar,
      color: 'from-green-400 to-audra-teal',
      path: '/audrahub/predictor'
    }
  ];

  return (
    <MobileLayout title="AudraHub">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2 text-gradient-teal-purple">Feature Center</h1>
        <p className="text-white/70 mb-6">Premium tools for the ultimate music experience</p>
        
        <div className="space-y-4">
          {features.map(feature => (
            <div
              key={feature.id}
              onClick={() => navigate(feature.path)}
              className="bg-audra-dark rounded-2xl border border-white/10 overflow-hidden cursor-pointer hover:border-audra-teal transition-all duration-300"
            >
              <div className={`p-5 bg-gradient-to-r ${feature.color}`}>
                <feature.icon size={28} className="text-white" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                <p className="text-sm text-white/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
};

export default AudraHub;
