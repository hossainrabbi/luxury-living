import React from 'react';
import Styles from './Title.module.css';

export default function Title({ title, description }) {
  return (
    <div className={`${Styles.title} text-center w-50 px-5 pb-5 mx-auto`}>
      <h6>{title}</h6>
      <h4>{description}</h4>
    </div>
  );
}
