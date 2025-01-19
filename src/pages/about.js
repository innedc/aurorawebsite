import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/About.module.css'; // Make sure you have the correct CSS file for About page
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Aurora</title>
        <meta
          name="description"
          content="Learn more about the creator of Aurora and their vision for the app."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

{/* Header Section */}
<header className={styles.header}>
  <div className={styles.headerContent}>
    <div className={styles.logoContainer1}>
      <Link href="/">
        <Image
          src="/images/logo.png" // Replace with your actual logo path
          alt="Aurora Logo"
          width={70}
          height={70}
        />
      </Link>
    </div>
    <div className={styles.headerLinks}>
      <a href="/artists" className={styles.artistsLink}>Artists</a>
      <a href="/about" className={styles.aboutLink}>About</a>

      <button className={styles.downloadButton}>Download now</button>
    </div>
  </div>
</header>



      {/* About Page Content */}
      <div className={styles.aboutContent}>
        <h1>About the creator</h1>
        <div className={styles.creatorContainer}>
          <div className={styles.creatorText}>
            <div className={styles.textBox}>
              <p>
                Hello! I&#39;m Inne, the creator of Aurora. I&#39;m a passionate designer and K-pop/music fan who wanted to create an app that connects fans with their idols in a meaningful way. Aurora is the result of my vision to bring people closer to the artists they love, offering a platform with 24/7 radio, exclusive content, and real-time interactions.
              </p>
              <p>
                Aurora was born from a passion for music and fandom. I always believed in the power of music to unite people across the globe. Aurora was created to bridge the gap and bring fans closer to the stars they love. 
              </p>
              <p>
              I wanted to make something that would give fans more than just music streaming. I wanted to create a community, a place where fans could interact with each other and with idols in a way that felt personal and real. Aurora is a reflection of my love for both technology and music.
              </p>
            </div>
          </div>
          <div className={styles.creatorImageContainer}>
            <Image
              src="/images/about.jpeg" // Replace with the creator's image
              alt="Creator's Image"
              width={400}
              height={400}
              className={styles.creatorImage}
            />
          </div>
        </div>

{/* Contact and Portfolio Section */}
<div className={styles.contactPortfolioContainer}>
  {/* Contact Section */}
  <div className={styles.contact}>
    <h2>Contact Me</h2>
    <p>
      Have questions or feedback? I’d love to hear from you! Reach out via email:
    </p>
    <a
      href="mailto:inne.deceuster@student.ap.be"
      className={styles.contactLink}
    >
      inne.deceuster@student.ap.be
    </a>
  </div>

  {/* Portfolio Section */}
  <div className={styles.portfolio}>
    <h2>My Portfolio</h2>
    <p>
      Explore more of my work and creative projects. Let’s collaborate or get inspired!
    </p>
    <a
      href="https://your-portfolio-link.com"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.portfolioLink}
    >
      Visit Portfolio
    </a>
  </div>
</div>

      </div>
     {/* Footer */}
     <footer className={styles.footer}>
        <p>&copy; 2025 Aurora. All rights reserved.</p>
      </footer>
    </>
  );
}
