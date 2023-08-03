import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'

import {
  DndContext,
  PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { useEffect, useState } from 'react'

function BoardContent({ board }) {

  // mouse move 10px then active event
  // const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })

  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })

  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 500 } })

  // const mySensors = useSensors(pointerSensor)
  const mySensors = useSensors(mouseSensor, touchSensor)

  const [orderedColumns, setOrderedColumns] = useState([])

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handlDragEnd = (event) => {
    console.log( 'handlDragEnd: ', event)
    const { active, over } = event

    // check move overline
    if (!over) return


    if (active.id !== over.id) {
      // get position old
      const oldIndex = orderedColumns.findIndex(c => c._id === active.id)
      // get position new
      const newIndex = orderedColumns.findIndex(c => c._id === over.id)
      // data after move
      const dndOrderedColumn = arrayMove(orderedColumns, oldIndex, newIndex)
      // data this update for API
      // const dndOrderedColumnsIds = dndOrderedColumn.map(c => c._id)
      // console.log( 'dndOrderedColumn: ', dndOrderedColumn)
      // console.log( 'dndOrderedColumnsIds: ', dndOrderedColumnsIds)

      // update after drap drop
      setOrderedColumns(dndOrderedColumn)
    }

  }

  return (
    <DndContext onDragEnd={handlDragEnd} sensors={mySensors}>
      <Box sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        display: 'flex',
        p: '10px 0'
      }}>
        <ListColumns columns={orderedColumns} />

      </Box>
    </DndContext>
  )
}
export default BoardContent
