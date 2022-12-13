import React, { CSSProperties, useMemo, useCallback } from 'react';
import { MdMoreHoriz } from 'react-icons/md';
import { colors } from '../../../../styles/styles';
import { CardType, CardWithListInfosType, ListType } from '../../../../Types/types';
import Button from '../../../../components/Button/Button';
import EditableButton from '../../../../components/EditableButton/EditableButton';
import MinimalCard from '../../../../components/MinimalCard/MinimalCard';
import Text from '../../../../components/Text/Text';

type CardsListType = {
  list: ListType;
  addCard: (listId: string, cardTitle: string) => void;
  deleteList: (listId: string) => void;
  cardClicked: (card: CardWithListInfosType) => void;
  style?: CSSProperties;
};

const CardsList = ({
  list,
  addCard,
  deleteList,
  cardClicked,
  style,
}: CardsListType) => {
  const onCardClicked = useCallback((card: CardType) => {
    cardClicked({
      listId: list._id,
      listTitle: list.title,
      card,
    })
  }, [cardClicked, list._id, list.title])

  const onSave = (cardTitle: string) => {
    addCard(list._id, cardTitle);
  }

  const onDelete = () => {
    deleteList(list._id);
  }

  const cardsMap = useMemo(() => list.cards.map((card, index, cards) => (
    <MinimalCard
      key={card._id}
      style={styles.minimalCards(index === cards.length - 1)}
      onClick={onCardClicked}
      card={card}
    />
  )), [onCardClicked, list.cards]);

  return (
  <div style={{...styles.mainContainer, ...style}}>
    <div style={styles.headerContainer}>
      <Text text={list.title} type='bold' size='small' style={styles.title} />
      <Button
        backgroundColor={colors.lightGrey}
        onClick={onDelete}
        leftIcon={<MdMoreHoriz size={20} color={colors.grey} />}
        style={styles.deleteButton}
      />
    </div>
      <div style={styles.contentContainer}>{cardsMap}</div>
    <div style={styles.footerContainer}>
      <EditableButton
        buttonLabel="Ajouter une autre carte"
        inputFormPlaceHolder="Saisissez un titre pour cette carte…"
        onSave={onSave}
        style={styles.addCardButton}
      />
    </div>
  </div>
)};

const styles = {
  mainContainer: {
    flexBasis: '100%',
    maxWidth: 272,
    backgroundColor: colors.lightGrey,
    borderRadius: 3,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
  },
  title: {
    paddingLeft: 8,
  },
  contentContainer: {
    padding: '0 8px',
  },
  footerContainer: {
    padding: 8,
  },
  deleteButton: {
    padding: '0 8px',
  },
  addCardButton: {
    width: '100%',
  },
  minimalCards: (isLast: boolean = false) => ({
    marginBottom: isLast ? 0 : 8,
  }),
}

export default CardsList;
