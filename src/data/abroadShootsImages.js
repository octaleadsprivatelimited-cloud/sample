// Shared abroad shoots images data
// This file manages all abroad shoots images used across the website
// Changes here will automatically update both the work page and homepage slider

export const abroadShootsImages = [
  {
    id: 1,
    src: 'https://picsum.photos/600/400?random=101',
    alt: 'Abroad Shoot 1',
    description: 'International photography session 1',
    category: 'abroad-shoots'
  },
  {
    id: 2,
    src: 'https://picsum.photos/600/400?random=102',
    alt: 'Abroad Shoot 2',
    description: 'International photography session 2',
    category: 'abroad-shoots'
  },
  {
    id: 3,
    src: 'https://picsum.photos/600/400?random=103',
    alt: 'Abroad Shoot 3',
    description: 'International photography session 3',
    category: 'abroad-shoots'
  },
  {
    id: 4,
    src: 'https://picsum.photos/600/400?random=104',
    alt: 'Abroad Shoot 4',
    description: 'International photography session 4',
    category: 'abroad-shoots'
  },
  {
    id: 5,
    src: 'https://picsum.photos/600/400?random=105',
    alt: 'Abroad Shoot 5',
    description: 'International photography session 5',
    category: 'abroad-shoots'
  },
  {
    id: 6,
    src: 'https://picsum.photos/600/400?random=106',
    alt: 'Abroad Shoot 6',
    description: 'International photography session 6',
    category: 'abroad-shoots'
  },
  {
    id: 7,
    src: 'https://picsum.photos/600/400?random=107',
    alt: 'Abroad Shoot 7',
    description: 'International photography session 7',
    category: 'abroad-shoots'
  },
  {
    id: 8,
    src: 'https://picsum.photos/600/400?random=108',
    alt: 'Abroad Shoot 8',
    description: 'International photography session 8',
    category: 'abroad-shoots'
  },
  {
    id: 9,
    src: 'https://picsum.photos/600/400?random=109',
    alt: 'Abroad Shoot 9',
    description: 'International photography session 9',
    category: 'abroad-shoots'
  }
];

// Function to add new abroad shoot image
export const addAbroadShootImage = (newImage) => {
  const maxId = Math.max(...abroadShootsImages.map(img => img.id));
  const newImageWithId = {
    ...newImage,
    id: maxId + 1,
    category: 'abroad-shoots'
  };
  abroadShootsImages.push(newImageWithId);
  return newImageWithId;
};

// Function to update existing abroad shoot image
export const updateAbroadShootImage = (id, updatedImage) => {
  const index = abroadShootsImages.findIndex(img => img.id === id);
  if (index !== -1) {
    abroadShootsImages[index] = { ...abroadShootsImages[index], ...updatedImage };
    return abroadShootsImages[index];
  }
  return null;
};

// Function to remove abroad shoot image
export const removeAbroadShootImage = (id) => {
  const index = abroadShootsImages.findIndex(img => img.id === id);
  if (index !== -1) {
    return abroadShootsImages.splice(index, 1)[0];
  }
  return null;
};

export default abroadShootsImages;
