import { memo } from 'react';
import { Card } from 'components';
import MoneyIcon from '@mui/icons-material/Money';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Avatar, Box, CardContent, Grid, Typography } from '@mui/material';

const AppBudgetComponent = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              BUDGET
            </Typography>
            <Typography color="textPrimary" variant="h4">
              $24k
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: 'error.main',
                height: 56,
                width: 56,
              }}
            >
              <MoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ArrowDownwardIcon color="error" />
          <Typography
            color="error"
            sx={{
              mr: 1,
            }}
            variant="body2"
          >
            12%
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Since last month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export const AppBudget = memo(AppBudgetComponent);
