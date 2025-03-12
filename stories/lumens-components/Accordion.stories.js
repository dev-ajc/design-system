import React from 'react';
import Accordion from '../../src/components/Accordion';
import Spacer from '../helpers/Spacer'


// Sample content for accordion
const accordionContents = [
    {
        title: 'About Our Lighting Collection',
        content: 'Lumens offers a premium selection of modern lighting fixtures for every space. From chandeliers to floor lamps, our curated collection combines style and functionality to illuminate your home beautifully.'
    },
    {
        title: 'Shipping & Delivery',
        content: 'We offer free standard shipping on orders over $75. Most in-stock items ship within 24-48 hours. Large items like chandeliers and pendant lights may require special shipping arrangements. Expedited shipping options are available at checkout.'
    },
    {
        title: 'LED vs. Traditional Lighting',
        content: 'LED lighting uses up to 75% less energy than traditional incandescent bulbs and lasts up to 25 times longer. While the initial cost is higher, LED fixtures provide significant energy savings over time and require fewer replacements.'
    },
    {
        title: 'Lighting Installation Tips',
        content: 'For ceiling fixtures, always turn off power at the circuit breaker before installation. Pendant lights should hang 30-36 inches above countertops and 60-66 inches from the floor over dining tables. We recommend professional installation for complex lighting systems.'
    },
    {
        title: 'Returns & Warranty',
        content: 'Lumens offers a 30-day return policy on most items. Products must be in original condition with all packaging materials. Most of our lighting fixtures come with a manufacturer warranty ranging from 1-5 years covering defects in materials and workmanship.'
    },
    {
        title: 'Lighting Design Consultation',
        content: 'Need help selecting the perfect lighting for your space? Our certified lighting consultants offer free virtual consultations to help you choose fixtures that complement your décor and provide optimal illumination for your specific needs.'
    }
];

export default {
    title: 'ReactJS Components/Accordion',
    component: Accordion,
    tags: ['autodocs'],
    args: {
        title: 'About Our Lighting Collection',
        content: 'Lumens offers a premium selection of modern lighting fixtures for every space. From chandeliers to floor lamps, our curated collection combines style and functionality to illuminate your home beautifully.',
    },
};

const Template = (args) => (<>
    <Accordion {...args} />
</>);

export const Default = Template.bind({});
Default.args = { };

export const WithHTMLContent = () => (
    <>
        <Accordion title="About Our Lighting Collection">
            <div className="grid grid--gap-sm">
                <Spacer className="grid__item grid__item--md-3">Lorem</Spacer>
                <Spacer className="grid__item grid__item--md-9">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </Spacer>
            </div>
        </Accordion>
    </>
);

export const MultipleEntries = () => (
    <>
        {accordionContents.map((content, index) => (
            <Accordion key={index} {...content} />
        ))}
    </>
);