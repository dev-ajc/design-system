import { fn } from '@storybook/test';

import React from 'react';
import CustomerService from '../../overrides/app/components/customer-service';
import { useMultiStyleConfig } from '@chakra-ui/react';
import { useIntl } from 'react-intl';

export default {
  title: 'Lumens CC/CustomerService',
  component: CustomerService,
  tags: ['autodocs'],
  decorators: [
    (Story, { args }) => {
      const styles = useMultiStyleConfig('Header');
      const intl = useIntl()
      
      return (
          <Story args={{...args, styles, intl}} />
      )
    },
  ],
  args: {
    productName: 'Lamp',
  },
}


export const Primary = {
  args: {
    productName: 'Lamp',
  },
};

