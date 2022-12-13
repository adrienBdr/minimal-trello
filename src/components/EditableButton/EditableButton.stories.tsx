import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import EditableButton from './EditableButton';

export default {
  title: 'Components/EditableButton',
  component: EditableButton,
} as ComponentMeta<typeof EditableButton>;

const Template: ComponentStory<typeof EditableButton> = (args) => <EditableButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonLabel: 'Ajouter un carte',
  inputFormPlaceHolder: 'Saisissez un titre pour cette carte…',
  onSave: (text) => alert(`saved: "${text}"`)
};
