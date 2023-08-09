import Box from '@mui/material/Box'
import CardTaskHeader from './CardTaskHeader/CardTaskHeader'

function ListCardsHeader({ cards }) {

  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 0fr)',
      gridGap: 5,
      minHeight: '90px',
      justifyContent: 'center',
      alignItems: 'baseline'
    }}>
      {cards?.map(card => <CardTaskHeader key={card._id} card={card} />)}
    </Box>
  )
}

export default ListCardsHeader