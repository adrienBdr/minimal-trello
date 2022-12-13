import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DetailedCard from './DetailedCard';

const card = {
  _id: '0',
  title: 'My first card',
  subject: 'Lalalaa',
  isFollowed: true,
}

export default {
  title: 'Templates/DetailedCard',
  component: DetailedCard,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof DetailedCard>;

const Template: ComponentStory<typeof DetailedCard> = (args) => <DetailedCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  card: card,
  listTitle: 'My second list',
  updateDescription: (description: string) => alert(`new description: "${description}"`),
  toggleFollow: () => alert('now following / unfollowing'),
  onDelete: () => alert('deleting'),
};
