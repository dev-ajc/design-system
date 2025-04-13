import React from 'react';
import Ticker from '@/components/Ticker';
import { useMultiStyleConfig } from '@chakra-ui/react';
import { messages } from './tickerMessages';

export const _args = {
  messages, // Using imported dynamic messages
  interval: 3000,  // Default interval of 3 seconds for message changes
  setIsOpen: () => {},
};

export default {
  title: 'Lumens/Ticker',
  component: Ticker,
  tags: ['autodocs'],
  decorators: [
    (Story, { args }) => {
      const styles = useMultiStyleConfig('Header');
      return (
        <div style={{ position: 'relative', width: '100%', padding: '20px', border: '1px solid #ccc' }}>
          <Story args={{ ...args, styles }} />
        </div>
      );
    },
  ],
  args: {
    ..._args,
  }
};

export const Primary = {
  args: {
    ..._args,
  },
};

export const FastTicker = {
  args: {
    ..._args,
    interval: 1000,  // Faster interval (1 second)
  },
};

export const SlowTicker = {
  args: {
    ..._args,
    interval: 5000,  // Slower interval (5 seconds)
  },
};