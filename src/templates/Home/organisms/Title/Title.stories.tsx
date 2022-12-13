import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Title from './Title';
import { colors } from '../../../../styles/styles';

export default {
  title: 'Templates/Home/Organisms/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <div style={styles.background}><Title {...args} /></div>;

const styles = {
  background: {
    width: 572,
    height: 172,
    padding: 8,
    backgroundColor: colors.darkGrey,
  }
}

export const Default = Template.bind({});
Default.args = {
  resetData: () => alert('resetData clicked')
};
