import { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import CardChildrens from './CardChildrens/CardChildrens'
import { mapOrder } from '~/utils/sorts'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import Modal from '@mui/material/Modal'

function CardTask({ card }) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false)
  }

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: card._id,
    data: { ...card }
  })

  const dndKitCardStyle = {
    // touchActive: 'none',
    // change transform to Translate
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
    border: isDragging ? '1px solid #2ecc71' : undefined
  }

  const shouldShowCardActions = () => {
    return (!!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachments?.length) && card.status === 'task_note'
  }

  const orderedChildrens = mapOrder(card?.childrens, card?.cardChildrenOrderIds, '_id')

  const TaskColor = (theme) => {
    if (card.status === 'task_done') return theme.taskColor.task_done
    if (card.status === 'task_note') return theme.taskColor.task_note
    if (card.status === 'task_waiting') return theme.taskColor.task_waiting
    if (card.status === 'task_grey') return theme.taskColor.task_grey
  }
  return (
    <Box>
      <Card
        ref={setNodeRef} style={dndKitCardStyle} {...attributes} {...listeners}
        sx={{
          cursor: 'pointer',
          boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
          overflow: 'unset',
          maxWidth: '300px'
        }}>
        <Box sx={{
          display: 'flex',
          backgroundColor: TaskColor,
          // width: '15px',
          height: '3px',
          px: 1
        }} ></Box>
        {/* {card?.cover && <CardMedia sx={{ height: 140 }} image={card?.cover} />} */}

        <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
          <Typography>{card?.title}</Typography>
        </CardContent>
        {shouldShowCardActions() &&
          <CardActions sx={{ p: '0 4px 8px 4px' }}>
            {!!card?.memberIds?.length &&
              <Button size="small" startIcon={<GroupIcon />}>{card?.memberIds?.length}</Button>
            }
            {!!card?.comments?.length &&
              <Button size="small" startIcon={<CommentIcon />} onClick={handleOpen}>{card?.comments?.length}</Button>
            }
            {!!card?.attachments?.length &&
              <Button size="small" startIcon={<AttachmentIcon />}>{card?.attachments?.length}</Button>
            }
          </CardActions>
        }
        <Box>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <Box sx={{
              width: 200,
              m: '30px auto',
              backgroundColor: '#ababab',
              p: '20px',
              borderRadius: '10px'
            }}>
              <h2 id="child-modal-title">User1:</h2>
              <p id="child-modal-description">
                {card?.comments}
              </p>
              <Button onClick={handleClose}>Close</Button>
            </Box>
          </Modal>
        </Box>
        
      </Card>
      <Box sx={{
        pt: '10px'
      }}>
        <CardChildrens ChildrentCards={orderedChildrens} />
      </Box>
    </Box>

  )
}

export default CardTask