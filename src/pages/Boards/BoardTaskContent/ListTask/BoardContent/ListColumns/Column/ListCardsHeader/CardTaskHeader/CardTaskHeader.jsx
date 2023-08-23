import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'

function CardTaskHeader({ card }) {
  const [dataCart, setDataCart] = useState(card)
  if(card.status !== dataCart.status) setDataCart(card)
  // useEffect(() => {
  //   console.log('useEffect CardTaskHeader', card.status)
  // }, [card])
  const TaskColor = (theme) => {
    if (dataCart.status === 'task_done') return theme.taskColor.task_done
    if (dataCart.status === 'task_note') return theme.taskColor.task_note
    if (dataCart.status === 'task_waiting') return theme.taskColor.task_waiting
    if (dataCart.status === 'task_grey') return theme.taskColor.task_grey
  }
  return (
    <Box sx={{
      display: 'flex',
      backgroundColor: TaskColor,
      width: '20px',
      height: '20px'
      // px: 1
    }} ></Box>
  )
}

export default CardTaskHeader