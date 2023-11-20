import 'bootstrap/dist/css/bootstrap.css';

import { baloo, poppins, overpass } from './fonts';

import './globals.css'

import Footer from './layoutComponents/footer';
import Header from './layoutComponents/header';

export const metadata = {
  metadataBase: new URL('https://mysunapp.com'),
  alternates: {
      canonical: '/'
  },
  title: 'mySUN • APP that helps reduce our Nature’s Footprint',
  description: 'Transform habits, reduce ecological footprint: mySUN app gamifies eco-conscious choices, making living a sustainable life fun and easy. Go green!',
}

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "mySUN app",
    "description": "APP that helps reduce our Nature’s Footprint",
    "operatingSystem": "iOS",
    "applicationCategory": "Lifestyle",
    "url": "https://mysunapp.com",
    "author": {
      "@type": "Organization",
      "name": "Giraffe Apps Inc",
      "url": "https://giraffe.software",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "ZRadewych@giraffe.software",
        "availableLanguage": "English"
      }
    }
  }

  return (
      <html lang="en" className={`${baloo.variable} ${poppins.variable} ${overpass.variable}`}>
        <head>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/>
        </head>
        <body>
          <Header />
            {children}
          <Footer />
        </body>
      </html>
  )
}
