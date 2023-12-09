import { useEffect } from 'react';
import { useAppContextValue } from './useAppContextValue';

const useSectionRef = (ref:React.MutableRefObject<null>) => {
  const { setSectionRefs } = useAppContextValue();

  useEffect(() => {
    if (ref.current) {
      setSectionRefs((prev) => [...prev, ref ]);
    }
  }, [setSectionRefs, ref]);
};

export default useSectionRef;