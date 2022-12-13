import React from 'react';
import { TRELLO } from '../../assets/images';
import { colors } from '../../styles/styles';

const Header = () => (
  <div style={styles.mainContainer}>
    <img alt="logo" src={TRELLO} style={styles.logo} />
  </div>
);

const styles = {
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 40,
    position: 'relative' as const,
    top: 0,
    backgroundColor: colors.deepBlack,
  },
  logo: {
    height: 30,
    width: 80,
  }
};

export default Header;
