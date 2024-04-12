import { useEffect, useRef } from 'react';


export const useSEOHeadData = ({ title }: { title: string }): void => {
  const prevTitle = useRef<string>(document.title);
  const prevDescription = useRef<string>(document.querySelector('meta[name="description"]')?.getAttribute('content') || '');

  useEffect(() => {
    const previousTitle = prevTitle.current;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = prevDescription.current;

    if (title && title !== previousTitle) {
      const newTitle = `${title.charAt(0).toUpperCase()}${title.slice(1)}`;
      document.title = `${newTitle} | Phrases 📝`;

      if (metaDescription) {
        metaDescription.setAttribute('content', `Create phrases and save them - ${newTitle}`);
      }
    }

    return () => {
      document.title = previousTitle;
      if (metaDescription) {
        metaDescription.setAttribute('content', previousDescription);
      }
    };
  }, [title]);
};
