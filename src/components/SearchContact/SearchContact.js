import { Input, Label } from "./SearchContact.styled"


export const SearchContact = ({onSearch}) => {
  return (
    <Label htmlFor="">
      Find contacts by name
      <Input
        onChange={(e)=> onSearch(e)}
        type="text" 
      />
    </Label>
  )
}