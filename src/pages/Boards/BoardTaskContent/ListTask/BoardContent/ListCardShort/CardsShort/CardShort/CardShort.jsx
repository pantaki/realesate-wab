import Box from '@mui/material/Box'
import CardColorShort from './CardColorShort/CardColorShort'

function CardShort({ column }) {
  console.log('CardShort column: ', column)
  return (
    <Box sx={{
      // p: '10px 0',
      backgroundColor: '#eee'
      // display: 'grid',
      // gridTemplateColumns: 'repeat(3, 1fr)',
      // gridGap: 1
    }}>
      <Box sx={{
        fontSize: '13px',
        color: 'black',
        pt: '10px'
        // color: (theme) => (theme.palette.mode === 'dark' ? 'black' : '#000')
      }}>
        {column.title}
      </Box>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 0.1fr)',
        gridGap: 1,
        p: '10px',
        justifyContent: 'center'
      }}>
        {column?.cards?.map(cards => (<CardColorShort key={cards._id} cardColor={cards} />))}
      </Box>
    </Box>
  )
}

export default CardShort