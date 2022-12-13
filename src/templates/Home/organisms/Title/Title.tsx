import React, { CSSProperties } from 'react';
import Button from '../../../../components/Button/Button';
import Text from '../../../../components/Text/Text';
import { colors } from '../../../../styles/styles';

type TitleType = {
  resetData: () => void;
  style?: CSSProperties,
};

const Title = ({
  resetData,
  style,
}: TitleType) => (
  <div style={{...styles.mainContainer, ...style}}>
    <Text text="Tableau principal" color={colors.white} type="bold" style={styles.title} />
    <Button label="Initialiser le jeu de données" style={styles.button} onClick={resetData} />
  </div>
);

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'center',
    padding: '8px 0',
  },
  title: {
    fontWeight: 700,
  },
  button: {
    marginLeft: 20,
  }
}

export default Title;
