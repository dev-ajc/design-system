import React from 'react';
import Button from '../../src/components/Button';


export default {
    title: 'ReactJS Components/Button',
    tags: ['autodocs'],
    component: Button,
    args: {
        onClick: () => {
            alert('Button clicked');
        },
    },
    argsType: {
        variant: {
            options: ['primary', 'secondary', 'outline'],
            control: { type: 'select' },
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' },
        },
        fullWidth: {
            control: { type: 'boolean' },
        },
    },
};

const Template = (args) => <Button {...args}>{args.children}</Button>;

export const Default = Template.bind({});
Default.args = {
    children: 'Button',
};

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary Button',
    variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Secondary Button',
    variant: 'secondary',
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Outline Button',
    variant: 'outline',
};

export const Small = Template.bind({});
Small.args = {
    children: 'Small Button',
    size: 'small',
};

export const Large = Template.bind({});
Large.args = {
    children: 'Large Button',
    size: 'large',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
    children: 'Full Width Button',
    size: 'large',
    fullWidth: true,
};