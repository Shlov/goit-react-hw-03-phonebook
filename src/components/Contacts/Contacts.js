import { ListContacts } from "components/ListContacts/ListContacts"
import { SearchContact } from "components/SearchContact/SearchContact"


export const Contacts = ({onSearch, contacts, onDeleteContact}) => {
  return (
    <>
      <SearchContact onSearch = {onSearch}/>
      <ListContacts contacts = {contacts} onDeleteContact = {onDeleteContact}/>
    </>
  )
}