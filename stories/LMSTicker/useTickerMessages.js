import { useState, useEffect } from 'react';
import Logger from '../../utils/Logger';

export const useTickerMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = [
          { text: '50% Off on All Products', bgColor: '#E53E3E' },
          { text: 'New Arrivals - Shop Now!', bgColor: '#3182CE' },
          { text: 'Free Shipping on Orders Over $50', bgColor: '#38A169' },
        ];

        setMessages(data);
      } catch (error) {
        Logger.error('Failed to load ticker messages:', error);
      }
    };

    fetchMessages();
  }, []);

  return messages;
};
