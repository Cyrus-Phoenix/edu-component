import React from 'react';
import Logo from '../components/molecules/Logo';

export default {
  title: 'Components/Molecules/Logo',
  component: Logo,
  argTypes: {
    text: { control: 'text' },
    size: {
      control: 'number',
      defaultValue: 100,
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
    textPosition: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom', 'noText']
    },
    className: { control: 'text' },
  },
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'WaCoCo',
  size: 100,
  color: '#000',
  fontFamily: 'Arial, sans-serif',
  verticalAlign: 'center',
  horizontalAlign: 'flex-start',
  textOrientation: 'horizontal',
  textPosition: 'right',
};

export const TextLeft = Template.bind({});
TextLeft.args = {
  text: 'WaCoCo',
  size: 100,
  color: '#000',
  fontFamily: 'Arial, sans-serif',
  verticalAlign: 'center',
  horizontalAlign: 'flex-start',
  textOrientation: 'horizontal',
  textPosition: 'left',
};

export const TextRight = Template.bind({});
TextRight.args = {
  text: 'WaCoCo',
  size: 100,
  color: '#000',
  fontFamily: 'Arial, sans-serif',
  verticalAlign: 'center',
  horizontalAlign: 'flex-start',
  textOrientation: 'horizontal',
  textPosition: 'right',
};

export const TextTop = Template.bind({});
TextTop.args = {
  text: 'WaCoCo',
  size: 100,
  color: '#000',
  fontFamily: 'Arial, sans-serif',
  verticalAlign: 'center',
  horizontalAlign: 'center',
  textOrientation: 'horizontal',
  textPosition: 'top',
};

export const TextBottom = Template.bind({});
TextBottom.args = {
  text: 'WaCoCo',
  size: 100,
  color: '#000',
  fontFamily: 'Arial, sans-serif',
  verticalAlign: 'center',
  horizontalAlign: 'center',
  textOrientation: 'horizontal',
  textPosition: 'bottom',
};

export const NoText = Template.bind({});
NoText.args = {
  text: '',
  size: 100,
  color: '#000',
  fontFamily: 'Arial, sans-serif',
  verticalAlign: 'center',
  horizontalAlign: 'flex-start',
  textOrientation: 'horizontal',
  textPosition: 'noText',
};
