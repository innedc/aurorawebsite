import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const artists = [
    { name: "ATEEZ", image: "/images/ateez.jpg" },
    { name: "BTS", image: "/images/ateez.jpg" },
    { name: "Seventeen", image: "/images/ateez.jpg" },
    { name: "Stray Kids", image: "/images/ateez.jpg" },
    { name: "TXT", image: "/images/ateez.jpg" },
    { name: "SHINee", image: "/images/ateez.jpg" },
    { name: "Enhypen", image: "/images/ateez.jpg" },
    { name: "BOYNEXTDOOR", image: "/images/boynextdoor.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(artists.length / 4); // Total number of slides

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

  const visibleArtists = artists.slice(currentIndex * 4, currentIndex * 4 + 4);

  return (
    <>
      <Head>
        <title>Aurora - Your Star Connection</title>
        <meta
          name="description"
          content="Aurora brings you closer to your favorite idols with exclusive content and live radio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
{/* Hero Section */} 
<div className={styles.hero}>
  <h1>Connect with Your Stars Anytime, Anywhere</h1>
  <p>
    Aurora is your gateway to exclusive content, 24/7 radio, and real-time
    chats with fans and idols.
  </p>
  <button className={styles.ctaButton}>Join Aurora Today</button>
  
  {/* Image without fixed width/height to maintain original aspect ratio */}
  <Image 
    src="/images/filler.png" // Corrected path
    alt="App Mockup"
    width={500}
    height={400}
  />
</div>



    {/* About Section */}
<section className={styles.aboutSection}>
  <div className={styles.aboutContent}>
    <h2>Why Aurora?</h2>
    <p>
      Aurora is designed to bridge the gap between fans and idols, offering a platform that combines real-time interaction, exclusive updates, and music. Whether you&apos;re tuning into your favorite idol&apos;s radio station or engaging in live chats, Aurora creates an immersive fan experience.
    </p>
  </div>
  <Image
    src="/about-image.png"
    alt="About Aurora"
    width={600}
    height={400}
  />
</section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <h2>Discover Our Features</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <h3>🎧 24/7 Radio</h3>
            <p>
              Enjoy non-stop music from your idols, vote for songs, and chat
              with fans in real-time.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>💬 Live Chat</h3>
            <p>
              Connect with fans around the globe and stay updated with live idol
              posts.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>📸 Exclusive Content</h3>
            <p>
              Access behind-the-scenes photos, videos, and special updates
              directly from your idols.
            </p>
          </div>
        </div>
      </section>

    {/* Artists Section */}
    <section className={styles.artistsSection}>
        <h2>Artists on Aurora</h2>
        <div className={styles.artistSliderWrapper}>
          <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={handlePrev}>
            &larr;
          </button>
          <div className={styles.artistSlider}>
           {visibleArtists.map((artist, index) => (
  <div key={index} className={styles.artistCard}>
    <Image src={artist.image} alt={artist.name} width={500} height={500} />
    <div className={styles.artistOverlay}>
      <p>{artist.name}</p>
    </div>
  </div>
))}
          </div>
          <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={handleNext}>
            &rarr;
          </button>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <h2>What Our Users Say</h2>
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialCard}>
            <p>
              &quot;Aurora has brought me closer to my idols than ever
              before!&quot;
            </p>
            <h4>- Alex, 21</h4>
          </div>
          <div className={styles.testimonialCard}>
            <p>
              &quot;I love being able to vote for songs and chat with fans
              during radio sessions.&quot;
            </p>
            <h4>- Jamie, 19</h4>
          </div>
          <div className={styles.testimonialCard}>
            <p>
              &quot;The exclusive content makes me feel like I&apos;m part of
              something special.&quot;
            </p>
            <h4>- Taylor, 23</h4>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Start Your Journey with Aurora</h2>
        <p>
          Join a global community of fans and connect with your idols like never
          before.
        </p>
        <button className={styles.ctaButton}>Get Started</button>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2025 Aurora. All rights reserved.</p>
      </footer>
    </>
  );
}
