import React, { FocusEvent, FormEvent, useState } from 'react';
import Button from '../Button/Button';
import { MdClear } from 'react-icons/md';
import { colors } from '../../styles/styles';

interface InputFormProps {
  value?: string;
  placeholder: string;
  saveButtonLabel?: string;
  onSave: (newValue: string) => void;
  onCancel: () => void;
  verticalResize?: boolean;
  rows?: number;
}

const InputForm = ({
  value,
  placeholder,
  saveButtonLabel = 'Enregistrer',
  onSave,
  onCancel,
  verticalResize = false,
  rows = 2,
}: InputFormProps) => {
  const [text, setText] = useState<string>(value || '');

  const handleTextChange = ({ target }: { target: HTMLTextAreaElement }) => {
    setText(target.value);
  }

  const handleSave = (event: FormEvent<HTMLFormElement> | FocusEvent<HTMLTextAreaElement>) => {
    if (text !== '') {
      onSave(text);
    }
    event.preventDefault();
  }

  const handleCancel = () => {
    setText(value || '');
    onCancel();
  }

  return (
    <form onSubmit={handleSave}>
      <textarea
        value={text}
        onChange={handleTextChange}
        onBlur={handleSave}
        style={styles.textArea(verticalResize)}
        placeholder={placeholder}
        rows={rows}
      />
      <div style={styles.actionButtonsContainer}>
        <Button label={saveButtonLabel} />
        <MdClear onClick={handleCancel} color={colors.mediumGrey} size={28} style={styles.clearButton} />
      </div>
    </form>
  );
};
const styles = {
  actionButtonsContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 4,
  },
  textArea: (verticalResize: boolean) => ({
    resize: verticalResize ? 'vertical' as const : 'both' as const,
    boxShadow: 'rgb(9 30 66 / 13%) 0px 0px 0px 1px inset',
    borderWidth: 0,
    padding: 12,
    borderRadius: 3,
    fontSize: 14,
    width: '100%',
    boxSizing: 'border-box' as const,
  }),
  clearButton: {
    marginLeft: 4,
  }
};

export default InputForm;
