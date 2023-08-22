import Box from '@mui/material/Box'
import CardTask from './Card/CardTask'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

function ListCards({ cards }) {
  // function handleCollapse(id) {
  //   setItems((items) =>
  //     setProperty(items, id, 'collapsed', (value) => {
  //       return !value
  //     })
  //   )
  // }
  return (
    <SortableContext items={cards?.map(c => c._id)} strategy={verticalListSortingStrategy}>
      <Box
        // onCollapse={
        //   collapsible && card?.childrens.length
        //     ? () => handleCollapse(card._id)
        //     : undefined
        // }
        sx={{
          p: '0 5px',
          m: '0 5px',
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
        {cards?.map(card => <CardTask key={card._id} card={card} />)}
      </Box>
    </SortableContext>
  )
}

export default ListCards