import { memo } from 'react';
import Image from 'next/image';
// import { v4 as uuid } from 'uuid';
import { AppButton, Card } from 'components';
// import { useTranslation } from 'next-i18next';
// import { COMMON_TRANSLATION_KEYS } from 'locales';
// import { formatDistanceToNow, subHours } from 'date-fns';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
  Box,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';

// const { VIEW_ALL } = COMMON_TRANSLATION_KEYS;

const products = [
  {
    // id: uuid(),
    name: 'Dropbox',
    imageUrl: '/images/products/product_1.png',
    // updatedAt: subHours(Date.now(), 2),
  },
  {
    // id: uuid(),
    name: 'Medium Corporation',
    imageUrl: '/images/products/product_2.png',
    // updatedAt: subHours(Date.now(), 2),
  },
  {
    // id: uuid(),
    name: 'Slack',
    imageUrl: '/images/products/product_3.png',
    // updatedAt: subHours(Date.now(), 3),
  },
  {
    // id: uuid(),
    name: 'Lyft',
    imageUrl: '/images/products/product_4.png',
    // updatedAt: subHours(Date.now(), 5),
  },
  {
    // id: uuid(),
    name: 'GitHub',
    imageUrl: '/images/products/product_5.png',
    // updatedAt: subHours(Date.now(), 9),
  },
];

const AppLatestProductsComponent = () => {
  // const { t } = useTranslation();

  return (
    <Card>
      <CardHeader
        subtitle={`${products.length} in total`}
        title="Latest Products"
      />
      <Divider />
      <List>
        {products.map((product, i) => (
          <ListItem divider={i < products.length - 1} key={i}>
            <ListItemAvatar>
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={48}
                height={48}
              />
            </ListItemAvatar>
            <ListItemText
              primary={product.name}
              // secondary={`Updated ${formatDistanceToNow(product.updatedAt)}`}
            />
            <IconButton edge="end" size="small">
              <MoreVertIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2,
        }}
      >
        <AppButton
          size="small"
          variant="text"
          onClick={() => {}}
          title={'VIEW_ALL'}
          endIcon={<ArrowRightIcon fontSize="small" />}
        />
      </Box>
    </Card>
  );
};

export const AppLatestProducts = memo(AppLatestProductsComponent);
