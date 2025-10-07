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
    src: '/images/life book/lifebook_01.jpg',
    alt: 'Student Academic Journey',
    description: 'Comprehensive documentation of student academic milestones and achievements'
  },
  {
    src: '/images/life book/lifebook_02.jpg',
    alt: 'Personal Growth Portfolio',
    description: 'Interactive life book showcasing personal development and learning experiences'
  },
  {
    src: '/images/life book/lifebook_03.jpg',
    alt: 'Memory Preservation',
    description: 'Beautiful preservation of precious moments and meaningful experiences'
  },
  {
    src: '/images/life book/lifebook_04.jpg',
    alt: 'Educational Milestones',
    description: 'Documentation of educational achievements and learning progress'
  },
  {
    src: '/images/life book/lifebook_05.jpg',
    alt: 'Creative Life Story',
    description: 'Artistic representation of student life journey with creative storytelling'
  },
  {
    src: '/images/life book/lifebook_07jpg.jpg',
    alt: 'Digital Life Book',
    description: 'Modern digital life book with interactive elements and multimedia content'
  }
];

export const animationImages = [
  {
    id: 1,
    src: '/images/aifilmposters/Ai1.jpg?v=6',
    alt: 'AI Film Making Project 1',
    description: 'Revolutionary AI-powered film creation showcasing cutting-edge technology',
    category: 'animation'
  },
  {
    id: 2,
    src: '/images/aifilmposters/Ai2.jpg?v=6',
    alt: 'AI Film Making Project 2',
    description: 'Advanced AI algorithms creating stunning visual narratives and storytelling',
    category: 'animation'
  },
  {
    id: 3,
    src: '/images/aifilmposters/Ai3.jpg?v=6',
    alt: 'AI Film Making Project 3',
    description: 'Next-generation AI film production with intelligent character generation',
    category: 'animation'
  },
  {
    id: 4,
    src: '/images/aifilmposters/Ai4.jpg?v=6',
    alt: 'AI Film Making Project 4',
    description: 'Pioneering AI-driven cinematic experiences with immersive storytelling',
    category: 'animation'
  }
];

export const pureAnimationImages = [
  {
    id: 1,
    src: '/images/Animation/animation1.jpg?v=4',
    alt: 'Animation Project 1',
    description: 'Creative 2D animation showcasing character design and storytelling',
    category: 'animation'
  },
  {
    id: 2,
    src: '/images/Animation/animation2.png?v=4',
    alt: 'Animation Project 2',
    description: 'Dynamic 3D animation with advanced visual effects and motion graphics',
    category: 'animation'
  },
  {
    id: 3,
    src: '/images/Animation/animation3.jpg?v=4',
    alt: 'Animation Project 3',
    description: 'Innovative animation techniques blending traditional and digital art',
    category: 'animation'
  },
  {
    id: 4,
    src: '/images/Animation/animation4.jpg?v=4',
    alt: 'Animation Project 4',
    description: 'Cinematic animation with professional lighting and composition',
    category: 'animation'
  },
  {
    id: 5,
    src: '/images/Animation/animation5.jpg?v=4',
    alt: 'Animation Project 5',
    description: 'Character animation featuring expressive movement and personality',
    category: 'animation'
  },
  {
    id: 6,
    src: '/images/Animation/animation6.jpg?v=4',
    alt: 'Animation Project 6',
    description: 'Environmental animation creating immersive digital worlds',
    category: 'animation'
  },
  {
    id: 7,
    src: '/images/Animation/animation7.jpg?v=4',
    alt: 'Animation Project 7',
    description: 'Motion graphics animation with modern design principles',
    category: 'animation'
  },
  {
    id: 8,
    src: '/images/Animation/animation8.jpg?v=4',
    alt: 'Animation Project 8',
    description: 'Advanced animation project demonstrating technical expertise',
    category: 'animation'
  }
];

