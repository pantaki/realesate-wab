import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import Card  from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import {
  DndContext,
  PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
  closestCorners
} from '@dnd-kit/core'

function ListColumns({ board, columns, createCard }) {
// https://docs.dndkit.com/presets/sortable/sortable-context
// items: const [items] = useState([1, 2, 3]);

  return (
    <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
      <Box sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': { m: 2 }
      }}>
        {columns?.map((column, index) => (<Column key={column._id} board={board} column={column} columnIndex={index} createCard={createCard} />))}
        {/* Box Add new column */}
        {/* <Box sx={{
          minWidth: '200px',
          maxHeight: '200px',
          mx: 2,
          borderRadius: '6px',
          height: 'fit-content',
          bgcolor: '#ffffff3d'
        }}>
          <Button
            startIcon={<NoteAddIcon />}
            sx={{
              color: 'white',
              width: '100%',
              justifyContent: 'flex-start',
              pl: 2.5,
              py: 1.1
            }}
          >
            Add new column
          </Button>
        </Box> */}
      </Box>
    </SortableContext>
  )
}

export default ListColumns