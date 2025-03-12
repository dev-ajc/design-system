import { fn } from '@storybook/test';

import React from 'react';
import ProductPricing from '../../overrides/app/components/product-pricing';
import { useMultiStyleConfig } from '@chakra-ui/react';
import { useIntl } from 'react-intl';

export default {
  title: 'Lumens CC/ProductPricing',
  component: ProductPricing,
  tags: ['autodocs'],
  decorators: [
    (Story, { args }) => {
      const styles = useMultiStyleConfig('Header');
      const intl = useIntl()
      const price = {
        data: {
          price: {
            ...args
          }
        },
        productId: args.productId,
      }
      
      return (
          <Story args={{...args, styles, intl, price}} />
      )
    },
  ],
  args: {
  },
}


export const Primary = {
  args: {
    isClearance: false,
    isOpenBox: false,
    isTrade: false,
    isRange: false,
    listPrice: 209.06,
    salePrice: 0,
    isCustomAvailable: null,
    isAllSKUsInSale: false,
    saveMessage: "",
    productId: "TTB1847139",
  },
};


export const Sale = {
  args: {
    isClearance: true,
    isOpenBox: false,
    isTrade: false,
    isRange: false,
    listPrice: 209.06,
    salePrice: 100.00,
    isCustomAvailable: null,
    isAllSKUsInSale: true,
    saveMessage: "Save 50%",
    productId: "TTB1847139",
  },
};



