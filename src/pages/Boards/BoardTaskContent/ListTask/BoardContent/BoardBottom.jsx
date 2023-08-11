import Card  from '@mui/material/Card'
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
import {DndContext, useDraggable, useDroppable} from '@dnd-kit/core'
import { useEffect, useState } from 'react'

function BoardBottom({ columns }) {
  const [expanded, setExpanded] = useState(false)
  const [height, setHeight] = useState(0)

  const handlHeigght = (value) => {

    // if (expanded) setHeight(200)
    // if (!expanded) setHeight(0)
    setExpanded((value) => {
      console.log('button test 123123123', value)
      return !value
    })
  }
  return (

    <Box>
      <Button onClick={(value) => handlHeigght(value)}>
        {/* {expanded ? setHeight(200) : setHeight(0)} */}
        {expanded ? 'Close' : 'Open'}
      </Button>
      <Box
        expanded={expanded}
        header={'Bottom sheet'}
        onChange={setExpanded}
        sx={{
          minHeight: {height}
        }}
      >
        test e123123
      </Box>

    </Box>

  )
}

export default BoardBottom