import Box from '@mui/material/Box'
import ListTask from './ListTask/ListTask'

function BoardTaskContent({ boards }) {

  return (
    <Box sx={{
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#fff'),
      width: '100%',
      height: (theme) => theme.trello.boardContentHeight,
      // display: 'flex',
      p: '10px 0'
    }}>
      <ListTask tasks={boards} />
    </Box>
  )
}
export default BoardTaskContent
