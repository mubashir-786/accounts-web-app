import { useFormik } from 'formik';
import { FormEvent, memo } from 'react';
import { Input, AppButton } from 'components';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
} from '@mui/material';
import { CUSTOMER_FORM_SCHEMA } from 'config/schema-validators';

type Props = {
  handleSubmit: (e?: FormEvent<HTMLFormElement>) => void;
};
type TData = {
  company_name: string;
  website: string;
  email: string;
  number: number;
  contact_person: string;
  address: string;
  country: string;
};

const Customer = ({ handleSubmit }: Props) => {
  const formik = useFormik<TData>({
    initialValues: {
      company_name: '',
      website: '',
      email: '',
      number: 0,
      contact_person: '',
      address: '',
      country: '',
    },
    validationSchema: CUSTOMER_FORM_SCHEMA(),

    onSubmit: () => {},
  });

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: '100%', margin: '0rem 1rem' }}
    >
      <Card>
        <CardHeader subheader={'PROFILE EDITABLE'} title={'Customer Form'} />
        <Divider style={{ borderColor: '#E6E8F0' }} />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <Input
                name="company_name"
                label={'Company Name'}
                value={formik.values.company_name}
                onChange={formik.handleChange}
                helperText={
                  formik.touched.company_name && formik.errors.company_name
                }
                error={Boolean(
                  formik.touched.company_name && formik.errors.company_name,
                )}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Input
                name="website"
                label={'Website'}
                value={formik.values.website}
                onChange={formik.handleChange}
                helperText={formik.touched.website && formik.errors.website}
                error={Boolean(formik.touched.website && formik.errors.website)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <Input
                name="email"
                label={'Email'}
                value={formik.values.email}
                onChange={formik.handleChange}
                helperText={formik.touched.email && formik.errors.email}
                error={Boolean(formik.touched.email && formik.errors.email)}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Input
                name="number"
                type={'number'}
                label={'Number'}
                value={formik.values.number}
                onChange={formik.handleChange}
                helperText={formik.touched.number && formik.errors.number}
                error={Boolean(formik.touched.number && formik.errors.number)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <Input
                name="contact_person"
                label={'Contact Person'}
                type={'number'}
                value={formik.values.contact_person}
                onChange={formik.handleChange}
                helperText={
                  formik.touched.contact_person && formik.errors.contact_person
                }
                error={Boolean(
                  formik.touched.contact_person && formik.errors.contact_person,
                )}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Input
                name="address"
                label={'address'}
                value={formik.values.address}
                onChange={formik.handleChange}
                helperText={formik.touched.address && formik.errors.address}
                error={Boolean(formik.touched.address && formik.errors.address)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <Input
                name="country"
                label={'Country'}
                value={formik.values.country}
                onChange={formik.handleChange}
                helperText={formik.touched.country && formik.errors.country}
                error={Boolean(formik.touched.country && formik.errors.country)}
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
          <AppButton
            title={'REMOVE'}
            sx={{ mx: 1, backgroundColor: 'lightgray !important' }}
          />
          <AppButton sx={{ mx: 1 }} type="submit" title={'ADD'} />
        </Box>
      </Card>
    </form>
  );
};

export const AddCustomer = memo(Customer);
