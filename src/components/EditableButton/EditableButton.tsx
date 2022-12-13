import React, { CSSProperties, useReducer } from 'react';
import InputForm from '../InputForm/InputForm';
import {MdAdd} from 'react-icons/md';
import {colors} from '../../styles/styles';
import Button from '../Button/Button';

interface EditableButtonProps {
  buttonLabel?: string;
  inputFormPlaceHolder: string;
  onSave: (newValue: string) => void;
  style?: CSSProperties;
  buttonSize?: 'small' | 'medium' | 'large',
  textColor?: string;
}

const EditableButton = ({
  buttonLabel,
  inputFormPlaceHolder,
  onSave,
  style,
  buttonSize,
  textColor = colors.grey,
}: EditableButtonProps) => {
  const [isModifying, toggleModifying] = useReducer((from) => !from, false);

  const handleSave = (text: string) => {
    onSave(text);
    toggleModifying();
  }

  const handleCancel = () => {
    toggleModifying();
  }

  if (isModifying) {
    return (
      <InputForm
        placeholder={inputFormPlaceHolder}
        saveButtonLabel={buttonLabel}
        onSave={handleSave}
        onCancel={handleCancel}
        verticalResize
        rows={3}
      />
    );
  } else {
    return (
      <Button
        label={buttonLabel}
        size={buttonSize}
        backgroundColor={colors.lightGrey}
        textColor={textColor}
        leftIcon={<MdAdd size={20} color={textColor} style={styles.leftButtonContainer}/>}
        style={style}
        onClick={toggleModifying}
      />
    );
  }
};

const styles = {
  leftButtonContainer: {
    marginRight: 4,
  }
}

export default EditableButton;
