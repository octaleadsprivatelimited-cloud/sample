// Placeholder images using placeholder services
const generatePlaceholderImage = (width, height, text, bgColor = '333', textColor = 'fff') => {
  return `https://via.placeholder.com/${width}x${height}/${bgColor}/${textColor}?text=${encodeURIComponent(text)}`;
};

// Fallback images for Indian themes
const fallbackImages = {
  wedding: 'https://via.placeholder.com/600x400/8B0000/FFFFFF?text=Indian+Wedding',
  event: 'https://via.placeholder.com/600x400/4B0082/FFFFFF?text=Indian+Event',
  birthday: 'https://via.placeholder.com/600x400/FF6347/FFFFFF?text=Indian+Birthday',
  portrait: 'https://via.placeholder.com/600x400/2F4F4F/FFFFFF?text=Indian+Portrait',
  nature: 'https://via.placeholder.com/600x400/228B22/FFFFFF?text=Indian+Nature'
};

export const weddingImages = [
  {
    src: 'https://picsum.photos/600/400?random=1',
    alt: 'Indian wedding ceremony',
    description: 'Traditional Indian wedding ceremony'
  },
  {
    src: 'https://picsum.photos/600/400?random=2',
    alt: 'Indian bride and groom',
    description: 'Beautiful Indian bride and groom'
  },
  {
    src: 'https://picsum.photos/600/400?random=3',
    alt: 'Indian wedding reception',
    description: 'Colorful Indian wedding reception'
  },
  {
    src: 'https://picsum.photos/600/400?random=4',
    alt: 'Indian wedding details',
    description: 'Elegant Indian wedding decorations'
  },
  {
    src: 'https://picsum.photos/600/400?random=5',
    alt: 'Indian wedding party',
    description: 'Indian wedding family and friends'
  },
  {
    src: 'https://picsum.photos/600/400?random=6',
    alt: 'Indian wedding venue',
    description: 'Stunning Indian wedding venue'
  }
];

export const eventImages = [
  {
    src: 'https://picsum.photos/600/400?random=7',
    alt: 'Indian corporate event',
    description: 'Professional Indian corporate gathering'
  },
  {
    src: 'https://picsum.photos/600/400?random=8',
    alt: 'Indian conference',
    description: 'Indian business conference'
  },
  {
    src: 'https://picsum.photos/600/400?random=9',
    alt: 'Indian gala dinner',
    description: 'Elegant Indian gala dinner'
  },
  {
    src: 'https://picsum.photos/600/400?random=10',
    alt: 'Indian product launch',
    description: 'Exciting Indian product launch'
  },
  {
    src: 'https://picsum.photos/600/400?random=11',
    alt: 'Indian award ceremony',
    description: 'Prestigious Indian award ceremony'
  },
  {
    src: 'https://picsum.photos/600/400?random=12',
    alt: 'Indian networking event',
    description: 'Professional Indian networking'
  }
];

export const birthdayImages = [
  {
    src: 'https://picsum.photos/600/400?random=13',
    alt: 'Indian birthday party',
    description: 'Colorful Indian birthday celebration'
  },
  {
    src: 'https://picsum.photos/600/400?random=14',
    alt: 'Indian kids party',
    description: 'Adorable Indian kids celebration'
  },
  {
    src: 'https://picsum.photos/600/400?random=15',
    alt: 'Indian birthday cake',
    description: 'Beautiful Indian birthday cake'
  },
  {
    src: 'https://picsum.photos/600/400?random=16',
    alt: 'Indian party decorations',
    description: 'Colorful Indian party setup'
  },
  {
    src: 'https://picsum.photos/600/400?random=17',
    alt: 'Indian birthday candles',
    description: 'Magical Indian candle moment'
  },
  {
    src: 'https://picsum.photos/600/400?random=18',
    alt: 'Indian party games',
    description: 'Fun Indian party activities'
  }
];

export const portraitImages = [
  {
    src: 'https://picsum.photos/600/400?random=19',
    alt: 'Indian professional portrait',
    description: 'Elegant Indian professional headshot'
  },
  {
    src: 'https://picsum.photos/600/400?random=20',
    alt: 'Indian family portrait',
    description: 'Beautiful Indian family moment'
  },
  {
    src: 'https://picsum.photos/600/400?random=21',
    alt: 'Indian senior portrait',
    description: 'Indian graduation senior photo'
  },
  {
    src: 'https://picsum.photos/600/400?random=22',
    alt: 'Indian maternity portrait',
    description: 'Tender Indian maternity session'
  },
  {
    src: 'https://picsum.photos/600/400?random=23',
    alt: 'Indian couple portrait',
    description: 'Romantic Indian couple session'
  },
  {
    src: 'https://picsum.photos/600/400?random=24',
    alt: 'Indian lifestyle portrait',
    description: 'Natural Indian lifestyle photography'
  }
];

export const natureImages = [
  {
    src: 'https://picsum.photos/600/400?random=25',
    alt: 'Indian mountain landscape',
    description: 'Breathtaking Indian mountain view'
  },
  {
    src: 'https://picsum.photos/600/400?random=26',
    alt: 'Indian forest path',
    description: 'Peaceful Indian forest trail'
  },
  {
    src: 'https://picsum.photos/600/400?random=27',
    alt: 'Indian ocean sunset',
    description: 'Stunning Indian ocean sunset'
  },
  {
    src: 'https://picsum.photos/600/400?random=28',
    alt: 'Indian wildlife photography',
    description: 'Majestic Indian wildlife moment'
  },
  {
    src: 'https://picsum.photos/600/400?random=29',
    alt: 'Indian flower garden',
    description: 'Colorful Indian flower garden'
  },
  {
    src: 'https://picsum.photos/600/400?random=30',
    alt: 'Indian waterfall',
    description: 'Powerful Indian waterfall scene'
  }
];
