import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, Grid } from '@mui/material';
import {
  AppBudget,
  AppTotalCustomer,
  AppTasksProgress,
  AppTotalProfit,
  AppLatestSales,
  AppTrafficDevice,
  AppLatestProducts,
  AppLatestOrders,
  Layout,
} from 'components';
const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  paddingBottom: 64,
}));

function Page() {
  return (
    <>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Container maxWidth={false}>
            <Grid container spacing={3}>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <AppBudget />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <AppTotalCustomer />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <AppTasksProgress />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <AppTotalProfit />
              </Grid>
              <Grid item lg={8} md={12} xl={9} xs={12}>
                <AppLatestSales />
              </Grid>
              <Grid item lg={4} md={6} xl={3} xs={12}>
                <AppTrafficDevice />
              </Grid>
              <Grid item lg={4} md={6} xl={3} xs={12}>
                <AppLatestProducts />
              </Grid>
              <Grid item lg={8} md={12} xl={9} xs={12}>
                <AppLatestOrders />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </DashboardLayoutRoot>
    </>
  );
}

Page.getLayout = (page: JSX.Element) => (
  <Layout heading={'DASHBOARD'}>{page}</Layout>
);

export default Page;
