import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import { sidebarData } from '../../../data';
import Logo from '../../../images/luxury-living-logo.png';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const activeStyle = {
    color: '#251d58',
  };

  return (
    <div
      className={`${
        openSidebar ? styles.sidebar : styles.sidebar__icon
      } d-flex`}
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
      <div className="container-fluid px-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum velit
        nihil sed soluta commodi delectus ullam cupiditate ipsa consequatur
        asperiores, reprehenderit quo quasi dolorum rerum! Doloremque
        reprehenderit vitae assumenda facere! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Harum velit nihil sed soluta commodi
        delectus ullam cupiditate ipsa consequatur asperiores, reprehenderit quo
        quasi dolorum rerum! Doloremque reprehenderit vitae assumenda facere!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum velit
        nihil sed soluta commodi delectus ullam cupiditate ipsa consequatur
        asperiores, reprehenderit quo quasi dolorum rerum! Doloremque
        reprehenderit vitae assumenda facere! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Harum velit nihil sed soluta commodi
        delectus ullam cupiditate ipsa consequatur asperiores, reprehenderit quo
        quasi dolorum rerum! Doloremque reprehenderit vitae assumenda facere!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum velit
        nihil sed soluta commodi delectus ullam cupiditate ipsa consequatur
        asperiores, reprehenderit quo quasi dolorum rerum! Doloremque
        reprehenderit vitae assumenda facere!
      </div>
    </div>
  );
}
