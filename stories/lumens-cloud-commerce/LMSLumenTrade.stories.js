import React from 'react';
import TradeUI from '../../overrides/app/components/lumens-trade/TradeUI';

const args = {
  components: 'Test: Test Guest'
};

export default {
  title: 'Lumens CC/Trade',
  component: TradeUI,
  tags: ['autodocs'],
  decorators: [
    (Story, { args }) => {
      return (
          <Story args={{ ...args }} />
      )
    },
  ],
  args: {
    ...args,
  },
}


export const Primary = {
  args: { },
};


