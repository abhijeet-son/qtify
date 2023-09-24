import React from 'react';
import styles from './Search.module.css';
import searchLogo from '../../assets/Search-icon.png'

const Search = () => {
  return (
    <div>
        <form className={styles.wrapper}>
           <input className={styles.search}
           placeholder='Search a album of your choice'
           />
           <div>
            <button className={styles.searchButton} type='submit'>
              <img src={searchLogo} alt="" />
            </button>
         </div>
        </form>
    </div>
  )
}

export default Search;