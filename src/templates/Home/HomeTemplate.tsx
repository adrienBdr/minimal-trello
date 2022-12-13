import React from 'react';
import Header from '../../components/Header/Header';
import { colors } from '../../styles/styles';
import {CardWithListInfosType, ListType} from '../../Types/types';
import ListsList from './organisms/ListsList/ListsList';
import Title from './organisms/Title/Title';

type HomeTemplateType = {
  lists: ListType[];
  resetData: () => void;
  addList: (listTitle: string) => void;
  addCard: (listId: string, cardTitle: string) => void;
  deleteList: (listId: string) => void;
  cardClicked: (card: CardWithListInfosType) => void;
};

const HomeTemplate = ({
  lists,
  resetData,
  addList,
  addCard,
  deleteList,
  cardClicked,
}: HomeTemplateType) => (
  <div style={styles.mainContainer}>
    <Header/>
    <Title style={styles.title} resetData={resetData}/>
    <ListsList
      lists={lists}
      addList={addList}
      addCard={addCard}
      deleteList={deleteList}
      cardClicked={cardClicked}
    />
  </div>
);

const styles = {
  mainContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: colors.darkGrey,
  },
  title: {
    marginLeft: 20,
  }
}

export default HomeTemplate;
