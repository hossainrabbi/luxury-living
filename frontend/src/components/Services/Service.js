import React from 'react';
import styles from './Service.module.css';

export default function Service({ name, price, description, image }) {
  return (
    <article
      className={`${styles.service} text-center rounded shadow-sm p-4 mb-4`}
    >
      <div className={`${styles.service__images} mb-4`}>
        <img src={image} alt={name} />
      </div>
      <h5 className={styles.service__title}>{name}</h5>
      <h5 className={styles.service__price}>${price}</h5>
      <p className="mb-0">{description}</p>
    </article>
  );
}
