import Script from 'next/script';

export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CARE Therapy",
    "description": "Professional exercise therapy services specializing in adaptive exercise for disabilities, injury recovery, and sports performance in Johannesburg.",
    "url": "https://www.caretherapy.co.za",
    "telephone": "+27-79-790-8846",
    "email": "caretherapysa@gmail.co.za",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Johannesburg",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -26.2041,
      "longitude": 28.0473
    },
    "openingHours": [
      "Mo-Fr 08:00-18:00"
    ],
    "priceRange": "$$",
    "image": "https://www.caretherapy.co.za/og-image.jpg",
    "founder": {
      "@type": "Person",
      "name": "Cameron Libera",
      "jobTitle": "Exercise Physiologist",
      "telephone": "+27-11-234-5678",
      "email": "caretherapysa@gmail.co.za"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Johannesburg"
      },
      {
        "@type": "City", 
        "name": "Pretoria"
      },
      {
        "@type": "City",
        "name": "Sandton"
      },
      {
        "@type": "City",
        "name": "Randburg"
      }
    ],
    "serviceType": [
      "Exercise Therapy",
      "Disability Support",
      "Injury Recovery",
      "Sports Performance",
      "Rehabilitation"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Exercise Therapy Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Adaptive Exercise Therapy",
            "description": "Personalized programs for individuals with physical disabilities, chronic health conditions, or age-related limitations."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Injury Recovery Support",
            "description": "Exercise-based support for individuals recovering from surgery, injury, or extended inactivity."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sports Performance Training",
            "description": "Programs for athletes focusing on enhancing performance, preventing injuries, and optimizing recovery."
          }
        }
      ]
    }
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const PersonSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Cameron Libera",
    "jobTitle": "Exercise Physiologist",
    "description": "Certified exercise physiologist specializing in adaptive exercise therapy for disabilities, injury recovery, and sports performance.",
    "url": "https://www.caretherapy.co.za",
    "telephone": "+27-79-790-8846",
    "email": "caretherapysa@gmail.co.za",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Johannesburg",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "Rhodes University"
    },
    // "hasCredential": [
    //   {
    //     "@type": "EducationalOccupationalCredential",
    //     "name": "MSc Exercise Physiology"
    //   },
    //   {
    //     "@type": "EducationalOccupationalCredential",
    //     "name": "ACSM Certified Exercise Physiologist"
    //   }
    // ],
    // "memberOf": {
    //   "@type": "Organization",
    //   "name": "South African Sports Medicine Association"
    // },
    "worksFor": {
      "@type": "Organization",
      "name": "CARE Therapy"
    }
  };

  return (
    <Script
      id="person-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const ReviewSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CARE Therapy",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "27"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Callum Barry"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Cameron helped me start my training plan to rebuild my running strength after an injury. He provided a structured plan that was easy to follow and tailored to my needs. I highly recommend his services."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Tara Pohl"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Cameron has been instrumental in my recovery from a sports injury. His expertise in rehabilitation and personalized training plans have made a significant difference in my performance and overall health."
      }
    ]
  };

  return (
    <Script
      id="review-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};