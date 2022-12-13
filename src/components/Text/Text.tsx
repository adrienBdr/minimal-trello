import React, { CSSProperties, DispatchWithoutAction } from 'react';
import { colors } from '../../styles/styles';

interface TextProps {
  text?: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'bold' | 'normal' | 'underlined';
  align?: CanvasTextAlign;
  color?: string;
  onClick?: DispatchWithoutAction;
  style?: CSSProperties;
}

const Text = ({
  text,
  size = 'medium',
  type = 'normal',
  align = 'left',
  color,
  onClick,
  style,
}: TextProps) => (
  <div
    style={{
      ...styles.mainContainer(color, align),
      ...styles[size],
      ...styles[type],
      ...style,
    }}
    onClick={onClick}
  >
      {text}
  </div>
);

const styles = {
  mainContainer: (color: string = colors.black, textAlign: CanvasTextAlign) => ({
    display: 'flex',
    color,
    textAlign,
    alignItems: 'center',
  }),
  small: {
    fontSize: 14,
  },
  medium: {
    fontSize: 18,
  },
  large: {
    fontSize: 20,
  },
  bold: {
    fontWeight: 600,
  },
  normal: {
    fontWeight: 400
  },
  underlined: {
    textDecoration: 'underline',
  }
};

export default Text;
