import React, { FC } from 'react';
import styles from './Favorites.module.css';

interface FavoritesProps {}

const Favorites: FC<FavoritesProps> = () => (
  <div className={styles.Favorites} data-testid="Favorites">
    Favorites Component
  </div>
);

export default Favorites;
