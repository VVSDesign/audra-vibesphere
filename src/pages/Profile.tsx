import React, { useState } from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Settings, Edit, Music, ListMusic, Star } from 'lucide-react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

// Dummy data
const userData = {
  username: "beatmaster",
  displayName: "Alex Rivera",
  avatar: "https://i.pravatar.cc/150?img=13",
  headerImage: "https://i.pravatar.cc/800?img=27",
  bio: "Music producer | Beat collector | Always hunting for the next sample",
  followers: 1243,
  following: 587,
  playlists: 24,
  theme: "teal" // 'teal' or 'purple'
};
const profileTabs = [{
  id: 'reposts',
  label: 'Reposts',
  icon: Star
}, {
  id: 'playlists',
  label: 'Playlists',
  icon: ListMusic
}, {
  id: 'top5',
  label: 'My Top 5 Favs',
  icon: Star
}];
const Profile = () => {
  const [activeTab, setActiveTab] = useState('reposts');
  const HeaderActions = () => <Settings size={20} />;
  return <MobileLayout rightAction={<HeaderActions />}>
      {/* Profile Header with Cover Image */}
      <div className="relative">
        <div className="h-40 bg-gradient-to-r from-audra-purple to-audra-teal">
          {userData.headerImage && <img src={userData.headerImage} alt="Cover" className="w-full h-full object-cover opacity-0" />}
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-audra-background to-transparent" />
        </div>
        
        <div className="relative px-5 pb-4">
          <div className="flex items-end -mt-12">
            <Avatar className="h-24 w-24 border-4 border-audra-background">
              <AvatarImage src={userData.avatar} alt={userData.displayName} className="object-cover-cover opacity-0" />
            </Avatar>
            <div className="ml-4 mb-1 flex-1">
              
              <p className="text-white/60">@{userData.username}</p>
            </div>
            <button className="bg-audra-dark p-2 rounded-full">
              <Edit size={16} />
            </button>
          </div>
          
          {userData.bio && <p className="mt-4 text-sm text-white/80">{userData.bio}</p>}
          
          <div className="flex mt-5 space-x-4">
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold">{userData.playlists}</span>
              <span className="text-xs text-white/60">Playlists</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold">{userData.followers}</span>
              <span className="text-xs text-white/60">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold">{userData.following}</span>
              <span className="text-xs text-white/60">Following</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Profile Tabs */}
      <div className="border-b border-white/10">
        <div className="flex">
          {profileTabs.map(tab => <button key={tab.id} className={`flex-1 py-3 flex flex-col items-center ${activeTab === tab.id ? 'border-b-2 border-audra-teal' : 'text-white/70'}`} onClick={() => setActiveTab(tab.id)}>
              <tab.icon size={16} className="mb-1" />
              <span className="text-xs">{tab.label}</span>
            </button>)}
        </div>
      </div>
      
      {/* Tab Content */}
      <div className="p-4">
        {activeTab === 'reposts' && <div className="bg-audra-dark rounded-xl p-4 border border-white/10">
            <div className="flex items-center mb-3">
              <Music size={16} className="mr-2 text-audra-teal" />
              <h3 className="font-medium">Your Pinned Track</h3>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mr-3">
                <Music size={24} className="opacity-70" />
              </div>
              <div>
                <h4 className="font-medium">Drown in My Styrofoam</h4>
                <p className="text-xs text-white/60">NoCap • 2:45</p>
              </div>
            </div>
            <div className="mt-2 h-1 w-full bg-audra-gray/40 rounded-full overflow-hidden">
              <div className="bg-audra-teal h-full" style={{
            width: '65%'
          }} />
            </div>
          </div>}
        
        {activeTab === 'playlists' && <div className="space-y-3">
            {Array.from({
          length: 3
        }).map((_, i) => <div key={i} className="bg-audra-dark rounded-xl p-3 border border-white/10 flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-audra-purple/50 to-audra-teal/50 rounded-md flex items-center justify-center mr-3">
                  <ListMusic size={24} />
                </div>
                <div>
                  <h4 className="font-medium">{['Chill Vibes', 'Beat Sketches', 'Sample Material'][i]}</h4>
                  <p className="text-xs text-white/60">{[12, 24, 8][i]} tracks • Last updated {['2d', '1w', '3h'][i]} ago</p>
                </div>
              </div>)}
          </div>}
        
        {activeTab === 'top5' && <div className="grid grid-cols-2 gap-3">
            {Array.from({
          length: 5
        }).map((_, i) => <div key={i} className="bg-audra-dark rounded-xl p-3 border border-white/10 text-center">
                <Avatar className="mx-auto mb-2 h-16 w-16 border-2 border-audra-purple">
                  <AvatarImage src={`https://i.pravatar.cc/150?img=${25 + i}`} alt="Favorite artist" className="cover opacity-0" />
                </Avatar>
                <h4 className="font-medium">{['Rhythm Racer', 'Beat Alchemist', 'Sonic Waves', 'Melody Maker', 'Groove Master'][i]}</h4>
                <p className="text-xs text-white/60">Top Track: {['Electric Dreams', 'Synth Symphony', 'Digital Pulse', 'Techno Fusion', 'Ambient Echoes'][i]}</p>
              </div>)}
          </div>}
      </div>
    </MobileLayout>;
};
export default Profile;