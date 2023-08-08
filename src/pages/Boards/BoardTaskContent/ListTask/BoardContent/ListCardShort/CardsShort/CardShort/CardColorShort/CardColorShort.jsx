import Box from '@mui/material/Box'

function CardColorShort({ cardColor }) {
  console.log('cardColor: ', cardColor)
  const TaskColor = (theme) => {
    if(cardColor.status === 'task_done') return theme.taskColor.task_done
    if(cardColor.status === 'task_note') return theme.taskColor.task_note
    if(cardColor.status === 'task_waiting') return theme.taskColor.task_waiting
    if(cardColor.status === 'task_grey') return theme.taskColor.task_grey
  }
  return (
    <Box sx={{
      display: 'flex',
      backgroundColor: TaskColor,
      width: '15px',
      height: '15px',
      px: 1
    }} ></Box>
  )
}

export default CardColorShort