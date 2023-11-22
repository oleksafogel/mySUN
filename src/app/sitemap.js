export default function sitemap() {
    return [
      {
        url: 'https://mysunapp.com/',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://mysunapp.com/users',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.9,
      },
      {
        url: 'https://mysunapp.com/partners',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.9,
      },
      {
        url: 'https://mysunapp.com/actions',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.9,
      }
    ]
  }