import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'

import Column from './ListColumns/Column/Column'
import CardTask from './ListColumns/Column/ListCards/Card/CardTask'

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
import { arrayMove } from '@dnd-kit/sortable'
import { useEffect, useState } from 'react'
import { cloneDeep } from 'lodash'

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

function BoardContent({ board }) {

  // mouse move 10px then active event
  const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })

  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })

  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 500 } })

  // const mySensors = useSensors(pointerSensor)
  const mySensors = useSensors(mouseSensor, touchSensor)

  const [orderedColumns, setOrderedColumns] = useState([])

  // cung 1 thoi diem chi co 1 phan tu dang dc keo (column or card)
  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemTypeData, setActiveDragItemTypeData] = useState(null)
  const [oldColumnWhenDraggingCard, setOldColumnWhenDraggingCard] = useState(null)

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  // tim 1 cai column theo cardId
  const findColumnByCardId = (cardId) => {
    return orderedColumns.find(column => column?.cards?.map(card => card._id)?.includes(cardId))
  }

  // Function chung xu ly viec cap nhat lai state trong truong hop di chuyen card giua cac column khac nhau
  const moveCardBetweenDifferentColumns = (
    overColumn,
    overCardId,
    active,
    over,
    activeColumn,
    activeDraggingCardId,
    activeDraggingCardData
  ) => {
    setOrderedColumns( prevColumns => {
      // tim vi tri noi card sap dc tha
      const overCardIndex = overColumn?.cards?.findIndex(card => card._id === overCardId)

      // logic tinh toan cho "cardIndex moi" tren or duoi cua overCard
      let newCardIdex
      const isBelowOverItem = active.rect.current.translated &&
        active.rect.current.translated.top > over.rect.top + over.rect.height
      const modifier = isBelowOverItem ? 1 : 0
      newCardIdex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1

      // clone cai mang orderedColumns cu ra cai moi de xu ly data roi return lai
      const nextColumns = cloneDeep(prevColumns)
      const nextActiveColumn = nextColumns.find(column => column._id === activeColumn._id)
      const nextOverColumn = nextColumns.find(column => column._id === overColumn._id)

      // nextActiveColumn: column cu
      if (nextActiveColumn) {
        //xoa card o column cu
        nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card._id !== activeDraggingCardId)

        // cap nhap lai mang cardOrderIds cho chuan du lieu
        nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(card => card._id)
      }

      // nextOverColumn: column moi
      if (nextOverColumn) {
        // kiem tra xem card dang keo no co ton tai o overColumn chua, neu co thi xoa no truoc
        nextOverColumn.cards = nextOverColumn.cards.filter(card => card._id !== activeDraggingCardId)

        // phai cap nhat lai chuan du lieu columnId trong card sau khi keo card giua 2 column khac nhau
        const rebuild_activeDraggingCardData = {
          ...activeDraggingCardData,
          columnId: nextActiveColumn._id
        }
        // them card dang keo vao overColumn vao vi tri moi
        nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIdex, 0, rebuild_activeDraggingCardData)
        // cap nhap lai mang cardOrderIds cho chuan du lieu
        nextOverColumn.cardOrderIds = nextOverColumn.cards.map(card => card._id)
      }

      return nextColumns
    })
  }

  const handleDragStart = (event) => {
    // console.log( 'handlDragStart: ', event)
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
    setActiveDragItemTypeData(event?.active?.data?.current)

    // neu keo card thi set value cho old column
    if (event?.active?.data?.current?.columnId) {
      setOldColumnWhenDraggingCard(findColumnByCardId(event?.active?.id))
    }
  }

  // Trigger trong qua trinh keo 1 phan tu
  const handleDragOver = (event) => {
    // khong lam gi neo keo column
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return
    // console.log( 'handleDragOver: ', event)

    // neu keo card thi xu ly
    const { active, over } = event

    if (!active || !over) return

    // activeDraggingCard: la cai card dang dc keo.
    const { id: activeDraggingCardId, data:{ current: activeDraggingCardData } } = active
    // overCard: la cai card dang tuong tac tren or duoi so vs cai card dc keo o tren.
    const { id: overCardId } = over

    // tim 2 column theo cardId.
    const activeColumn = findColumnByCardId(activeDraggingCardId)
    const overColumn = findColumnByCardId(overCardId)

    if (!activeColumn || !overColumn) return

    // keo card sang 2 column khac nhau thi xu ly
    if (activeColumn._id !== overColumn._id) {
      moveCardBetweenDifferentColumns(
        overColumn,
        overCardId,
        active,
        over,
        activeColumn,
        activeDraggingCardId,
        activeDraggingCardData
      )
    }

  }

  const handleDragEnd = (event) => {
    // console.log( 'handlDragEnd: ', event)

    const { active, over } = event

    // check move overline
    if (!active || !over) return

    // xu ly keo tha card
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {

      // activeDraggingCard: la cai card dang dc keo.
      const { id: activeDraggingCardId, data:{ current: activeDraggingCardData } } = active
      // overCard: la cai card dang tuong tac tren or duoi so vs cai card dc keo o tren.
      const { id: overCardId } = over

      // tim 2 column theo cardId.
      const activeColumn = findColumnByCardId(activeDraggingCardId)
      const overColumn = findColumnByCardId(overCardId)

      if (!activeColumn || !overColumn) return

      if (oldColumnWhenDraggingCard._id !== overColumn._id) {
        // hanh dong keo tha card giua 2 column khac nhau
        moveCardBetweenDifferentColumns(
          overColumn,
          overCardId,
          active,
          over,
          activeColumn,
          activeDraggingCardId,
          activeDraggingCardData
        )

      } else {

        // hanh dong keo tha card trong cung 1 column

        // get position old oldColumnWhenDraggingCard
        const oldCardIndex = oldColumnWhenDraggingCard?.cards?.findIndex(c => c._id === activeDragItemId)
        // get position new
        const newCardIndex = overColumn?.cards?.findIndex(c => c._id === overCardId)

        const dndOrderedCards = arrayMove(oldColumnWhenDraggingCard?.cards, oldCardIndex, newCardIndex)

        setOrderedColumns( prevColumns => {
          // clone cai mang orderedColumns cu ra cai moi de xu ly data roi return lai
          const nextColumns = cloneDeep(prevColumns)

          // tim toi column dang tha
          const targetColumn = nextColumns.find(column => column._id === overColumn._id)

          // cap nhat lai 2 gia tri moi laf card and cardOderIds
          targetColumn.cards = dndOrderedCards
          targetColumn.cardOrderIds = dndOrderedCards.map(card => card._id)

          // tra ve gia tri state moi dung vi tri
          return nextColumns
        })
      }

    }

    //  xu ly keo tha column trong 1 cai boardContent
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {

      if (active.id !== over.id) {
        console.log('column drap')
        // get position old
        const oldColumnIndex = orderedColumns.findIndex(c => c._id === active.id)
        // get position new
        const newColumnIndex = orderedColumns.findIndex(c => c._id === over.id)
        // data after move
        const dndOrderedColumn = arrayMove(orderedColumns, oldColumnIndex, newColumnIndex)
        // data this update for API
        // const dndOrderedColumnsIds = dndOrderedColumn.map(c => c._id)
        // console.log( 'dndOrderedColumn: ', dndOrderedColumn)
        // console.log( 'dndOrderedColumnsIds: ', dndOrderedColumnsIds)

        // update after drap drop
        setOrderedColumns(dndOrderedColumn)
      }
    }

    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemTypeData(null)
    setOldColumnWhenDraggingCard(null)
  }

  const customDropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5'
        }
      }
    })
  }

  return (
    <DndContext
      sensors={mySensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <Box sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        display: 'flex',
        p: '10px 0'
      }}>
        <ListColumns columns={orderedColumns} />
        <DragOverlay dropAnimation={customDropAnimation}>
          {!activeDragItemType && null}
          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) && <Column column={activeDragItemTypeData} />}
          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) && <CardTask card={activeDragItemTypeData} />}
        </DragOverlay>

      </Box>
    </DndContext>
  )
}
export default BoardContent
