import React from 'react';
import LogoTitle from '../components/atoms/LogoTitle';

export default {
  title: 'Components/Atoms/LogoTitle',
  component: LogoTitle,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    color: { control: 'color' },
    fontFamily: { control: 'text' },
    verticalAlign: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'stretch']
    },
    horizontalAlign: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around']
    },
    textOrientation: {
      control: 'select',
      options: ['horizontal', 'vertical']
    },
    className: { control: 'text' },
  },
};

const Template = (args) => <LogoTitle {...args}>{args.children}</LogoTitle>;

export const Default = Template.bind({});
Default.args = {
  children: 'WaCoCo',
  size: 'medium', // Default size
  color: '#333', // Default color
  fontFamily: 'Arial, sans-serif', // Default font family
  verticalAlign: 'center', // Default vertical alignment
  horizontalAlign: 'flex-start', // Default horizontal alignment
  textOrientation: 'horizontal' // Default text orientation
};

export const Small = Template.bind({});
Small.args = {
  children: 'WaCoCo',
  size: 'small',
  color: '#333', // Default color
  fontFamily: 'Arial, sans-serif', // Default font family
  verticalAlign: 'center',
  horizontalAlign: 'flex-start',
  textOrientation: 'horizontal'
};

export const Medium = Template.bind({});
Medium.args = {
  children: 'WaCoCo',
  size: 'medium',
  color: '#333', // Default color
  fontFamily: 'Arial, sans-serif',
  verticalAlign: 'center',
  horizontalAlign: 'flex-start',
  textOrientation: 'horizontal'
};

export const Large = Template.bind({});
Large.args = {
  children: 'WaCoCo',
  size: 'large',
  color: '#333', // Default color
  fontFamily: 'Arial, sans-serif',
  verticalAlign: 'center',
  horizontalAlign: 'flex-start',
  textOrientation: 'horizontal'
};

export const VerticalText = Template.bind({});
VerticalText.args = {
  children: 'WaCoCo',
  size: 'medium', // Default size
  color: '#333', // Default color
  fontFamily: 'Arial, sans-serif', // Default font family
  verticalAlign: 'center', // Default vertical alignment
  horizontalAlign: 'flex-start', // Default horizontal alignment
  textOrientation: 'vertical' // Vertical text orientation
};
