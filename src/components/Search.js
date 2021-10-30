import React from 'react'
import {Form, Input } from 'semantic-ui-react'

const SearchResult = ({handleSearchRes, searchChange,value}) => (
  <Form onClick={handleSearchRes} >
    <Form.Field required>
      <label>Type the note or a keyword</label>
      <Input 
    //   onChange={searchChange} value={value}
      onChange={(e) => searchChange(e.target.value)}
      icon='search' placeholder='Search...'/>
    </Form.Field>
    {/* <Button type='submit'>Submit</Button> */}
  </Form>
)

export default SearchResult