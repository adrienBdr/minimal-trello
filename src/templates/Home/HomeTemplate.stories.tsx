import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HomeTemplate from './HomeTemplate';
import { ListType } from '../../Types/types';

const MOCKED_LISTS: ListType[] = [
  {
    _id: '0',
    title: 'My first list',
    cards: [
      {
        _id: '0',
        title: 'My first card',
        isFollowed: true,
      },
      {
        _id: '1',
        title: 'My second card',
      },
      {
        _id: '2',
        title: 'Followed card',
        isFollowed: true,
      },
    ],
  },
  {
    _id: '1',
    title: 'My Second list',
    cards: [
      {
        _id: '0',
        title: 'Followed card with description',
        subject: 'Explanation here',
        isFollowed: true,
      },
    ],
  }
]

export default {
  title: 'Templates/Home/HomeTemplate',
  component: HomeTemplate,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof HomeTemplate>;

const Template: ComponentStory<typeof HomeTemplate> = (args) => <HomeTemplate {...args} />;

export const Default = Template.bind({});
Default.args = {
  lists: MOCKED_LISTS,
  resetData: () => alert('called resetData'),
  addList: (title: string) => alert(`List created with title: "${title}"`),
  addCard: (title: string) => alert(`Card added with title: "${title}"`),
  deleteList: () => alert('delete list clicked'),
  cardClicked: () => alert('card clicked'),
};
