import { Button, Item, List } from "./ListContacts.styled"


export const ListContacts = ({contacts, onDeleteContact}) => {
  return (
    <List>
      { contacts.map(contact => 
        <Item key = {contact.id}>{contact.name}: {contact.number} 
        <Button onClick = {() => onDeleteContact(contact.id)}>Delete</Button>
        </Item>
      )}
    </List>
  )
}
