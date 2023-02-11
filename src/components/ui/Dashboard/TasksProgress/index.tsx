import { memo } from 'react';
import { Card } from 'components';
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';
import {
  Avatar,
  Box,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
} from '@mui/material';

const AppTasksProgressComponent = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              TASKS PROGRESS
            </Typography>
            <Typography color="textPrimary" variant="h4">
              75.5%
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: 'warning.main',
                height: 56,
                width: 56,
              }}
            >
              <InsertChartIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box sx={{ pt: 3 }}>
          <LinearProgress value={75.5} variant="determinate" />
        </Box>
      </CardContent>
    </Card>
  );
};

export const AppTasksProgress = memo(AppTasksProgressComponent);
