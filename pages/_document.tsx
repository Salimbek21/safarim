import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Safarim - Explore Uzbekistan with Local Tours</title>
        <link rel="icon" type="image/png" sizes="10x16" href="/logo.svg" />

        {/* Meta Description & Keywords */}
        <meta
          name="description"
          content="Explore the best tours in Uzbekistan. Discover ancient cities, breathtaking landscapes, and cultural experiences with our expert local guides."
        />
        <meta
          name="keywords"
          content="Uzbekistan tours, local tours, Samarkand, Bukhara, Tashkent, travel Uzbekistan, Silk Road, adventure tours"
        />
        <meta name="author" content="Safarim" />

        {/* Open Graph (Social Media) */}
        <meta
          property="og:title"
          content="Tour in Uzbekistan | Local Tours & Travel Guide"
        />
        <meta
          property="og:description"
          content="Plan your trip to Uzbekistan with our top-rated local tours. Experience the culture, history, and stunning architecture of the Silk Road."
        />
        <meta property="og:image" content="/logo.svg" />
        <meta property="og:url" content="https://safarim.uz" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tour in Uzbekistan | Local Tours & Travel Guide"
        />
        <meta
          name="twitter:description"
          content="Join our exclusive Uzbekistan tours and discover the beauty of Central Asia with expert guides."
        />
        <meta name="twitter:image" content="/logo.svg" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://safarim.uz" />
      </Head>

      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
