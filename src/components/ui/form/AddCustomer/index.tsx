import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
} from '@mui/material';
import { AppButton, AppLoader, Input } from 'components';
import { firebaseAddProduct } from 'config/firebase';
import { useFormik } from 'formik';
import { memo, useState } from 'react';

const Customer = () => {
  const [image, setImage] = useState<any>();
  const formik = useFormik<any>({
    initialValues: {
      product_name: '',
      descripion: '',
      price: '',
    },

    onSubmit: (data) => {
      try {
        firebaseAddProduct(data, image)
        formik.resetForm()
      } catch (error: any) {
        alert(error.message)
      }
    },
  });

  if (formik.isSubmitting) {
    return <AppLoader />;
  }

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ width: '100%', margin: '0rem 1rem' }}
    >
      <Card>
        <CardHeader subheader={'ADD PRODUCT'} title={'Product Form'} />
        <Divider style={{ borderColor: '#E6E8F0' }} />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <Input
                name="product_name"
                label={'Product Name'}
                value={formik.values.product_name}
                onChange={formik.handleChange}
                required
              />
            </Grid>
            <Grid item md={6} xs={12} spacing={3}>
              <Input
                name="price"
                label={'Price'}
                value={formik.values.price}
                onChange={formik.handleChange}
                required
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <Input
                name="descripion"
                label={'Details'}
                value={formik.values.descripion}
                onChange={formik.handleChange}
                required
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <Input
                name="images"
                type="file"
                onChange={(e: any) => { setImage(e.target.files[0]) }}
                required
              />
            </Grid>
          </Grid>

        </CardContent>
        <Divider style={{ borderColor: '#E6E8F0' }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 2,
          }}
        >
          {/* <AppButton
            title={'REMOVE'}
            sx={{ mx: 1, backgroundColor: 'lightgray !important' }}
          /> */}
          <AppButton sx={{ mx: 1 }} type="submit" title={'ADD'} />
        </Box>
      </Card>
    </form>
  );
};

export const AddCustomer = memo(Customer);
