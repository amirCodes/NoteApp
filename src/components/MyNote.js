import { Card, Image, Button } from 'semantic-ui-react'
import avatar from '../assets/logo.svg'
import 'semantic-ui-css/semantic.min.css'
const MyNote = ({ note, myNote, toggleImportance, deleteNote }) => {
  const label = note.important ? 'make not important' : 'make important'
  // const noteStyle = {
  //   color: 'black',
  //   fontSize: '14px',
  //   margin: '2px'
  // };
  // console.log(myNote)
  return (
    <Card.Group itemsPerRow={1}>
      <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src={avatar}
          />
          <Card.Header>Title Here</Card.Header>
          <Card.Meta>Sub title here</Card.Meta>
          <Card.Description>
            {note.content}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'
              onClick={toggleImportance}
              className='btn btn-primary'
              data-bs-toggle='button'
              autoComplete='off'
              style={{ marginRight: '3px' }}

            >
              {label}
            </Button> &nbsp;&#160;&#160;&#160;
            <Button basic color='red'
              onClick={deleteNote}
              className='btn btn-primary'
              style={{ marginLeft: '3px' }}
            >
              Delete note
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  )
}

export default MyNote
