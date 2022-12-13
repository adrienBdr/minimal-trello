import React from 'react';
import {MdOutlineRemoveRedEye} from 'react-icons/md';
import {colors} from '../../../styles/styles';
import Text from '../../../components/Text/Text';
import {CardType} from '../../../Types/types';

interface TitleProps {
  card?: CardType;
  listTitle?: string;
}

const Title = ({
  card,
  listTitle,
}: TitleProps) => (
  <div style={styles.mainContainer}>
    <Text text={card?.title} size="large" type="bold" style={styles.title} />
    <div style={styles.subtitleContainer}>
      <Text text="Dans la liste " size="small" />
      <Text text={listTitle} size="small" type="underlined" style={styles.leftFour} />
      {card?.isFollowed &&
        <MdOutlineRemoveRedEye style={styles.leftFour} size={16} color={colors.mediumGrey}/>
      }
    </div>
  </div>
);

const styles = {
  mainContainer: {
    marginBottom: 20,
  },
  title: {
    height: 33,
  },
  subtitleContainer: {
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'center',
  },
  leftFour: {
    marginLeft: 4,
  },
};

export default Title;
