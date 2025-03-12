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
    smallButtonText = 'Small',
    largeButtonText = 'Large',
    blockButtonText = 'Block',
}) {
    return (<>
        <div className="mb-sm d-flex flex-row gap-sm">
            <button className="button">{primaryButtonText}</button>
            <button className="button button--primary">{primaryButtonText}</button>
            <button className="button button--secondary">{secondaryButtonText}</button>
            <button className="button button--outline">{outlineButtonText}</button>
        </div>

        <div className="mb-sm d-flex flex-row gap-sm">
            <button className="button button--sm">{smallButtonText}</button>
            <button className="button button--lg">{largeButtonText}</button>
        </div>

        <div className="mb-sm d-flex flex-row gap-sm">
            <button className="button button--primary button--block">{blockButtonText}</button>
        </div>
    </>)
}
