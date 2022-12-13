import React from 'react';
import { colors } from '../../styles/styles';
import { MdOutlineCheck } from 'react-icons/md';

const BoxChecked = () => (
  <div
    style={styles.mainContainer}
  >
    <MdOutlineCheck color={colors.white} fontSize={18} />
  </div>
);

const styles = {
  mainContainer: {
    display: 'flex',
    backgroundColor: colors.green,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3
  },
};

export default BoxChecked;
