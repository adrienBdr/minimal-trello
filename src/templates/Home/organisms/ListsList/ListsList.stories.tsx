import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ListsList from './ListsList';
import { ListType } from '../../../../Types/types';

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
  title: 'Templates/Home/Organisms/ListsList',
  component: ListsList,
} as ComponentMeta<typeof ListsList>;

const Template: ComponentStory<typeof ListsList> = (args) => <ListsList {...args} />;

export const Default = Template.bind({});
Default.args = {
  lists: MOCKED_LISTS,
  addList: (title: string) => alert(`List created with title: "${title}"`),
  addCard: (title: string) => alert(`Card added with title: "${title}"`),
  deleteList: () => alert('delete list clicked'),
  cardClicked: () => alert('card clicked'),
};
