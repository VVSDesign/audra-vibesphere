
import React, { useState } from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { ChevronLeft, Waves, Clock, Volume2, Share2, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

// Mock data for the sample origins
const currentSong = {
  title: "SICKO MODE",
  artist: "Travis Scott",
  album: "ASTROWORLD",
  cover: "https://i.pravatar.cc/400?img=67",
  year: 2018
};

const sampleData = [
  {
    id: 1,
    title: "Gimme The Loot",
    artist: "The Notorious B.I.G.",
    year: 1994,
    cover: "https://i.pravatar.cc/400?img=68",
    sampleTimecode: "1:23",
    percentage: 85
  },
  {
    id: 2,
    title: "I Wanna Rock",
    artist: "Luke",
    year: 1992,
    cover: "https://i.pravatar.cc/400?img=56",
    sampleTimecode: "2:45", 
    percentage: 64
  },
  {
    id: 3,
    title: "Sailin' Da South",
    artist: "DJ Screw",
    year: 1995,
    cover: "https://i.pravatar.cc/400?img=59",
    sampleTimecode: "0:35",
    percentage: 42
  }
];

const Origins = () => {
  const navigate = useNavigate();
  const [listening, setListening] = useState(false);

  return (
    <MobileLayout hideNavigation>
      {/* Custom header */}
      <div className="sticky top-0 z-10 glass backdrop-blur-lg py-4 px-5">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => navigate('/audrahub')}
            className="flex items-center"
          >
            <ChevronLeft size={20} className="mr-1" />
            <span>Back</span>
          </button>
          <h1 className="font-bold text-xl">Origins</h1>
          <button>
            <Share2 size={20} />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="text-center mb-8">
          <p className="text-white/70 mb-2">ANALYZING</p>
          <h2 className="text-2xl font-bold text-gradient-teal-purple mb-4">{currentSong.title}</h2>
          <p className="text-white/80">{currentSong.artist} • {currentSong.album} ({currentSong.year})</p>
        </div>

        {/* Song identification section */}
        <div className="bg-audra-dark rounded-2xl p-5 mb-8 relative overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-b from-audra-purple/20 to-audra-teal/20 opacity-30" />
          
          <div className="relative z-10 flex items-center mb-6">
            <div className="w-16 h-16 rounded-xl overflow-hidden mr-4 shadow-lg">
              <img src={currentSong.cover} alt={currentSong.title} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{currentSong.title}</h3>
              <p className="text-white/70">{currentSong.artist}</p>
            </div>
          </div>
          
          <div className="flex justify-center mb-6">
            {listening ? (
              <div className="flex items-center space-x-1">
                <span className="h-8 w-1 bg-audra-teal animate-pulse" />
                <span className="h-12 w-1 bg-audra-teal animate-pulse delay-75" />
                <span className="h-6 w-1 bg-audra-teal animate-pulse delay-100" />
                <span className="h-10 w-1 bg-audra-teal animate-pulse delay-150" />
                <span className="h-14 w-1 bg-audra-teal animate-pulse delay-200" />
                <span className="h-6 w-1 bg-audra-teal animate-pulse delay-100" />
                <span className="h-10 w-1 bg-audra-purple animate-pulse delay-150" />
                <span className="h-8 w-1 bg-audra-purple animate-pulse" />
                <span className="h-12 w-1 bg-audra-purple animate-pulse delay-75" />
                <span className="h-6 w-1 bg-audra-purple animate-pulse delay-100" />
              </div>
            ) : (
              <Waves size={70} className="text-audra-teal opacity-90" />
            )}
          </div>
          
          <button 
            onClick={() => setListening(!listening)}
            className={`w-full py-3 rounded-xl font-medium ${
              listening 
                ? 'bg-audra-purple text-white' 
                : 'bg-gradient-teal-purple text-black'
            }`}
          >
            {listening ? 'Stop Listening' : 'Listen Now'}
          </button>
        </div>

        {/* Sample origins */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Sample Origins</h2>
          
          <div className="space-y-4">
            {sampleData.map(sample => (
              <div 
                key={sample.id}
                className="bg-audra-dark rounded-xl p-4 border border-white/10"
              >
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden mr-3 shadow-md">
                    <img src={sample.cover} alt={sample.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{sample.title}</h4>
                    <p className="text-xs text-white/70">{sample.artist} • {sample.year}</p>
                  </div>
                  <div className="bg-black/30 rounded-lg py-1 px-2 flex items-center">
                    <Clock size={14} className="mr-1 text-audra-teal" />
                    <span className="text-xs">{sample.sampleTimecode}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs mb-1">
                  <span>Sample confidence</span>
                  <span className={`font-bold ${
                    sample.percentage > 70 ? 'text-audra-teal' : 
                    sample.percentage > 50 ? 'text-yellow-400' : 'text-audra-purple'
                  }`}>
                    {sample.percentage}%
                  </span>
                </div>
                
                <div className="h-2 bg-audra-gray rounded-full">
                  <div 
                    className={`h-full rounded-full ${
                      sample.percentage > 70 ? 'bg-audra-teal' : 
                      sample.percentage > 50 ? 'bg-yellow-400' : 'bg-audra-purple'
                    }`}
                    style={{ width: `${sample.percentage}%` }} 
                  />
                </div>
                
                <div className="flex justify-between mt-3">
                  <button className="flex items-center bg-black/30 rounded-lg py-1 px-3 text-xs">
                    <Volume2 size={14} className="mr-1" />
                    <span>Preview</span>
                  </button>
                  <button className="flex items-center bg-black/30 rounded-lg py-1 px-3 text-xs">
                    <ExternalLink size={14} className="mr-1" />
                    <span>Full Song</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button className="bg-audra-dark py-2 px-4 rounded-lg text-white/80 text-sm border border-white/10">
            View Full Sample History
          </button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Origins;
