import React, { FC } from 'react';
import styles from './Analytics.module.css';

interface AnalyticsProps {}

const Analytics: FC<AnalyticsProps> = () => (
  <div className={styles.Analytics} data-testid="Analytics">
    Analytics Component
  </div>
);

export default Analytics;
