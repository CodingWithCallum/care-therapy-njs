import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.caretherapy.co.za',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.caretherapy.co.za/OurServices',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.caretherapy.co.za/OurStory',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.caretherapy.co.za/ContactUs',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // {
    //   url: 'https://www.caretherapy.co.za/services/adaptive-exercise-therapy',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.6,
    // },
    // {
    //   url: 'https://www.caretherapy.co.za/services/injury-recovery',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.6,
    // },
    // {
    //   url: 'https://www.caretherapy.co.za/services/sports-performance',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.6,
    // },
    // {
    //   url: 'https://www.caretherapy.co.za/blog',
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.5,
    // },
  ]
}