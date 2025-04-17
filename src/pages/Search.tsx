import React, { useState } from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Search as SearchIcon, TrendingUp, Filter } from 'lucide-react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
const searchCategories = ['All', 'Artists', 'Songs', 'Albums', 'Playlists', 'News'];

// Mock data
const trendingSearches = ['New Drake Album', 'Billie Eilish Tour', 'Kendrick vs J Cole', 'Taylor Swift Rerelease'];
const recommendedArtists = [{
  id: 1,
  name: 'The Weeknd',
  image: 'https://i.pravatar.cc/150?img=1',
  followers: '42M'
}, {
  id: 2,
  name: 'Doja Cat',
  image: 'https://i.pravatar.cc/150?img=5',
  followers: '38M'
}, {
  id: 3,
  name: 'Bad Bunny',
  image: 'https://i.pravatar.cc/150?img=12',
  followers: '62M'
}, {
  id: 4,
  name: 'SZA',
  image: 'https://i.pravatar.cc/150?img=10',
  followers: '29M'
}];
const Search = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  return <MobileLayout title="Search">
      <div className="p-4">
        {/* Search Box */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-white/60" />
          </div>
          <input type="text" placeholder="Search artists, songs, news..." className="w-full h-12 pl-10 pr-4 rounded-xl bg-audra-dark border border-white/10 text-white focus:outline-none focus:border-audra-teal" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Filter className="h-5 w-5 text-white/60" />
          </button>
        </div>

        {/* Categories */}
        <div className="mb-6 overflow-x-auto scrollbar-hidden">
          <div className="flex space-x-2 pb-2">
            {searchCategories.map(category => <button key={category} className={`py-2 px-4 rounded-full whitespace-nowrap ${activeCategory === category ? 'bg-gradient-teal-purple text-white' : 'bg-audra-dark text-white/70 border border-white/10'}`} onClick={() => setActiveCategory(category)}>
                {category}
              </button>)}
          </div>
        </div>

        {/* Trending Searches */}
        <div className="mb-8">
          <div className="flex items-center mb-3">
            <TrendingUp className="h-5 w-5 mr-2 text-audra-teal" />
            <h3 className="text-lg font-bold">Trending Searches</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {trendingSearches.map((search, i) => <div key={i} className="px-4 py-3 rounded-lg bg-audra-dark border border-white/10 hover:border-audra-teal transition-colors">
                <p className="text-sm">{search}</p>
              </div>)}
          </div>
        </div>

        {/* Recommended Artists */}
        <div>
          <h3 className="text-lg font-bold mb-3">Artists You Might Like</h3>
          <div className="grid grid-cols-2 gap-4">
            {recommendedArtists.map(artist => <div key={artist.id} className="bg-audra-dark rounded-xl border border-white/10 overflow-hidden">
                <div className="h-24 bg-gradient-to-r from-audra-purple/30 to-audra-teal/30 flex justify-center items-center">
                  <Avatar className="h-14 w-14 border-2 border-white">
                    <AvatarImage src={artist.image} alt={artist.name} className="object-cover-cover opacity-0" />
                  </Avatar>
                </div>
                <div className="p-3 text-center">
                  <p className="font-medium">{artist.name}</p>
                  <p className="text-xs text-white/60">{artist.followers} followers</p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </MobileLayout>;
};
export default Search;