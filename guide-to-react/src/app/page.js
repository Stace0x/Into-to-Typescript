import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className="header">
        <h1>Beginners Guild to Typescript</h1>
      </header>
      
      <main className={styles.main}>
        <section className={styles.navContainer}>
          <div className={styles.navCard}>
            <h2>What is Typescript</h2>
            <div className={styles.cardInfo}>
              <li>
              <img className={styles.cardImage} src="guide-to-react\public\images\confusion-image-v2.png"></img>
              <p>Why use Typescript</p>
              </li>
            </div>
          </div>
          <div className={styles.navCard}>
            <h2>Typescript Fundamentals</h2>
            <div className={styles.cardInfo}>
              <li>
                <img className={styles.cardImage} src="guide-to-react\public\images\confusion-image-v2.png"></img>
                <p>How do we start writting Typescript</p>
              </li>
            </div>
          </div>
          <div className={styles.navCard}>
            <h2>Uses to Typescript</h2>
            <div className={styles.cardInfo}>
              <li>
              <img className={styles.cardImage} src="guide-to-react\public\images\confusion-image-v2.png"></img>
              <p>How do we use it</p>
              </li>
            </div>
          </div>
        </section>
        <article className={styles.textBody}>
          <h2>What is Typescript?</h2>
          
        </article>
        
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