export const calendarSelfieImages = [
  {
    src: '/images/calender/1.jpg',
    alt: 'Calendar Selfie 1',
    description: 'AI-powered calendar with personalized selfie integration'
  },
  {
    src: '/images/calender/2.jpg',
    alt: 'Calendar Selfie 2',
    description: 'Smart calendar design with custom photos'
  },
  {
    src: '/images/calender/3.jpg',
    alt: 'Calendar Selfie 3',
    description: 'Personalized calendar creation with selfie features'
  }
];

export const financialLiteracyImages = [
  {
    src: 'https://picsum.photos/600/400?random=401',
    alt: 'Financial Literacy Book Cover',
    description: 'Comprehensive financial education book designed for modern learners'
  },
  {
    src: 'https://picsum.photos/600/400?random=402',
    alt: 'Money Management Guide',
    description: 'Interactive guide to personal finance and money management strategies'
  },
  {
    src: 'https://picsum.photos/600/400?random=403',
    alt: 'Investment Education Content',
    description: 'Educational content covering investment basics and financial planning'
  },
  {
    src: 'https://picsum.photos/600/400?random=404',
    alt: 'Budget Planning Tools',
    description: 'Practical tools and templates for effective budget planning and tracking'
  },
  {
    src: 'https://picsum.photos/600/400?random=405',
    alt: 'Financial Goal Setting',
    description: 'Interactive content helping users set and achieve financial goals'
  },
  {
    src: 'https://picsum.photos/600/400?random=406',
    alt: 'Digital Financial Education',
    description: 'Modern digital learning platform for financial literacy education'
  }
];

export const digitalEducationImages = [
  {
    src: '/images/E-learning/1.jpg',
    alt: 'E-Learning Platform 1',
    description: 'Next-generation digital education platform'
  },
  {
    src: '/images/E-learning/2.jpg',
    alt: 'E-Learning Platform 2',
    description: 'Interactive learning modules and content'
  },
  {
    src: '/images/E-learning/3.jpg',
    alt: 'E-Learning Platform 3',
    description: 'Virtual classroom experience'
  },
  {
    src: '/images/E-learning/4.jpg',
    alt: 'E-Learning Platform 4',
    description: 'Educational content creation'
  },
  {
    src: '/images/E-learning/5.jpg',
    alt: 'E-Learning Platform 5',
    description: 'Student assessment and tracking'
  },
  {
    src: '/images/E-learning/6.jpg',
    alt: 'E-Learning Platform 6',
    description: 'Learning management system'
  },
  {
    src: '/images/E-learning/7.jpg',
    alt: 'E-Learning Platform 7',
    description: 'Digital education tools'
  },
  {
    src: '/images/E-learning/8.jpg',
    alt: 'E-Learning Platform 8',
    description: 'AI-powered learning solutions'
  }
];

export const servicesImages = [
  {
    src: '/images/ourservises/01..jpg',
    alt: 'AI Film Making Service',
    description: 'Revolutionary AI-powered film production with cutting-edge technology'
  },
  {
    src: '/images/ourservises/02..jpg',
    alt: 'VFX Service',
    description: 'Advanced visual effects and post-production services'
  },
  {
    src: '/images/ourservises/03..jpg',
    alt: 'Life Book Service',
    description: 'Student life documentation and educational content creation'
  },
  {
    src: '/images/ourservises/04..jpg',
    alt: 'Animation Service',
    description: 'Creative animation services spanning 2D, 3D, and motion graphics'
  },
  {
    src: '/images/ourservises/05..jpg',
    alt: 'Calendar Selfie Service',
    description: 'AI-powered personal calendar creation with smart selfie integration'
  },
  {
    src: '/images/ourservises/06..jpg',
    alt: 'Financial Literacy Service',
    description: 'Interactive educational content for financial awareness'
  },
  {
    src: '/images/ourservises/07..jpg',
    alt: 'E-Learning Service',
    description: 'Next-generation learning solutions with AI-enhanced content'
  }
];
