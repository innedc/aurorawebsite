import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aurora - Connect with Your Stars</title>
        <meta name="description" content="Aurora brings you closer to your favorite idols with 24/7 radio, live chats, and exclusive content." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className={styles.hero}>
        <h1>Where Fans Meet Their Stars, 24/7</h1>
        <p>Aurora brings you closer to your favorite idols with exclusive content, real-time radio, and live interactions.</p>
        <button className={styles.ctaButton}>Discover Aurora</button>
        <Image src="/mockup.png" alt="App Mockup" width={400} height={400} />
      </div>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <h2>Key Features</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <h3>🎧 24/7 Radio Station</h3>
            <p>Stream your favorite group&apos;s music 24/7. Vote for the next song, chat with fans, and hear your idols go live as radio hosts.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>💬 Live Chat & Translations</h3>
            <p>Connect with fans worldwide with real-time chat and instant translations.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>📸 Exclusive Content</h3>
            <p>Access behind-the-scenes photos, videos, and posts you won’t find anywhere else.</p>
          </div>
        </div>
      </section>

      {/* Visual Mockups Section */}
      <section className={styles.mockupsSection}>
        <h2>See Aurora in Action</h2>
        <Image src="/mockup-radio.png" alt="Radio Feature Mockup" width={600} height={300} />
        <Image src="/mockup-chat.png" alt="Live Chat Feature Mockup" width={600} height={300} />
      </section>

      {/* Call to Action Section */}
      <section className={styles.ctaSection}>
        <h2>Ready to Connect with Your Stars?</h2>
        <button className={styles.ctaButton}>Join Aurora Today</button>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2025 Aurora. All rights reserved.</p>
      </footer>
    </>
  );
}
