import { memo } from 'react';
import { Card } from 'components';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Avatar, CardContent, Grid, Typography } from '@mui/material';

const AppTotalProfitComponent = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              TOTAL PROFIT
            </Typography>
            <Typography color="textPrimary" variant="h4">
              $23k
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: 'primary.main',
                height: 56,
                width: 56,
              }}
            >
              <AttachMoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export const AppTotalProfit = memo(AppTotalProfitComponent);
