import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'CARE Therapy | Exercise Physiologist Johannesburg / Pretoria / Gauteng | Disability Support & Injury Recovery',
    description: 'Professional exercise therapy services in Johannesburg, Pretoria, and Gauteng. Specializing in adaptive exercise for disabilities, injury recovery, and sports performance. Certified exercise therapist Cameron Libera.',
    keywords: [
    'exercise physiologist johannesburg',
    'disability exercise therapy',
    'injury recovery johannesburg',
    'adaptive exercise programs',
    'physiotherapy south africa',
    'sports injury rehabilitation',
    'exercise therapy sandton',
    'disability support johannesburg',
    'chronic condition exercise',
    'post surgery rehabilitation'
    ],
    authors: [{ name: 'Cameron Libera', url: 'https://www.caretherapy.co.za' }],
    creator: 'Cameron Libera',
    publisher: 'CARE Therapy',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://www.caretherapy.co.za'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
    title: 'CARE Therapy - Exercise Physiologist Johannesburg',
    description: 'Professional exercise therapy for disability support, injury recovery, and sports performance in Johannesburg and surrounding areas.',
    url: 'https://www.caretherapy.co.za',
    siteName: 'CARE Therapy',
    locale: 'en_ZA',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CARE Therapy - Exercise Physiologist in Johannesburg',
      },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'CARE Therapy - Exercise Physiologist Johannesburg',
        description: 'Professional exercise therapy for disability support, injury recovery, and sports performance.',
        images: ['/twitter-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
        //yandex: 'your-yandex-verification-code',
    },
};

export const generatePageMetadata = (
  title: string,
  description: string,
  path: string,
  keywords?: string[]
): Metadata => {
  return {
    title: `${title} | CARE Therapy`,
    description,
    keywords: keywords || [],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | CARE Therapy`,
      description,
      url: `https://www.caretherapy.co.za${path}`,
    },
    twitter: {
      title: `${title} | CARE Therapy`,
      description,
    },
  };
};