import NavCard from "../NavCards/NavCard";
import styles from "./NavGroup.module.css"

export default function NavGroup() {
  // Sample data for the cards
  const cardData = [
    {
      title: "What is Typescript", 
      imgSrc: "/images/confusion-image-v2.png",
      text: "Why use Typescript", 
      href: "section-1"
    },
    {
      title:"Typescript Fundamentals",
      imgSrc:"/images/studying-image-v1.png",
      text:"How do we start writing Typescript",
      href:"section-2"
    },
    {
      title:"Expanding on Typescript" ,
      imgSrc:"/images/trying-image-v1.png" ,
      text:"How do we use Typescript" ,
      href:"section-3"
    },
  ];

  return (
    <div className={styles.container}>
      {cardData.map((card, index) => (
        <NavCard
          key={index}
          href={card.href}
          title={card.title}
          imgSrc={card.imgSrc}
          text={card.text}
        />
      ))}
    </div>
  );
}