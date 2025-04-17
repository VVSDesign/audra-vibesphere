
import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Settings, Bell } from 'lucide-react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

// Mock data for drop feed
const dropFeedData = [
  {
    id: 1,
    artistName: 'Drake',
    artistAvatar: 'https://i.pravatar.cc/150?img=8',
    content: 'Sources say Drake is planning to drop a surprise album next month featuring unreleased collabs with The Weeknd',
    image: 'https://i.pravatar.cc/400?img=4',
    timestamp: '2h ago',
    dropProbability: 85,
    votes: { willDrop: 1243, wontDrop: 321 }
  },
  {
    id: 2,
    artistName: 'Billie Eilish',
    artistAvatar: 'https://i.pravatar.cc/150?img=5',
    content: 'Billie spotted at studio with producers from her first album. New EP rumored to drop this summer.',
    timestamp: '5h ago',
    dropProbability: 62,
    votes: { willDrop: 980, wontDrop: 154 }
  },
  {
    id: 3,
    artistName: 'Kendrick Lamar',
    artistAvatar: 'https://i.pravatar.cc/150?img=11',
    content: 'Kendrick teased what appears to be new lyrics on his IG story then quickly deleted. Album dropping soon?',
    image: 'https://i.pravatar.cc/400?img=11',
    timestamp: '1d ago',
    dropProbability: 78,
    votes: { willDrop: 2513, wontDrop: 430 }
  }
];

const DropFeedCard: React.FC<typeof dropFeedData[0]> = ({
  artistName,
  artistAvatar,
  content,
  image,
  timestamp,
  dropProbability,
  votes
}) => {
  return (
    <div className="bg-audra-dark rounded-2xl p-4 mb-4 border border-white/10">
      <div className="flex items-center mb-3">
        <Avatar className="h-10 w-10 border-2 border-audra-purple">
          <AvatarImage src={artistAvatar} alt={artistName} />
        </Avatar>
        <div className="ml-3">
          <h3 className="font-bold">{artistName}</h3>
          <p className="text-xs text-white/60">{timestamp}</p>
        </div>
      </div>
      
      <p className="text-sm mb-3">{content}</p>
      
      {image && (
        <div className="rounded-xl overflow-hidden mb-3">
          <img src={image} alt="Post media" className="w-full h-48 object-cover" />
        </div>
      )}
      
      <div className="bg-black/40 rounded-lg p-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Drop Probability</span>
          <span className="text-gradient-teal-purple font-bold">{dropProbability}%</span>
        </div>
        
        <div className="h-2 bg-audra-gray rounded-full mb-3">
          <div 
            className="h-full bg-gradient-teal-purple rounded-full" 
            style={{ width: `${dropProbability}%` }} 
          />
        </div>
        
        <div className="flex justify-between">
          <button className="flex items-center text-audra-teal bg-audra-teal/10 rounded-full px-3 py-1">
            <span className="mr-1">🔥</span>
            <span className="text-xs font-medium">Will Drop ({votes.willDrop})</span>
          </button>
          
          <button className="flex items-center text-audra-purple bg-audra-purple/10 rounded-full px-3 py-1">
            <span className="mr-1">❌</span>
            <span className="text-xs font-medium">Won't Drop ({votes.wontDrop})</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const HeaderActions = () => (
    <div className="flex items-center space-x-4">
      <Bell size={20} />
      <Settings size={20} />
    </div>
  );

  return (
    <MobileLayout title="Drop Feed" rightAction={<HeaderActions />}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gradient-teal-purple">Latest Rumors</h2>
          <button className="bg-audra-dark py-1 px-3 rounded-full text-xs border border-white/10">
            Sort by: Hot
          </button>
        </div>
        
        {dropFeedData.map(item => (
          <DropFeedCard key={item.id} {...item} />
        ))}
      </div>
    </MobileLayout>
  );
};

export default Index;
