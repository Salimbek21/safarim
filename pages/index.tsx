import Head from "next/head";
import { Logo } from "../components/svg";

export default function Home() {
  return (
    <>
      {/* SEO Optimization */}
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

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-screen w-full max-w-[90%] md:max-w-[600px] m-auto relative text-center">
        <Logo className="max-w-[90%] md:max-w-[600px]" />

        <div className="mt-4 text-gray-700">
          <h1 className="text-lg font-semibold">
            🚀 Soon, Safarim is opening...
          </h1>
          <p className="text-sm mt-1">
            Safarim is a local tour company in Uzbekistan where you can easily
            book your trips, create personalized tours, hire professional
            guides, and explore the beauty of Uzbekistan.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mt-4 text-gray-600 text-sm">
          <p>
            📧 Contact us:{" "}
            <a
              href="mailto:karimbayevs1@gmail.com"
              className="text-blue-600 underline"
            >
              karimbayevs1@gmail.com
            </a>
          </p>
          <p>
            📞 Phone:{" "}
            <a href="tel:+998910115525" className="text-blue-600 underline">
              +998 91 011 55 25
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
