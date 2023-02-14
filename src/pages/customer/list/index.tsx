import { Box, Container } from '@mui/material';
import { Layout, List } from 'components';
import { CUSTOMER_ADD_URL } from 'routes';

export default function Page() {
  const COLUMNS = [
    { dataField: 'company_name', caption: 'company name' },
    { dataField: 'website', caption: 'website' },
    { dataField: 'email', caption: 'email' },
    { dataField: 'number', caption: 'number' },
    { dataField: 'contact_person', caption: 'contact person' },
    { dataField: 'address', caption: 'address' },
    { dataField: 'country', caption: 'country' },
  ];
  const data = [
    {
      id: '2362',
      company_name: 'abc',
      website: 'www.abc.com',
      email: 'abc@gmail.com',
      number: '123456789',
      contact_person: '00123456',
      address: 'Hamitono',
      country: 'USA',
    },
    {
      id: '2362',
      company_name: 'rtr',
      website: 'www.rtr.com',
      email: 'rtr@gmail.com',
      number: '123456789',
      contact_person: '00123456',
      address: 'Hamitono',
      country: 'USA',
    },
  ];
  return (
    <div>
      <Box>
        <Container maxWidth={false}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 30,
              marginBottom: 10,
            }}
          >
            <h2 style={{ fontWeight: 700, fontSize: '2rem' }}>
              Customer Details
            </h2>
          </div>

          <List columns={COLUMNS} content={data} url={CUSTOMER_ADD_URL} />
        </Container>
      </Box>
    </div>
  );
}

Page.getLayout = (page: JSX.Element) => (
  <Layout heading={'lIST'}>{page}</Layout>
);
