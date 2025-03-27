import React, { FC } from 'react';
import styles from './AppLayout.module.css';

import { Grid } from '@mui/material';
import { Outlet } from "react-router";

import AppSidebar from '../AppSidebar/AppSidebar';

interface AppLayoutProps {}

const AppLayout: FC<AppLayoutProps> = () => (
  <Grid 
    container 
    direction="row"
    sx={{
      justifyContent: "flex-start",
      alignItems: "center",
    }}>
    <Grid size="auto">
      <AppSidebar />
    </Grid>
    <Grid size="grow">
      <Outlet />
    </Grid>
  </Grid>
);

export default AppLayout;
