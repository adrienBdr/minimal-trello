import React, { CSSProperties } from 'react';
import { colors } from '../../styles/styles';
import Text from '../Text/Text';
import './button.css';

interface ButtonProps {
  backgroundColor?: string;
  textColor?: string;
  label?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  style?: CSSProperties;
}

const Button = ({
  backgroundColor,
  textColor = colors.white,
  label,
  leftIcon,
  rightIcon,
  size= 'medium',
  onClick,
  style,
}: ButtonProps) => (
  <button
    className='button'
    onClick={onClick}
    style={{ ...styles.mainContainer(backgroundColor), ...styles[size], ...style}}
  >
      <div style={styles.leftIconLabelContainer}>
        {leftIcon}
        {label && (
          <Text text={label} size='small' color={textColor} style={styles.labelStyle} />
        )}
      </div>
      {rightIcon}
  </button>
);

const styles = {
  mainContainer: (backgroundColor: string = colors.green) => ({
    display: 'flex',
    backgroundColor,
    color: 'white',
    borderWidth: 0,
    borderRadius: 3,
    padding: '1px 4px 1px 12px',
    alignItems: 'center',
  }),
  small: {
    height: 30
  },
  medium: {
    height: 32
  },
  large: {
    height: 40
  },
  leftIconLabelContainer: {
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'center',
  },
  labelStyle: {
    paddingRight: 8,
  }
};

export default Button;
