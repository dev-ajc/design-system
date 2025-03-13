import React from 'react';
import Tabs from '../../src/components/Tabs';


export default {
    title: 'ReactJS Components/Tabs',
    component: Tabs,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'tertiary'],
            description: 'The color variant of the tabs',
        },
        vertical: {
            control: 'boolean',
            description: 'Whether to display tabs vertically',
        },
        useAccordionOnMobile: {
            control: 'boolean',
            description: 'Whether to transform into an accordion on mobile devices',
        },
        defaultActiveTab: {
            control: { type: 'number', min: 0, max: 3 },
            description: 'The index of the initially active tab',
        },
    },
};

// Sample content for our tabs
const TabContent = ({ title }) => (
    <div style={{ padding: '20px 0' }}>
        <h3 style={{ marginBottom: '12px' }}>{title} Content</h3>
        <p>
            This is the content for the {title} tab. It can contain any React components or HTML.
            You can customize this content based on your needs.
        </p>
        {title === 'Description' && (
            <div style={{ marginTop: '16px' }}>
                <h4>Product Description</h4>
                <p>
                    This beautiful table lamp features an elegant design with ceramic base and linen shade.
                    Perfect for adding ambient lighting to any room in your home.
                </p>
                <ul style={{ marginTop: '12px', marginLeft: '20px' }}>
                    <li>Dimmable</li>
                    <li>Energy Efficient</li>
                    <li>Made in USA</li>
                </ul>
            </div>
        )}
        {title === 'Specifications' && (
            <div style={{ marginTop: '16px' }}>
                <h4>Technical Specifications:</h4>
                <ul style={{ marginLeft: '20px' }}>
                    <li>Dimensions: 16" H x 10" W x 10" D</li>
                    <li>Material: Ceramic base with linen shade</li>
                    <li>Bulb Type: LED, 9W (equivalent to 60W)</li>
                    <li>Light Output: 800 lumens</li>
                    <li>Color Temperature: 2700K (warm white)</li>
                    <li>Voltage: 120V</li>
                </ul>
            </div>
        )}
        {title === 'Reviews' && (
            <div style={{ marginTop: '16px' }}>
                <div style={{ marginBottom: '16px' }}>
                    <h4>John D. ★★★★★</h4>
                    <p>This lamp looks fantastic in my living room. The light is warm and inviting, perfect for evening reading.</p>
                </div>
                <div>
                    <h4>Sarah M. ★★★★☆</h4>
                    <p>Beautiful design, but I wish it was a bit taller. Still, the quality is excellent and it provides great lighting.</p>
                </div>
            </div>
        )}
        {title === 'Documents' && (
            <div style={{ marginTop: '16px' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '8px' }}>
                        <a href="#" style={{ color: '#3498db', textDecoration: 'underline' }}>
                            Installation Guide (PDF)
                        </a>
                    </li>
                    <li style={{ marginBottom: '8px' }}>
                        <a href="#" style={{ color: '#3498db', textDecoration: 'underline' }}>
                            User Manual (PDF)
                        </a>
                    </li>
                    <li>
                        <a href="#" style={{ color: '#3498db', textDecoration: 'underline' }}>
                            Warranty Information (PDF)
                        </a>
                    </li>
                </ul>
            </div>
        )}
    </div>
);

// Example tabs
const tabItems = [
    { title: 'Description', content: <TabContent title="Description" /> },
    { title: 'Specifications', content: <TabContent title="Specifications" /> },
    { title: 'Reviews', content: <TabContent title="Reviews" /> },
    { title: 'Documents', content: <TabContent title="Documents" /> },
];

// Stories
export const Default = {
    args: {
        tabs: tabItems,
        variant: 'primary',
        vertical: false,
        useAccordionOnMobile: true,
        defaultActiveTab: 0,
    },
};

export const SecondaryVariant = {
    args: {
        tabs: tabItems,
        variant: 'secondary',
        vertical: false,
        useAccordionOnMobile: true,
        defaultActiveTab: 0,
    },
};

export const TertiaryVariant = {
    args: {
        tabs: tabItems,
        variant: 'tertiary',
        vertical: false,
        useAccordionOnMobile: true,
        defaultActiveTab: 0,
    },
};

export const VerticalTabs = {
    args: {
        tabs: tabItems,
        variant: 'primary',
        vertical: true,
        useAccordionOnMobile: true,
        defaultActiveTab: 0,
    },
};

export const AlwaysTabs = {
    args: {
        tabs: tabItems,
        variant: 'primary',
        vertical: false,
        useAccordionOnMobile: false,
        defaultActiveTab: 0,
    },
    parameters: {
        docs: {
            description: {
                story: 'This example shows tabs that do not convert to an accordion on mobile devices.',
            },
        },
    },
};
