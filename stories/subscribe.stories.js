import React from 'react';

const StoryBookSubscribe = ({ width = '100%', maxWidth = '800px', bg = '#f8e0e0', p = 6, ...props }) => {
  return (
    <div 
      style={{ 
        backgroundColor: bg,
        padding: typeof p === 'number' ? `${p * 4}px` : '24px',
        borderRadius: '6px',
        width,
        maxWidth,
        boxSizing: 'border-box',
        fontFamily: 'Arial, sans-serif'
      }}
      {...props}
    >
      <h2 style={{ 
        fontSize: '20px', 
        fontWeight: 'bold', 
        margin: '0 0 8px 0',
        color: '#333'
      }}>
        Join Our Newsletter
      </h2>

      <p style={{ 
        fontSize: '14px', 
        color: '#555', 
        margin: '0 0 16px 0',
        lineHeight: '1.4'
      }}>
        Sign up for our newsletter to find out about special offers, exclusive promotions, sales and more.
      </p>

      <div style={{ 
        display: 'flex', 
        width: '100%', 
        margin: '0 0 12px 0',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid #ddd'
      }}>
        <input
          type="email"
          placeholder="Enter your email"
          style={{ 
            flex: 1, 
            border: 'none',
            padding: '12px 16px',
            fontSize: '14px',
            outline: 'none'
          }}
        />
        <button 
          style={{ 
            backgroundColor: 'white', 
            color: '#333', 
            border: 'none',
            borderLeft: '1px solid #ddd',
            padding: '12px 16px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          Sign Up
        </button>
      </div>

      <p style={{ 
        fontSize: '12px', 
        color: '#555', 
        margin: '0',
        lineHeight: '1.4'
      }}>
        Save $50 when you sign up for texts.* Text the word <strong>DESIGN</strong> to <strong>82215</strong>. Restrictions apply. <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>See details.</span>
      </p>
    </div>
  );
};

export default {
  title: 'Components/Subscribe',
  component: StoryBookSubscribe,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      description: 'Sets the width of the component',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '100%' },
      }
    },
    maxWidth: {
      description: 'Sets the maximum width constraint of the component',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '800px' },
      }
    },
    bg: {
      description: 'Background color of the component',
      control: 'color',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#f8e0e0' },
      }
    },
    p: {
      description: 'Padding around the component (in spacing units, 1 unit = 4px)',
      control: { type: 'number', min: 0, max: 12, step: 1 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 6 },
      }
    }
  }
};

export const Primary = {
  args: {
    width: '100%',
    maxWidth: '800px',
    bg: '#f8e0e0'
  },
};
