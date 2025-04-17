
import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar } from 'lucide-react';

// Mock upcoming releases data
const upcomingReleases = [
  {
    id: 1,
    artistName: 'The Weeknd',
    artistAvatar: 'https://i.pravatar.cc/150?img=3',
    releaseTitle: 'After Hours (Deluxe)',
    releaseDate: '04/24/2025',
    genre: 'R&B/Soul',
    releaseType: 'Album'
  },
  {
    id: 2,
    artistName: 'SZA',
    artistAvatar: 'https://i.pravatar.cc/150?img=23',
    releaseTitle: 'CTRL 2',
    releaseDate: '04/20/2025',
    genre: 'R&B/Soul',
    releaseType: 'Album'
  },
  {
    id: 3,
    artistName: 'Tyler, The Creator',
    artistAvatar: 'https://i.pravatar.cc/150?img=13',
    releaseTitle: 'IGOR\'S THEME (Remix)',
    releaseDate: '04/22/2025',
    genre: 'Hip-Hop',
    releaseType: 'Single'
  },
  {
    id: 4,
    artistName: 'Doja Cat',
    artistAvatar: 'https://i.pravatar.cc/150?img=19',
    releaseTitle: 'Planet Her 2',
    releaseDate: '04/21/2025',
    genre: 'Pop',
    releaseType: 'EP'
  },
  {
    id: 5,
    artistName: 'Kendrick Lamar',
    artistAvatar: 'https://i.pravatar.cc/150?img=11',
    releaseTitle: 'Untitled Unmastered 2',
    releaseDate: '04/25/2025',
    genre: 'Hip-Hop',
    releaseType: 'Album'
  }
];

const UpcomingReleaseCard = ({ artistName, artistAvatar, releaseTitle, releaseDate, genre, releaseType }) => {
  return (
    <Card className="bg-audra-dark border-white/10 mb-4">
      <CardContent className="p-4">
        <div className="flex items-center">
          <Avatar className="h-14 w-14 border-2 border-audra-purple">
            <AvatarImage src={artistAvatar} alt={artistName} />
          </Avatar>
          <div className="ml-4 flex-grow">
            <h3 className="font-bold">{artistName}</h3>
            <p className="text-sm text-white/80">{releaseTitle}</p>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1 text-audra-teal" />
                <span className="text-xs">{releaseDate}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-xs bg-audra-purple/30 rounded-full px-2 py-0.5">{releaseType}</span>
                <span className="text-xs bg-audra-teal/30 rounded-full px-2 py-0.5">{genre}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const UpcomingReleases = () => {
  return (
    <MobileLayout title="Upcoming Releases">
      <div className="p-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gradient-teal-purple mb-2">Upcoming Releases</h1>
          <p className="text-white/70">Find upcoming drops in any genre, updated weekly</p>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">This Week</h2>
            <select 
              className="bg-audra-dark text-sm rounded-full px-3 py-1 border border-white/10"
              defaultValue="all"
            >
              <option value="all">All Genres</option>
              <option value="hiphop">Hip-Hop</option>
              <option value="rnb">R&B/Soul</option>
              <option value="pop">Pop</option>
              <option value="electronic">Electronic</option>
            </select>
          </div>

          {upcomingReleases.map(release => (
            <UpcomingReleaseCard key={release.id} {...release} />
          ))}
        </div>
      </div>
    </MobileLayout>
  );
};

export default UpcomingReleases;
