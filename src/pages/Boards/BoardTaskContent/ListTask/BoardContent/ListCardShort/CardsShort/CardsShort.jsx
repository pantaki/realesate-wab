import Box from '@mui/material/Box'
import CardShort from './CardShort/CardShort'

function CardsShort({ columns }) {
  console.log('card short columns: ', columns[0].title)
  return (
    // <Box sx={{
    //   display: 'flex',
    //   justifyContent: 'space-around'
    // }}>

    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: 4
    }}>
      {columns?.map(column => (<CardShort key={column?._id} column={column} />))}
    </Box>
    // </Box>

  )
}

export default CardsShort