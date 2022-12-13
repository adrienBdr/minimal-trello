import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {MdAdd, MdOutlineRemoveRedEye} from 'react-icons/md';

import Button from './Button';
import { colors } from '../../styles/styles';
import BoxChecked from '../BoxChecked/BoxChecked';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  label: 'Button',
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Button',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
  size: 'large',
};

export const Icon = Template.bind({});
Icon.args = {
  size: 'medium',
  backgroundColor: colors.white,
  textColor: colors.grey,
  leftIcon: <MdAdd size={20} color={colors.grey} />
};

export const IconWithLabel = Template.bind({});
IconWithLabel.args = {
  size: 'medium',
  backgroundColor: colors.lightGrey,
  textColor: colors.grey,
  label: 'Save',
  leftIcon: <MdOutlineRemoveRedEye size={16} color={colors.grey} style={{ marginRight: 4 }} />,
  rightIcon: <BoxChecked />,
  style: { width: 170, alignItems: 'center', justifyContent: 'space-between' }
};
