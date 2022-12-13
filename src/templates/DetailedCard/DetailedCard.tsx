import React from 'react';
import { MdClear } from 'react-icons/md';
import {colors} from '../../styles/styles';
import { CardType } from '../../Types/types';
import Button from '../../components/Button/Button';
import Title from './organisms/Title';
import Description from './organisms/Description';
import Actions from './organisms/Actions';

interface DetailedCardProps {
  card?: CardType;
  listTitle?: string;
  updateDescription: (newValue: string) => void;
  toggleFollow: () => void;
  onDelete: () => void;
  onClose: () => void
}

const DetailedCard = ({
  card,
  listTitle,
  updateDescription,
  toggleFollow,
  onDelete,
  onClose,
}: DetailedCardProps) => {
  const blockBubbling = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  }

  return (
    <div>
      <div style={styles.mainContainer} />
      <div style={styles.cardWrapper} onClick={onClose}>
        <div style={styles.cardContainer} onClick={blockBubbling}>
          <Button
            leftIcon={<MdClear onClick={onClose} color={colors.mediumGrey} size={25} />}
            style={styles.closeIcon} backgroundColor={colors.white}
          />
          <Title {...{card, listTitle}} />
          <div style={styles.contentContainer}>
            <Description {...{card, updateDescription}} />
            <Actions {...{card, toggleFollow, onDelete}} />
          </div>
        </div>
      </div>
    </div>
)};

const styles = {
  mainContainer: {
    backgroundColor: colors.completeBlack,
    height: '100%',
    position: 'fixed' as const,
    opacity: '0.64',
    overflow: 'hidden scroll',
    top: '0px',
    left: '0px',
    width: '100%',
    zIndex: '2',
  },
  cardWrapper: {
    overflow: 'hidden scroll',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed' as const,
    top: '0px',
    left: '0px',
    width: '100%',
    zIndex: '3'
  },
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: '3px',
    display: 'inline-block',
    position: 'relative' as const,
    overflow: 'hidden',
    maxWidth: '768px',
    width: '100%',
    padding: '12px 24px',
    zIndex: 4,
  },
  closeIcon: {
    position: 'absolute' as const,
    top: 0,
    right: 0,
    color: colors.grey,
    margin: 4,
    padding: 4,
    borderRadius: 50,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    display: 'flex',
    marginBottom: 20,
    flexDirection: 'row' as const,
  }
}

export default DetailedCard;
