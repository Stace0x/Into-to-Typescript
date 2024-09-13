import styles from "./NavCard.module.css";
import Image from "next/image";

export default function NavCard(props) {
  return (
    <a href={`#${props.href}`} className={styles.navCardLink}>
      <section className={styles.navContainer}>
        <div className={styles.navCard}>
          <h2>{props.title}</h2>
          <div className={styles.cardInfo}>
            <Image
              src={props.imgSrc}
              width={80}
              height={80}
              className={styles.cardImage}
            />
            <p>{props.text}</p>
          </div>
        </div>
      </section>
    </a>
  );
}

