import Box from '@mui/material/Box'
import CardsShort from './CardsShort/CardsShort'

function ListCardShort({ boardConver }) {
  console.log('card boardConver: ', boardConver)
  return (
    <Box sx={{
      px: 1,
      p: '5px'
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        p: '10px 0'
      }}>
        <Box sx={{ display: 'flex' }}>Email <Box sx={{
          backgroundColor: 'red',
          color: 'white',
          fontSize: '13px',
          ml: '5px',
          width: '25px',
          height: '25px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>{boardConver?.emailsTotal}</Box></Box>
        <Box sx={{ display: 'flex' }}>wf docs <Box sx={{
          backgroundColor: 'red',
          color: 'white',
          fontSize: '13px',
          ml: '5px',
          width: '25px',
          height: '25px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>{boardConver?.docsTotal}</Box></Box>
        <Box sx={{ display: 'flex' }}>notes <Box sx={{
          backgroundColor: 'yellow',
          color: 'black',
          fontSize: '13px',
          ml: '5px',
          width: '25px',
          height: '25px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>{boardConver?.noteTotal}</Box></Box>
      </Box>
      <Box>
        <CardsShort key={boardConver?._id} columns={boardConver?.columns} />
      </Box>

      {/* test Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odit, fugiat placeat at, iure culpa eligendi sequi laboriosam explicabo dicta corporis cum, perspiciatis ad fuga blanditiis nulla libero voluptas quo. */}
    </Box>
  )
}

export default ListCardShort