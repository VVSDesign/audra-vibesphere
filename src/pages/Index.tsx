import React, { useState } from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Settings, Bell, MessageCircle, Disc } from 'lucide-react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

// Mock data for upcoming releases (Curated NMF)
const upcomingReleases = [
  {
    id: 1,
    artistName: 'The Weeknd',
    artistAvatar: 'https://i.pravatar.cc/150?img=3',
    releaseTitle: 'After Hours (Deluxe)',
    releaseDate: '04/24/2025',
    releaseType: 'Album'
  },
  {
    id: 2,
    artistName: 'SZA',
    artistAvatar: 'https://i.pravatar.cc/150?img=23',
    releaseTitle: 'CTRL 2',
    releaseDate: '04/20/2025',
    releaseType: 'Album'
  },
  {
    id: 3,
    artistName: 'Tyler, The Creator',
    artistAvatar: 'https://i.pravatar.cc/150?img=13',
    releaseTitle: 'IGOR\'s THEME (Remix)',
    releaseDate: '04/22/2025',
    releaseType: 'Single'
  },
  {
    id: 4,
    artistName: 'Doja Cat',
    artistAvatar: 'https://i.pravatar.cc/150?img=19',
    releaseTitle: 'Planet Her 2',
    releaseDate: '04/21/2025',
    releaseType: 'EP'
  }
];

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
    votes: { willDrop: 1243, wontDrop: 321 },
    comments: [
      { id: 1, username: 'OVOFan', avatar: 'https://i.pravatar.cc/150?img=33', text: "I've been waiting for this collab!", timestamp: '1h ago' },
      { id: 2, username: 'MusicInsider', avatar: 'https://i.pravatar.cc/150?img=42', text: 'My sources confirm this is happening 💯', timestamp: '30m ago' }
    ]
  },
  {
    id: 2,
    artistName: 'Billie Eilish',
    artistAvatar: 'https://i.pravatar.cc/150?img=5',
    content: 'Billie spotted at studio with producers from her first album. New EP rumored to drop this summer.',
    timestamp: '5h ago',
    dropProbability: 62,
    votes: { willDrop: 980, wontDrop: 154 },
    comments: []
  },
  {
    id: 3,
    artistName: 'Kendrick Lamar',
    artistAvatar: 'https://i.pravatar.cc/150?img=11',
    content: 'Kendrick teased what appears to be new lyrics on his IG story then quickly deleted. Album dropping soon?',
    image: 'https://i.pravatar.cc/400?img=11',
    timestamp: '1d ago',
    dropProbability: 78,
    votes: { willDrop: 2513, wontDrop: 430 },
    comments: [
      { id: 1, username: 'KDotStan', avatar: 'https://i.pravatar.cc/150?img=25', text: 'The GOAT is back!', timestamp: '20h ago' }
    ]
  }
];

// Component for upcoming release list item
const UpcomingReleaseListItem = ({ artistName, artistAvatar, releaseTitle, releaseDate, releaseType }) => {
  return (
    <div className="flex items-center bg-audra-dark rounded-lg p-3 mb-3 border border-white/10">
      <Avatar className="h-12 w-12 border-2 border-audra-purple mr-3">
        <AvatarImage src={artistAvatar} alt={artistName} />
      </Avatar>
      <div className="flex-1">
        <h4 className="font-bold text-sm mb-0.5">{artistName}</h4>
        <p className="text-xs text-white/80 mb-1">{releaseTitle}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs bg-audra-purple/30 rounded-full px-2 py-0.5">{releaseType}</span>
          <span className="text-xs text-white/60">{releaseDate}</span>
        </div>
      </div>
      <Disc className="ml-2 text-audra-teal h-5 w-5" />
    </div>
  );
};

// Update the DropFeedCard component to make image optional
const DropFeedCard = ({
  artistName,
  artistAvatar,
  content,
  image = '',
  timestamp,
  dropProbability,
  votes,
  comments
}) => {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [newComment, setNewComment] = useState('');
  
  const toggleComments = () => {
    setIsCommentsOpen(!isCommentsOpen);
  };
  
  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    console.log('Adding comment:', newComment);
    // Here we would normally add to comments array and clear input
    setNewComment('');
  };

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
      
      <div className="bg-black/40 rounded-lg p-3 mb-3">
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
      
      {/* Comments section */}
      <div>
        <button 
          onClick={toggleComments}
          className="flex items-center text-white/70 hover:text-white gap-1 text-xs mb-2"
        >
          <MessageCircle size={16} />
          <span>{comments.length} comment{comments.length !== 1 ? 's' : ''}</span>
        </button>
        
        {isCommentsOpen && (
          <div className="pt-2">
            {comments.length > 0 && (
              <div className="space-y-3 mb-3">
                {comments.map(comment => (
                  <div key={comment.id} className="flex gap-2">
                    <Avatar className="h-7 w-7 flex-shrink-0">
                      <AvatarImage src={comment.avatar} alt={comment.username} />
                    </Avatar>
                    <div className="bg-black/30 p-2 rounded-lg flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-bold">{comment.username}</span>
                        <span className="text-xs text-white/50">{comment.timestamp}</span>
                      </div>
                      <p className="text-xs">{comment.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <form onSubmit={handleAddComment} className="flex gap-2 items-center">
              <Avatar className="h-7 w-7 flex-shrink-0">
                <AvatarImage src="https://i.pravatar.cc/150?img=1" alt="You" />
              </Avatar>
              <input
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="flex-1 bg-black/30 rounded-full px-3 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-audra-teal"
              />
              <Button 
                type="submit" 
                size="sm" 
                className="h-7 px-3 text-xs bg-gradient-teal-purple hover:opacity-90"
              >
                Post
              </Button>
            </form>
          </div>
        )}
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
        {/* Curated NMF section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gradient-teal-purple mb-4">Curated NMF</h2>
          <div className="space-y-1">
            {upcomingReleases.map(release => (
              <UpcomingReleaseListItem key={release.id} {...release} />
            ))}
          </div>
        </div>
        
        <Separator className="mb-6 bg-white/10" />
        
        {/* Latest Rumors section */}
        <div>
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
      </div>
    </MobileLayout>
  );
};

export default Index;
