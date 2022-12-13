import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputForm from './InputForm';

export default {
  title: 'Components/InputForm',
  component: InputForm,
} as ComponentMeta<typeof InputForm>;

const Template: ComponentStory<typeof InputForm> = (args) => <InputForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'This is a text',
  placeholder: 'Write stgh !',
  onSave: (text) => alert(`saved: "${text}"`),
  onCancel: () => alert('Cancel clicked'),
};
