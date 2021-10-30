import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const AddNote = ({handleChange, handleSubmit,value}) => (
  <Form onSubmit={handleSubmit}>
    <Form.Field required>
      <label>Add New Note</label>
      <input onChange={handleChange} value={value} placeholder='New electron js video..' required />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default AddNote