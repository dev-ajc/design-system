import React from 'react';
import NewsTicker from '../src/components/NewsTicker/index';


import '../src/styles/components/StoryBookDemoComponents.scss';

const args = {
    news: [
        { text: "SUMMER SALE: Up to 40% off selected items!", url: "/sale" },
        { text: "Free shipping on orders over $75", url: "/shipping" },
        { text: "New Edison collection just arrived!", url: "/collections/edison" },
        { text: "Visit our new showroom in Chicago", url: "/locations" }
    ]
};

export default {
    title: 'Demo/NewsTicker',
    component: NewsTicker,
    tags: ['autodocs'],
    args: {
        news: [...args.news]
    },
}


export const Primary = {
    args:{
        ...args,
        news:[{
            "text": "WiNTER SALE: Up to 40% off selected items!",
            "url": "/sale"
        }, {
            "text": "Free shipping on ordasdfasdfers over $75",
            "url": "/shipping"
        }, {
            "text": "New Edison collection just arrived!",
            "url": "/collections/edison"
        }, {
            "text": "Visit our new showroom in Chicago",
            "url": "/locations"
        }]
    },
};


