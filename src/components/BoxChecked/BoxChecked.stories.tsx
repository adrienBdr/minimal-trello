import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BoxChecked from './BoxChecked';

export default {
  title: 'Components/BoxChecked',
  component: BoxChecked,
} as ComponentMeta<typeof BoxChecked>;

const Template: ComponentStory<typeof BoxChecked> = () => <BoxChecked />;

export const Normal = Template.bind({});
