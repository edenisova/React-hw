import React from 'react';
import styles from './SearchForm.module.css';
import search from '../../Images/search.svg';


export default function SearchForm() {
    return (
        <div className={styles.searchForm}>
        <img
          src={search}
          alt="Поиск"
          className={styles.searchForm__image}
        />
        <input
          type="search"
          placeholder="Search"
          className={styles.searchForm__input}
        />
      </div>
    );
  }