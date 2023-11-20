import Image from 'next/image';

import styles from './testimonialsCards.module.css';

import photo1 from "/src/images/testimonials-photo1.png";
import photo2 from "/src/images/testimonials-photo2.png";
import photo3 from "/src/images/testimonials-photo3.png";

const content = [
  {
    image: photo1,
    paragrapgh:
      "mySUN is the first gaming app I am aware of that will really teach and inspire the younger generation to help save our planet and have fun doing it!!!",
    authorName: "Zenon Radewych",
    authorRole: "FOUNDER",
  },
  {
    image: photo2,
    paragrapgh:
      "mySUN is cool!!! I wish they had this type of APP when I was in high-school, I would have played against my classmates and would have loved to win some prizes like free gift cards to the cafe near my school!",
    authorName: "Melody Ekbatani",
    authorRole: "USER",
  },
  {
    image: photo3,
    paragrapgh:
      "Designing the mySUN APP graphics has been a blast. It's not just reducing my Nature's Footprint; it's turning sustainability into a daily game I can't wait to play!",
    authorName: "Inna Onyshchenko",
    authorRole: "ARTIST",
  },
];

const TestimonialsCards = () => {
  return (
    <div className={styles.testimonialsCards}>
      {content.map((contentItem, index) => (
        <div key={index} className={styles.card}>
          <div>
            <Image src={contentItem.image} alt="Testimonial author" />
            <p>{contentItem.paragrapgh}</p>
          </div>
          <div className={styles.cardAuthor}>
            <div className={styles.cardName}>{contentItem.authorName}</div>
            <div className={styles.cardRole}>{contentItem.authorRole}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TestimonialsCards;