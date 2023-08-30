import Box from '@mui/material/Box'
import Children from './Children/Children'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

function CardChildrens({ ChildrentCards }) {
  return (
    // <SortableContext items={ChildrentCards?.map(c => c._id)} strategy={verticalListSortingStrategy}>
      <Box sx={{
        pl: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: (theme) => `calc(
          ${theme.trello.boardContentHeight} - 
          ${theme.spacing(5)} - 
          ${theme.trello.columnHeaderHeight} - 
          ${theme.trello.columnFooterHeight}
          )`,
        '&::-webkit-scrollbar-thumb' : { backgroundColor: '#ced0da' },
        '&::-webkit-scrollbar-thumb:hover' : { backgroundColor: '#bfc2cf' }
      }}>
        {ChildrentCards?.map(ChildrentCard => <Children key={ChildrentCard._id} ChildrentCard={ChildrentCard} />)}
      </Box>
    // </SortableContext>
  )
}

export default CardChildrens