import { fn } from '@storybook/test';

import React from 'react';
import Carousel from '../../overrides/app/components/carousel';
import { useMultiStyleConfig, Image } from '@chakra-ui/react';
import { useIntl } from 'react-intl';
import ChevronLeftIcon from '@salesforce/retail-react-app/app/assets/svg/chevron-left.svg';
import ChevronRightIcon from '@salesforce/retail-react-app/app/assets/svg/chevron-right.svg';

export default {
  title: 'Lumens CC/Carousel',
  component: Carousel,
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
    isLoading: true,
    textHeadline: 'Related Products',
    ChevronLeftIcon: () => <Image src={ChevronLeftIcon} />,
    ChevronRightIcon: () => <Image src={ChevronRightIcon} />
  },
};

