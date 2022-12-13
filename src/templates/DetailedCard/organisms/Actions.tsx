import React from 'react';
import {MdOutlineRemoveRedEye, MdRemove} from 'react-icons/md';
import {colors} from '../../../styles/styles';
import Button from '../../../components/Button/Button';
import Text from '../../../components/Text/Text';
import BoxChecked from '../../../components/BoxChecked/BoxChecked';
import {CardType} from '../../../Types/types';

interface ActionsProps {
  card?: CardType;
  toggleFollow: () => void;
  onDelete: () => void;
}

const Actions = ({
  card,
  toggleFollow,
  onDelete,
}: ActionsProps) => (
  <div style={styles.mainContainer}>
    <Text text="Actions" type="bold" style={styles.subtitle} />
    <Button
      size="medium"
      backgroundColor={colors.lightGrey}
      textColor={colors.grey}
      label="Suivre"
      leftIcon={<MdOutlineRemoveRedEye size={16} color={colors.grey} style={styles.leftButtonIcon} />}
      rightIcon={card?.isFollowed ? <BoxChecked /> : undefined}
      style={styles.button}
      onClick={toggleFollow}
    />
    <Button
      size="medium"
      backgroundColor={colors.lightGrey}
      textColor={colors.grey}
      label="Supprimer"
      leftIcon={<MdRemove size={16} color={colors.grey} style={styles.leftButtonIcon} />}
      style={{...styles.button, ...styles.lastButton}}
      onClick={onDelete}
    />
  </div>
);

const styles = {
  mainContainer: {
    maxWidth: 190,
    paddingLeft: 20,
  },
  subtitle: {
    height: 32,
    marginBottom: 5,
  },
  button: {
    width: 170,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftButtonIcon: {
    marginRight: 4,
  },
  lastButton: {
    marginTop: 4
  }
};

export default Actions;
