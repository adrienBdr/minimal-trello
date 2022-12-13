import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MinimalCard from './MinimalCard';
import { colors } from '../../styles/styles';

export default {
  title: 'Components/MinimalCard',
  component: MinimalCard,
} as ComponentMeta<typeof MinimalCard>;

const Template: ComponentStory<typeof MinimalCard> = (args) => <div style={styles.background}><MinimalCard {...args} /></div>;

const styles = {
  background: {
    width: 272,
    height: 272,
    padding: 8,
    backgroundColor: colors.lightGrey,
  }
}

export const Default = Template.bind({});
Default.args = {
  card: {
    _id: '0',
    title: 'Followed card with description',
    subject: 'Explanation here',
    isFollowed: true,
  },
  onClick: () => alert('onChange clicked')
};
