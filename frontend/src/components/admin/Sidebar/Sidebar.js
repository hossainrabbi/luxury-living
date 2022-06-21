import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import { sidebarData } from '../../../data';
import Logo from '../../../images/luxury-living-logo.png';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import styles from './Sidebar.module.css';

export default function Sidebar({ children, className, ...rest }) {
  const [openSidebar, setOpenSidebar] = useState(false);

  const activeStyle = {
    color: '#ffffff',
    backgroundColor: '#251d58',
  };

  return (
    <div
      className={`${
        openSidebar ? styles.sidebar : styles.sidebar__icon
      } d-flex ${className}`}
      {...rest}
    >
      <aside className="px-1">
        <Link to="/" className={`${styles.logo__img} d-block py-3`}>
          <img src={Logo} alt="luxury-living-logo" />
        </Link>
        {sidebarData.map(({ path, id, icon: Icon, title }) => (
          <NavLink
            to={path}
            className={`${styles.nav__link} nav-link btn mb-2`}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            key={id}
          >
            <span className="icon">
              <Icon />
            </span>
            {openSidebar && <span className="title ms-2">{title}</span>}
          </NavLink>
        ))}
        <div
          className={styles.toggle__bar}
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <AiOutlineMenu />
        </div>
      </aside>
      <div className="w-100">
        <AdminNavbar />
        {children}
      </div>
    </div>
  );
}
