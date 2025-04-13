import React from 'react';
import Ticker from '../../overrides/app/components/ticker';
import { useTickerMessages } from '../hooks/useTickerMessages'; // Custom hook to fetch messages

const TickerContainer = () => {
  const messages = useTickerMessages(); // Fetch messages dynamically

  return (
    <div className="ticker-container">
      <Ticker messages={messages} interval={3000} />
    </div>
  );
};

export default TickerContainer;
