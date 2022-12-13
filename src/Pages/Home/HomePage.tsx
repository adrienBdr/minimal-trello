import React, { useCallback, useState } from 'react';
import DetailedCard from '../../templates/DetailedCard/DetailedCard';
import HomeTemplate from '../../templates/Home/HomeTemplate';
import { ListType, CardWithListInfosType} from '../../Types/types';

const MOCKED_LISTS: ListType[] = [
  {
    _id: '0',
    title: 'My first list',
    cards: [
      {
        _id: '0',
        title: 'My first card',
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
    title: 'My second list',
    cards: [
      {
        _id: '0',
        title: 'Followed card with description',
        subject: 'Explanation here',
        isFollowed: true,
      },
    ],
  }
];

const HomePage = () => {
  const [lists, setLists] = useState<ListType[]>(MOCKED_LISTS);
  const [usingCard, setUsingCard] = useState<CardWithListInfosType>();

  const resetLists = useCallback(() => {
    setLists(MOCKED_LISTS);
  }, []);

  const addList = (title: string) => {
    const actualLists = [...lists];
    const newList = {
      _id: lists.length.toString(),
      title,
      cards: []
    };
    actualLists.push(newList);
    setLists(actualLists);
  };

  const addCard = (listId: string, title: string) => {
    const actualLists = [...lists];
    const listToAdd = actualLists.find(({ _id }) => _id === listId);

    if (listToAdd) {
      const newCard = {
        _id: listToAdd.cards.length.toString(),
        title,
      };

      listToAdd.cards.push(newCard);
      setLists(actualLists);
    }
  };

  const deleteList = (listId: string) => {
    setLists([...lists].filter(({ _id }) => _id !== listId));
  };

  const cardClicked = (card: CardWithListInfosType) => {
    setUsingCard(card);
  };

  const updateDescriptionOfUsingCard = (description: string) => {
    const actualUsingCard = {...usingCard};

    if (actualUsingCard?.card) {
      actualUsingCard.card.subject = description;
      setUsingCard(actualUsingCard);
    }
  }

  const toggleFollowOfUsingCard = () => {
    const actualUsingCard = {...usingCard};

    if (actualUsingCard?.card) {
      actualUsingCard.card.isFollowed = !actualUsingCard.card.isFollowed;
      setUsingCard(actualUsingCard);
    }
  }

  const onDeleteUsingCard = () => {
    const usingList = [...lists];
    const listContainingCard = usingList.find(({ _id }) => _id === usingCard?.listId);

    if (listContainingCard) {
      listContainingCard.cards = listContainingCard.cards.filter(({ _id }) => _id !== usingCard?.card?._id);
    }
    setLists(usingList);
    onCloseDetailedCard();
  }

  const onCloseDetailedCard = () => {
    setUsingCard(undefined);
  };

  return (
    <>
      <HomeTemplate
        lists={lists}
        resetData={resetLists}
        addList={addList}
        addCard={addCard}
        deleteList={deleteList}
        cardClicked={cardClicked}
      />
      {usingCard && (
        <DetailedCard
          card={usingCard.card}
          listTitle={usingCard.listTitle}
          updateDescription={updateDescriptionOfUsingCard}
          toggleFollow={toggleFollowOfUsingCard}
          onDelete={onDeleteUsingCard}
          onClose={onCloseDetailedCard}
        />
      )}
    </>
  );
};

export default HomePage;
