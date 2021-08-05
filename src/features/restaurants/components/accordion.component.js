import React, {useState} from 'react';
import {List} from 'react-native-paper';

export const Accordion = ({title, icon, listItems}) => {
  const [expanded, setExpanded] = useState(false);
  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section>
      <List.Accordion
        title={title}
        left={props => <List.Icon {...props} icon={icon} />}>
        {listItems.map(item => {
          return <List.Item title={item.title} key={item.title} />;
        })}
      </List.Accordion>
    </List.Section>
  );
};
