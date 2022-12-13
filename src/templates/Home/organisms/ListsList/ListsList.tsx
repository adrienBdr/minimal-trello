import React, { useMemo } from 'react';
import { CardWithListInfosType, ListType } from '../../../../Types/types';
import CardsList from '../CardsList/CardsList';
import EditableButton from '../../../../components/EditableButton/EditableButton';
import { colors } from '../../../../styles/styles';

type ListsListType = {
  lists: ListType[];
  addList: (listTitle: string) => void;
  addCard: (listId: string, cardTitle: string) => void;
  deleteList: (listId: string) => void;
  cardClicked: (card: CardWithListInfosType) => void;
};

const ListsList = ({
  lists,
  addList,
  addCard,
  deleteList,
  cardClicked,
}: ListsListType) => {
  const ListsMap = useMemo(() => lists.map((list) => (
    <CardsList
      key={list._id}
      list={list}
      addCard={addCard}
      cardClicked={cardClicked}
      deleteList={deleteList}
      style={styles.listsLists}
    />
  )), [addCard, cardClicked, deleteList, lists])

  return (
    <div style={styles.mainContainer}>
      {ListsMap}
      <div style={styles.buttonContainer}>
        <EditableButton
          buttonLabel="Ajouter une autre liste"
          inputFormPlaceHolder="Saisissez le titre de la liste…"
          onSave={addList}
          style={styles.addListButton}
          buttonSize="large"
          textColor={colors.white}
        />
      </div>
    </div>
  )
};

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'flex-start',
    borderRadius: 3,
  },
  buttonContainer: {
    flexBasis: '100%',
    marginLeft: 8,
    maxWidth: 272,
  },
  deleteButton: {
    padding: '0 6px',
  },
  addListButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.24)',
    width: '100%',
  },
  listsLists: {
    marginLeft: 8,
  },
}

export default ListsList;
