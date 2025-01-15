import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aurora - Your Star Connection</title>
        <meta name="description" content="Aurora brings you closer to your favorite idols with exclusive content and live radio." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.hero} style={{ backgroundColor: "#000000" }}>
        <h1 style={{ color: "#54D2CF" }}>Connect with Your Stars Anytime, Anywhere</h1>
        <p style={{ color: "#A766F7" }}>Aurora is your gateway to exclusive content, 24/7 radio, and real-time chats with fans and idols.</p>
        <button className={styles.ctaButton} style={{ backgroundColor: "#2E838B", color: "#FFFFFF" }}>Join Aurora Today</button>
        <Image src="/mockup.png" alt="App Mockup" width={500} height={500} />
      </div>

      <section className={styles.featuresSection} style={{ backgroundColor: "#000000" }}>
        <h2 style={{ color: "#54D2CF" }}>Explore the Features</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard} style={{ borderColor: "#6E2EBC" }}>
            <h3>🎧 24/7 Radio</h3>
            <p>Non-stop music from your favorite idols. Vote for songs and chat with fans.</p>
          </div>
          <div className={styles.featureCard} style={{ borderColor: "#A766F7" }}>
            <h3>💬 Live Chat</h3>
            <p>Connect with fans globally and see live updates from idols.</p>
          </div>
          <div className={styles.featureCard} style={{ borderColor: "#54D2CF" }}>
            <h3>📸 Exclusive Content</h3>
            <p>Get behind-the-scenes photos, videos, and updates.</p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} style={{ backgroundColor: "#000000" }}>
        <h2 style={{ color: "#6E2EBC" }}>Ready to Connect?</h2>
        <button className={styles.ctaButton} style={{ backgroundColor: "#A766F7", color: "#FFFFFF" }}>Get Started</button>
      </section>

      <footer className={styles.footer} style={{ backgroundColor: "#000000" }}>
        <p style={{ color: "#54D2CF" }}>&copy; 2025 Aurora. All rights reserved.</p>
      </footer>
    </>
  );
}
