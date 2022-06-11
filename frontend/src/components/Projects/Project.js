import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import styles from './Project.module.css';

export default function Project({ name, location, images }) {
  return (
    <article className="text-center">
      <div className={styles.project__images}>
        <img src={images[0].url} alt={name} />
      </div>
      <h5 className="mt-3">{name}</h5>
      <p className="d-flex align-items-center justify-content-center">
        <HiLocationMarker color="#000000" />{' '}
        <span className="ms-2">{location}</span>
      </p>
    </article>
  );
}
