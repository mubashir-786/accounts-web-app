import { Box, Grid, Typography } from '@mui/material';
import { AppLoader, Input } from 'components';
import { AppButton } from 'components/common/Button';
import { Card } from 'components/common/Card';
import { firebaseLogin } from 'config/firebase';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { memo } from 'react';
import { theme } from 'theme';

const AuthLoginFormComponent = () => {
  const router = useRouter()
  const formik = useFormik<any>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values: any) => {
      try {
        await firebaseLogin(values.email, values.password);
        router.push('/');
      } catch (error) {
        alert(error)
      }
    },
  });

  if (formik.isSubmitting) {
    return <AppLoader />;
  }
  return (
    <>
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <Grid container justifyContent="space-around">
          <Grid item xs={11} md={4}>
            <Card
              elevation={13}
              sx={{ p: 2, background: theme.palette.background.paper }}
            >
              <Box sx={{ my: 3, textAlign: 'center' }}>
                <Typography color="textPrimary" variant="h4">
                  {'SIGN IN'}
                </Typography>
              </Box>
              <form onSubmit={formik.handleSubmit}>
                <Input name="email" type="email" label={'EMAIL'} value={formik.values.email} onChange={formik.handleChange}
                  onBlur={formik.handleBlur} required />
                <Input name="password" type="password" label={'PASSWORD'} value={formik.values.password} onChange={formik.handleChange}
                  onBlur={formik.handleBlur} required />
                <AppButton
                  fullWidth
                  type="submit"
                  sx={{
                    my: 2,
                    //   backgroundColor: '#663918',
                    //   '&:hover': {
                    //     backgroundColor: '#ab6c43',
                    //   },
                  }}
                  title={'SUBMIT'}
                />
              </form>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export const AuthLoginForm = memo(AuthLoginFormComponent);
