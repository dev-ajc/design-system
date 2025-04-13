import React from 'react';
import Header from '../src/components/Header/index';


import '../src/styles/components/StoryBookDemoComponents.scss';

const args = {
};

export default {
    title: 'Demo/Header',
    component: Header,
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
    args:{
        components:""
    },
};


