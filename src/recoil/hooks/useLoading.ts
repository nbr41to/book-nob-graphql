import { loadingState } from '@/recoil/atoms/loading';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

export const useLoading = (isLoading?: boolean) => {
  const [loading, setLoading] = useRecoilState(loadingState);

  useEffect(() => {
    if (typeof isLoading === 'undefined') return;
    setLoading(isLoading);
  }, [isLoading, setLoading]);

  return {
    is: loading,
    on: () => setLoading(true),
    off: () => setLoading(false),
  };
};
