import React from 'react';
import NavMenu from '../src/components/NavMenu/index';


import '../src/styles/components/StoryBookDemoComponents.scss';

const args = {
    menuItems: [
        {
            label: "Products",
            url: "/products",
            children: [
                { label: "Ceiling Lights", url: "/products/ceiling" },
                { label: "Floor Lamps", url: "/products/floor-lamps" },
                { label: "Table Lamps", url: "/products/table-lamps" },
                { label: "Wall Lights", url: "/products/wall-lights" },
                { label: "Smart Lighting", url: "/products/smart" }
            ]
        },
        {
            label: "Collections",
            url: "/collections",
            children: [
                { label: "Vintage", url: "/collections/vintage" },
                { label: "Modern", url: "/collections/modern" },
                { label: "Industrial", url: "/collections/industrial" },
                { label: "Minimalist", url: "/collections/minimalist" }
            ]
        },
        {
            label: "Sale",
            url: "/sale"
        },
        {
            label: "Inspiration",
            url: "/inspiration"
        }
    ],
};

export default {
    title: 'Demo/NavMenu',
    component: NavMenu,
    tags: ['autodocs'],
    args: {
        menuItems: [...args.menuItems]
    },
}


export const Primary = {
    args:{
        ...args,
    },
};


