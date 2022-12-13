import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardsList from './CardsList';
import { ListType } from '../../../../Types/types';

const MOCKED_LIST: ListType = {
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
      title: 'My third card',
      subject: 'Explanation here',
      isFollowed: true,
    },
  ],
}

export default {
  title: 'Templates/Home/Organisms/CardsList',
  component: CardsList,
} as ComponentMeta<typeof CardsList>;

const Template: ComponentStory<typeof CardsList> = (args) => <CardsList {...args} />;

export const Default = Template.bind({});
Default.args = {
  list: MOCKED_LIST,
  addCard: (title) => alert(`Card added with title: "${title}"`),
  deleteList: () => alert('delete list clicked'),
  cardClicked: () => alert('card clicked'),
};
