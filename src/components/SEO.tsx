import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export function SEO({
  title = 'Learn Eastern Armenian - Free Flashcard App | Armenian Vocabulary',
  description = 'Master Eastern Armenian vocabulary with interactive flashcards. Learn Armenian language online for free with our comprehensive vocabulary deck system.',
  keywords = 'learn Armenian, Eastern Armenian, Armenian language, Armenian vocabulary, Armenian flashcards',
  ogImage = '/og-image.jpg'
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute('content', ogImage);
    }
  }, [title, description, keywords, ogImage]);

  return null;
}

