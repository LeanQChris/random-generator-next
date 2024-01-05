export const getRandomGradient = (): string => {
    const colors = [
      'bg-gradient-to-r from-red-500 to-yellow-500',
      'bg-gradient-to-r from-yellow-500 to-green-500',
      'bg-gradient-to-r from-green-500 to-blue-500',
      'bg-gradient-to-r from-blue-500 to-indigo-500',
      'bg-gradient-to-r from-indigo-500 to-purple-500',
      'bg-gradient-to-r from-purple-500 to-pink-500',
    ];
  
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };