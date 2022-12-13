import React, { useReducer } from 'react';
import InputForm from '../InputForm/InputForm';
import Text from '../Text/Text';

interface EditableTextProps {
  value?: string;
  onSave: (newValue: string) => void;
}

const EditableText = ({
  value,
  onSave,
}: EditableTextProps) => {
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
        value={value}
        placeholder="Ajouter une description plus détaillée…"
        onSave={handleSave}
        onCancel={handleCancel}
      />
    );
  } else {
    return (<Text onClick={toggleModifying} text={value} size="small" />);
  }
};

export default EditableText;
