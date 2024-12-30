import { useState } from 'react';

const useAccordion = (init: number = 0) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(init);

  const handleAccordion = (index: number): void => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return [activeIndex, handleAccordion] as const;
};

export default useAccordion;