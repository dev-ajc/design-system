import { fn } from '@storybook/test';

import React from 'react';
import BackToTop from '../../overrides/app/components/back-to-top';
import { useMultiStyleConfig } from '@chakra-ui/react';
import { useIntl } from 'react-intl';

export default {
  title: 'Lumens CC/BackToTop',
  component: BackToTop,
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
  args: { },
}


export const Primary = {
  args: { },
};


