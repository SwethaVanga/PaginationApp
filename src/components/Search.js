import React from 'react'
import {
  InputGroup,
  FormControl, Form, Button
} from 'react-bootstrap'

export const Search = (props) => {
  const { searchFilter, setSearchFilter, handleQueryChange } = props

  return (
    <Form onSubmit={(e) => { e.preventDefault(); handleQueryChange(true) }}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search books..."
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
        />
        <InputGroup.Append>
          <Button type='submit'>Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  )
}

