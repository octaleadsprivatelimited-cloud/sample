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

export const vfxImages = [
  {
    src: '/images/vfx/01.bahubal1.jpg',
    alt: 'Baahubali VFX Work',
    description: 'Epic VFX work from Baahubali showcasing advanced visual effects'
  },
  {
    src: '/images/vfx/02.khaidi.jpg',
    alt: 'Khaidi VFX Work',
    description: 'Action-packed VFX sequences from Khaidi'
  },
  {
    src: '/images/vfx/03.kgf_1.jpg',
    alt: 'KGF VFX Work',
    description: 'Stunning VFX from KGF series with cinematic excellence'
  },
  {
    src: '/images/vfx/04.ruler.jpg',
    alt: 'Ruler VFX Work',
    description: 'High-quality VFX work from Ruler movie'
  },
  {
    src: '/images/vfx/05.bigil.jpg',
    alt: 'Bigil VFX Work',
    description: 'Dynamic VFX sequences from Bigil'
  },
  {
    src: '/images/vfx/06.valmiki_1.jpg',
    alt: 'Valmiki VFX Work',
    description: 'Creative VFX work from Valmiki project'
  },
  {
    src: '/images/vfx/07.chichore.jpg',
    alt: 'Chhichhore VFX Work',
    description: 'Innovative VFX work from Chhichhore'
  },
  {
    src: '/images/vfx/08a_aa.jpg',
    alt: 'A Aa VFX Work',
    description: 'Professional VFX work from A Aa movie'
  }
];

export const lifeBookImages = [
  {
    src: '/images/life book/unnamed.jpg',
    alt: 'Student Life Book Page 1',
    description: 'Beautiful student life book page showcasing memories and achievements'
  },
  {
    src: '/images/life book/unnamed (1).jpg',
    alt: 'Student Life Book Page 2',
    description: 'Creative life book layout with personal milestones and experiences'
  },
  {
    src: '/images/life book/unnamed (2).jpg',
    alt: 'Student Life Book Page 3',
    description: 'Elegant life book design capturing precious moments and growth'
  },
  {
    src: '/images/life book/unnamed (3).jpg',
    alt: 'Student Life Book Page 4',
    description: 'Professional life book page highlighting academic and personal journey'
  },
  {
    src: '/images/life book/unnamed (4).jpg',
    alt: 'Student Life Book Page 5',
    description: 'Artistic life book layout with meaningful quotes and memories'
  },
  {
    src: '/images/life book/unnamed (5).jpg',
    alt: 'Student Life Book Page 6',
    description: 'Dynamic life book design showcasing achievements and aspirations'
  },
  {
    src: '/images/life book/unnamed (6).jpg',
    alt: 'Student Life Book Page 7',
    description: 'Inspirational life book page with personal reflections and goals'
  },
  {
    src: '/images/life book/unnamed (7).jpg',
    alt: 'Student Life Book Page 8',
    description: 'Comprehensive life book finale celebrating the complete journey'
  }
];

export const animationImages = [
  {
    src: '/images/Animation/01.The Book Of Miracle_Posters with TEXT.jpg',
    alt: 'The Book of Miracle Animation',
    description: 'Stunning animation poster for The Book of Miracle project showcasing creative storytelling'
  },
  {
    src: '/images/Animation/02-Nilayam-Long-OPP (1).png',
    alt: 'Nilayam Animation Project',
    description: 'Elegant animation design for Nilayam project with cinematic visual appeal'
  },
  {
    src: '/images/Animation/03 - 2025-09-29T172954.115 (1).png',
    alt: 'Creative Animation Work',
    description: 'Innovative animation artwork demonstrating advanced creative techniques'
  },
  {
    src: '/images/Animation/04.Boy on bicycle-01-With Text-001.jpg',
    alt: 'Boy on Bicycle Animation',
    description: 'Charming animation scene featuring a boy on bicycle with artistic flair'
  },
  {
    src: '/images/Animation/06.EARTH_ANGEL A.jpg',
    alt: 'Earth Angel Animation',
    description: 'Beautiful Earth Angel animation showcasing celestial and environmental themes'
  },
  {
    src: '/images/Animation/Elegant Cinematic Wedding Thumbnail HD 169.jpg',
    alt: 'Elegant Cinematic Wedding Animation',
    description: 'Sophisticated wedding animation with cinematic quality and elegant design'
  },
  {
    src: '/images/Animation/h.png',
    alt: 'Creative Animation Design',
    description: 'Artistic animation design demonstrating creative visual storytelling'
  }
];
