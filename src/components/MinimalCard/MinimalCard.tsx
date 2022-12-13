import React, { useCallback } from 'react';
import { MdOutlineRemoveRedEye, MdSubject } from 'react-icons/md';
import { colors } from '../../styles/styles';
import Text from '../Text/Text';
import {CSSProperties} from 'react';
import { CardType } from '../../Types/types';
import './minimalCard.css';

type MinimalCardType = {
  card: CardType;
  onClick: (card: CardType) => void;
  style?: CSSProperties;
};

const MinimalCard = ({
  card,
  onClick,
  style,
}: MinimalCardType) => {
  const onClickCard = useCallback(() => {
    onClick(card)
  }, [card, onClick])

  return (
    <div className='minimalCard' style={{...styles.mainContainer, ...style}} onClick={onClickCard} >
      <Text size="small" text={card.title} style={styles.titleContainer}/>
      <div>
        {card?.isFollowed &&
          <MdOutlineRemoveRedEye style={styles.icon} size={16} color={colors.mediumGrey}/>
        }
        {card?.subject && card.subject !== '' &&
          <MdSubject style={styles.icon} size={16} color={colors.mediumGrey}/>
        }
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    boxShadow: 'rgb(9 30 66 / 25%) 0px 1px 0px',
    backgroundColor: colors.white,
    borderRadius: 3,
    padding: '0 8px 0 8px',
  },
  titleContainer: {
    height: 32,
  },
  icon: {
    margin: '0 4px 4px',
  },
}

export default MinimalCard;
