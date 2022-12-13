import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import EditableText from './EditableText';

export default {
  title: 'Components/EditableText',
  component: EditableText,
} as ComponentMeta<typeof EditableText>;

const Template: ComponentStory<typeof EditableText> = (args) => <EditableText {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'okokok',
  onSave: (text) => alert(`saved: "${text}"`)
};
