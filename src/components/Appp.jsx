import { Component } from "react";
import { nanoid } from 'nanoid';



export class App extends Component {
  
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
      ],
    name: '',
    number: '',
    filter: ''
  }

  recordName = (evnt) => {
    this.setState({name: evnt.target.value})
  }
  
  recordNumber = (evnt) => {
    this.setState({number: evnt.target.value})
  }
  
  recordFilter = (evnt) => {
    this.setState({filter: evnt.target.value})
  }
  
  addContact = (e) => {
    e.preventDefault();
    const contact = {id: nanoid(), name: this.state.name, number: this.state.number}
    this.setState(state => state = {contacts: [...state.contacts, contact], name: '', number: ''})
    e.target.reset()
  }

  search = (evnt) => {
    this.recordFilter(evnt)
    const textSearch = evnt.target.value.toLowerCase()
    // const filterContacts = this.state.contacts.filter(({name}) => name.toLowerCase().includes(textSearch))
    // console.log(Boolean(textSearch))
  }

  render () {
    const contacts = this.state.contacts
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <h2>Phonebook</h2> 
        <form action="" onSubmit = {(evnt) => this.addContact(evnt)}>
          <label>
            Name
            <input
            onChange = {(e) => this.recordName(e)}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
          </label>
          <label htmlFor="">
            Number
            <input
              onChange = {(e) => this.recordNumber(e)}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          
          <button type="submit" >
            Add contact
          </button>
        </form>
        <h3>Contact</h3>
        <label htmlFor="">
          Find contacts by name
          <input
            onChange={(e)=> this.search(e)}
            type="text" 
          />
        </label>
        <ul>
          {!this.state.filter ? contacts.map(contact => 
            <li key = {contact.id}>{contact.name}: {contact.number}</li>
          ) : this.state.contacts.filter(({name}) => name.toLowerCase().includes(this.state.filter.toLowerCase())).map(contact => 
            <li key = {contact.id}>{contact.name}: {contact.number}</li>
          )}
        </ul>
      </div>
    );
  }
}
