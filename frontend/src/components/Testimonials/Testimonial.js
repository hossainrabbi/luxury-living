import React from 'react';
import ReactStars from 'react-stars';
import styles from './Testimonial.module.css';

export default function Testimonial({
  name,
  title,
  review,
  description,
  image,
}) {
  return (
    <article className={`${styles.testimonial} rounded p-4`}>
      <div className={styles.user__details}>
        <div className={styles.user__image}>
          <img src={image} alt={name} />
        </div>
        <div className="ms-3">
          <h5 className="mb-0">{name}</h5>
          <small className="d-block">{title}</small>
        </div>
      </div>
      <small className="d-block mt-4">{description}</small>
      <ReactStars
        count={5}
        value={review}
        size={24}
        edit={false}
        color1="#dddddd"
        color2="#ff8822"
      />
    </article>
  );
}
