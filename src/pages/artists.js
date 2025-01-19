import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Artists.module.css'; 
import Link from 'next/link';
// Make sure to create this CSS file

const artists = [
  {
    name: 'ATEEZ',
    image: '/images/ateez.jpg', // Replace with the actual image path
  },
  {
    name: 'MICO',
    image: '/images/artist2.jpg', // Replace with the actual image path
  },
  {
    name: 'Jeff Satur',
    image: '/images/artist3.jpg', // Replace with the actual image path
  },
  {
    name: 'Kiss of life',
    image: '/images/boynextdoor.jpg', // Replace with the actual image path
  },
  {
    name: 'Grace Abrams',
    image: '/images/artist5.jpg', // Replace with the actual image path
  },
  {
    name: 'aespa',
    image: '/images/ateez.jpg', // Replace with the actual image path
  },
  {
    name: 'BOYNEXTDOOR',
    image: '/images/ateez.jpg', // Replace with the actual image path
  },
  {
    name: 'Xikers',
    image: '/images/ateez.jpg', // Replace with the actual image path
  },
  {
    name: 'Wave To Earth',
    image: '/images/ateez.jpg', // Replace with the actual image path
  },
  {
    name: 'CHUNG HA',
    image: '/images/ateez.jpg', // Replace with the actual image path
  },{
    name: 'PiXXie',
    image: '/images/ateez.jpg', // Replace with the actual image path
  },
  {
    name: 'Day6',
    image: '/images/ateez.jpg', // Replace with the actual image path
  },
];

export default function Artists() {
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


{/* Artists Page Content */}
<div className={styles.artistsContent}>
        <h1>Aurora Artists</h1>
        <p>Discover the incredible artists featured on the Aurora platform. Explore their music, connect with them, and enjoy exclusive content!</p>

        <div className={styles.artistsGrid}>
          {artists.map((artist, index) => (
            <div key={index} className={styles.artistCard}>
              <Image
                src={artist.image} // Artist image
                alt={artist.name}
                width={250}
                height={250}
                className={styles.artistImage}
              />
              <div className={styles.artistOverlay}>
                <p>{artist.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.moreArtists}>
    <p>And many more...</p>
  </div>
  <div className={styles.ctaButtons}>
      <button className={styles.ctaButton}>Download now!</button>
    </div>
</div>

     {/* Footer */}
     <footer className={styles.footer}>
        <p>&copy; 2025 Aurora. All rights reserved.</p>
      </footer>
    </>
  );
}