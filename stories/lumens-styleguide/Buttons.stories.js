import React from 'react';
import DemoContainer from '../helpers/Container';


export default {
    title: 'Styleguide/Forms/Buttons',
    component: Buttons,
    // tags: ['autodocs'],
    decorators: [
        (Story, {args}) => {
            return <Story args={{...args}} />
        }
    ],
    args: {
        primaryButtonText: 'Primary',
        secondaryButtonText: 'Secondary',
        outlineButtonText: 'Outline',
        smallButtonText: 'Small',
        largeButtonText: 'Large',
        blockButtonText: 'Block'
    }
}

export const Primary = {
    args: { },
};

function Buttons({
    primaryButtonText = 'Primary',
    secondaryButtonText = 'Secondary',
    outlineButtonText = 'Outline',
}) {
    return (<>
        <div className="mb-sm d-flex flex-row gap-sm">
            <button className="button">Regular Button</button>
            <button className="button button--primary">{primaryButtonText}</button>
            <button className="button button--secondary">{secondaryButtonText}</button>
            <button className="button button--micro">{outlineButtonText}</button>
        </div>
    </>)
}
