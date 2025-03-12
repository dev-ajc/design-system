import { fn } from '@storybook/test';

import React from 'react';
import RatingSummary from '../../overrides/app/components/rating-summary';
import { useMultiStyleConfig } from '@chakra-ui/react';
import { useIntl } from 'react-intl';

export default {
  title: 'Lumens CC/RatingSummary',
  component: RatingSummary,
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
  },
}


export const Primary = {
  args: {
    averageRating: 4.5,
    numberOfRating: 100,
  },
};


