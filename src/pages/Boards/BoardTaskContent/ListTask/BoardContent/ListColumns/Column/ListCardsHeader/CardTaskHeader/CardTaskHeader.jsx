import Box from '@mui/material/Box'

function CardTaskHeader({ card }) {
  const TaskColor = (theme) => {
    if (card.status === 'task_done') return theme.taskColor.task_done
    if (card.status === 'task_note') return theme.taskColor.task_note
    if (card.status === 'task_waiting') return theme.taskColor.task_waiting
    if (card.status === 'task_grey') return theme.taskColor.task_grey
  }
  return (
    <Box sx={{
      display: 'flex',
      backgroundColor: TaskColor,
      width: '40px',
      height: '40px'
      // px: 1
    }} ></Box>
  )
}

export default CardTaskHeader