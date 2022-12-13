import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Text from './Text';

export default {
  title: 'Components/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Small = Template.bind({});
Small.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  size: 'large',
};

export const Bold = Template.bind({});
Bold.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  type: 'bold',
};

export const Underlined = Template.bind({});
Underlined.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  type: 'underlined',
};

export const AlignedCenter = Template.bind({});
AlignedCenter.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  align: 'center',
};
