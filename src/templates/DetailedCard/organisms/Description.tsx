import React from 'react';
import EditableText from '../../../components/EditableText/EditableText';
import Text from '../../../components/Text/Text';
import {CardType} from '../../../Types/types';

interface DescriptionProps {
  card?: CardType;
  updateDescription: (newValue: string) => void;
}

const Description = ({
  card,
  updateDescription,
}: DescriptionProps) => (
  <div style={{
    flexGrow: 1,
  }}>
    <Text text="Description" type="bold" style={styles.subtitle} />
    <EditableText
      value={card?.subject || ''}
      onSave={updateDescription}
    />
  </div>
)

const styles = {
  subtitle: {
    height: 32,
    marginBottom: 5,
  },
}

export default Description;
