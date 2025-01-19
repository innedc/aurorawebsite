import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const artists = [
    { name: "ATEEZ", image: "/images/ateez.jpg" },
    { name: "MICO", image: "/images/mico.jpg" },
    { name: "Jeff Satur", image: "/images/jeffsatur.jpg" },
    { name: "LYKN", image: "/images/lykn.jpg" },
    { name: "BOYNEXTDOOR", image: "/images/boynextdoor.jpg" },
    { name: "8TURN", image: "/images/8turn.jpg" },
    { name: "aespa", image: "/images/aespa.jpg" },
    { name: "Gracie Abrams", image: "/images/gracieabrams.jpg" },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4); // Default to 4 items per slide

  // This will run once the component is mounted
  useEffect(() => {
    // Set the itemsPerSlide based on window size
    const updateItemsPerSlide = () => {
      setItemsPerSlide(window.innerWidth <= 768 ? 1 : 4);
    };

    updateItemsPerSlide(); // Set initial value based on current window size
    window.addEventListener("resize", updateItemsPerSlide); // Update when window resizes

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(artists.length / itemsPerSlide);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const visibleArtists = artists.slice(currentIndex * itemsPerSlide, currentIndex * itemsPerSlide + itemsPerSlide);


  return (
    <>
      <Head>
        <title>Aurora - Reach for your stars</title>
        <meta
          name="description"
          content="Aurora brings you closer to your favorite idols with exclusive content and live radio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      {/* Header Section */}
      <header className={styles.header}>
  <div className={styles.headerContent}>
    <div className={styles.logoContainer1}>
      <Image
        src="/images/logo.png" // Replace with your actual logo path
        alt="Aurora Logo"
        width={70}
        height={70}
      />
    </div>
    <div className={styles.headerLinks}>
      <a href="/about" className={styles.aboutLink}>About</a>
      <a href="/artists" className={styles.artistsLink}>Artists</a>
      <button className={styles.downloadButton}>Download now</button>
    </div>
  </div>
</header>


{/* Header Section */}
<header className={styles.header}>
  <div className={styles.headerContent}>
    <div className={styles.logoContainer1}>
      <Image
        src="/images/logo.png" // Replace with your actual logo path
        alt="Aurora Logo"
        width={70}
        height={70}
      />
    </div>
    <div className={styles.headerLinks}>
      <a href="/artists" className={styles.artistsLink}>Artists</a> 
      <a href="/about" className={styles.aboutLink}>About</a>

      <button className={styles.downloadButton}>Download now</button>
    </div>
  </div>
</header>


{/* Hero Section */}
<div className={styles.heroSection}>
  <div className={styles.heroContent}>
    <div className={styles.logoContainer}>
      <Image
        src="/images/name.png" // Replace with your actual logo path
        alt="Aurora Logo"
        width={450}
        height={150}
        className={styles.logo}
      />
    </div>
    <h1>
      Connect with Your <span className={styles.highlight}>Stars</span> Anytime,
      Anywhere
    </h1>
    <p>
      Aurora bridges the gap between you and your idols with exclusive content,
      24/7 radio, and real-time fan interaction. Step into the light and join a
      global community of fans today.
    </p>
  </div>
  <div className={styles.heroImage}>
    <Image
      src="/images/filler2.png"
      alt="Aurora App Mockup"
      width={700}
      height={500}
      className={styles.heroMockup}
    />
  </div>
  <div className={styles.ctaContainer}>
      <button className={styles.ctaButton}>Join Aurora Today</button>
    </div>
</div>


{/* About Section */}
<section className={styles.aboutSection}>
  <div className={styles.aboutGrid}>
    <div className={styles.textContainer}>
      <h2>Why Aurora?</h2>
      <p>
        Aurora bridges the gap between fans and idols, offering a platform that
        combines real-time interaction, exclusive updates, and music. Whether
        you&apos;re tuning into your favorite idol&apos;s radio station or enjoying their
        latest post, Aurora creates an immersive fan experience like no other.
      </p>
      <p>
        Join a community where the love for music, connection, and exclusivity
        meets. Experience Aurora today!
      </p>
    </div>
  </div>
</section>


{/* Features Section */}
<section className={styles.featuresSection}>
  <div className={styles.featuresHeader}>
    <h2>Discover Our Features</h2>
    <p>
      Aurora brings you closer to your idols with these exclusive features.
    </p>
  </div>
  <div className={styles.featuresGrid}>
    <div className={styles.featureBlock}>
      <div className={styles.featureContent}>
        <h3>🎧 24/7 Radio</h3>
        <p>
          Tune in anytime to enjoy non-stop music from your idols, vote for songs, and connect with fans in real-time.
        </p>
      </div>
    </div>

    <div className={styles.featureBlock}>
      <div className={styles.featureContent}>
        <h3>📸 Exclusive Content</h3>
        <p>
          Get behind-the-scenes access to photos, videos, and special updates, bringing you closer to your idols.
        </p>
      </div>
    </div>

    <div className={styles.featureBlock}>
      <div className={styles.featureContent}>
        <h3>🌐 Translations</h3>
        <p>
          Break language barriers with in-app translations, making global idol-fan interactions seamless.
        </p>
      </div>
    </div>
  </div>
</section>

 {/* Artists Section */}
 <section className={styles.artistsSection}>
      <h2>Some Of The Artists On Aurora</h2>
      <div className={styles.artistSliderWrapper}>
        <button
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={handlePrev}
        >
          &larr;
        </button>
        <div className={styles.artistSlider}>
          {visibleArtists.map((artist, index) => (
            <div key={index} className={styles.artistCard}>
              <Image
                src={artist.image}
                alt={artist.name}
                width={500}
                height={500}
              />
              <div className={styles.artistOverlay}>
                <p>{artist.name}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={handleNext}
        >
          &rarr;
        </button>
      </div>
    </section>

{/* Testimonials Section */}
<section className={styles.testimonialsSection}>
  <h2>What Our Users Say</h2>
  <div className={styles.testimonialsGrid}>
    <div className={styles.testimonialCard}>
      <div className={styles.testimonialContent}>
        <p>&quot;Aurora has brought me closer to my idols than ever before!&quot;</p>
        <h4>- Mallow, 21</h4>
      </div>
    </div>
    <div className={styles.testimonialCard}>
      <div className={styles.testimonialContent}>
        <p>&quot;I love being able to vote for songs and chat with fans during radio sessions.&quot;</p>
        <h4>- Reese, 19</h4>
      </div>
    </div>
    <div className={styles.testimonialCard}>
      <div className={styles.testimonialContent}>
        <p>&quot;The exclusive content makes me feel like I&apos;m part of something special.&quot;</p>
        <h4>- Emma, 23</h4>
      </div>
    </div>
  </div>
</section>




{/* CTA Section */}
<section className={styles.ctaSection}>
  <div className={styles.ctaContent}>
    <h2>Start Your Journey with Aurora</h2>
    <p>
      Join a global community of fans and connect with your idols like never before.
    </p>
    <div className={styles.ctaButtons}>
      <button className={styles.ctaButton}>Download now!</button>
    </div>
  </div>
</section>

    {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2025 Aurora. All rights reserved.</p>
      </footer>
    </>
  );
}
