import React from 'react';
import LogoImage from '../components/atoms/LogoImage';

export default {
    title: 'Components/Atoms/LogoImage',
    component: LogoImage,
    argTypes: {
        size: {
            control: 'number',
            defaultValue: 100,
        },
        color: { control: 'color' },
        className: { control: 'text' },
    },
};

const Template = (args) => <LogoImage {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 100,
    color: '#000',
};

export const Small = Template.bind({});
Small.args = {
    size: 50,
    color: '#000',
};

export const Medium = Template.bind({});
Medium.args = {
    size: 100,
    color: '#000',
};

export const Large = Template.bind({});
Large.args = {
    size: 150,
    color: '#000',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
    size: 100,
    color: '#FF5733',
};
