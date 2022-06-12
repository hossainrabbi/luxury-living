import React from 'react';
import { Navbar } from 'react-bootstrap';
import Account from '../../../images/Profile.png';
import styles from './AdminNavbar.module.css';

export default function AdminNavbar() {
  return (
    <Navbar className={`${styles.admin__navbar} d-flex justify-content-end`}>
      <button className="btn">
        <img
          src={Account}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </button>
    </Navbar>
  );
}
