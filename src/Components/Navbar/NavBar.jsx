import React from 'react';
import styles from "./NavBar.module.css";
import Button from '../Buttons/buttons';
import Search from '../Search/Search';
import Logo from '../Logo/Logo';



const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <Logo/>
        <Search/>
        <Button children="Give Feedback"/>
    </nav>
  )
}

export default NavBar