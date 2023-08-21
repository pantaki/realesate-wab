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
import { mapOrder } from '~/utils/sorts'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

function Children({ ChildrentCard }) {

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: ChildrentCard._id,
    data: { ...ChildrentCard }
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
    return !!ChildrentCard?.memberIds?.length || !!ChildrentCard?.comments?.length || !!ChildrentCard?.attachments?.length
  }

  const TaskColor = (theme) => {
    if (ChildrentCard.status === 'task_done') return theme.taskColor.task_done
    if (ChildrentCard.status === 'task_note') return theme.taskColor.task_note
    if (ChildrentCard.status === 'task_waiting') return theme.taskColor.task_waiting
    if (ChildrentCard.status === 'task_grey') return theme.taskColor.task_grey
  }
  return (
    <Card
      ref={setNodeRef} style={dndKitCardStyle} {...attributes} {...listeners}
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
        overflow: 'unset',
        maxWidth: '300px',
        // backgroundColor: TaskColor,
        opacity: '0.7'
      }}>
      <Box sx={{
        display: 'flex',
        // backgroundColor: TaskColor,
        // width: '15px',
        height: '3px',
        px: 1
      }} ></Box>
      {ChildrentCard?.cover && <CardMedia sx={{ height: 140 }} image={ChildrentCard?.cover} />}

      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>{ChildrentCard?.title}</Typography>
      </CardContent>
      {shouldShowCardActions() &&
        <CardActions sx={{ p: '0 4px 8px 4px' }}>
          {!!ChildrentCard?.memberIds?.length &&
            <Button size="small" startIcon={<GroupIcon />}>{ChildrentCard?.memberIds?.length}</Button>
          }
          {!!ChildrentCard?.comments?.length &&
            <Button size="small" startIcon={<CommentIcon />}>{ChildrentCard?.comments?.length}</Button>
          }
          {!!ChildrentCard?.attachments?.length &&
            <Button size="small" startIcon={<AttachmentIcon />}>{ChildrentCard?.attachments?.length}</Button>
          }
        </CardActions>
      }
    </Card>

  )
}

export default Children