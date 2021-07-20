import { useState } from 'react';

export const useLoader = () => {
  const [isLoading, setIsLoading] = useState(false);

  return { isLoading, setIsLoading };
};
