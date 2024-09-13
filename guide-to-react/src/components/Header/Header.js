import styles from "./Header.module.css"
import Image from "next/image"

export default function Header() {
  
  return (
    <header className={styles.headerContainer}>   
      <span className={styles.logo}>
        <Image 
          src="/images/logo-v1.png" 
          alt="Logo" 
          width={90} 
          height={70} 
        />
      </span>
      <h1 className={styles.heading}>Fun with TypeScript</h1>
    </header>
  )
}