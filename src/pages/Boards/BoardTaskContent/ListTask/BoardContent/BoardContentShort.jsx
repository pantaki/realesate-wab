import React, { useState } from 'react'
import Box from '@mui/material/Box'
import BoardContent from './BoardContent'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import ListCardShort from './ListCardShort/ListCardShort'

const Item = styled(Paper)(({ theme }) => ({
  bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
  // ...theme.typography.body2,
  padding: 1,
  textAlign: 'center'
  // color: theme.palette.text.secondary,
}))

function BoardContentShort({ board }) {

  const [boardConver, SetBoardConver] = useState(board)

  const handleTitle = (board, boardId) => {
    SetBoardConver({ ...board, span: board?.span === 4 ? 12 : 4, display: board?.span === 4 ? 'block' : 'none' })
  }
  if (boardConver.span === 4) {
    return (
      <Box gridColumn={boardConver.span === 4 ? 'span 4' : 'span 12'} display={boardConver.display === 'none' ? 'block' : 'none'}
        sx={{
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
          width: '100%',
          p: '10px 0',
          transition: '0.7s',
          px: 1
        }}
      >
        <Item>
          <Box onClick={() => handleTitle(boardConver, boardConver?._id)} sx={{
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#486889' : '#1762ad'),
            display: 'flex',
            pl: 2,
            justifyContent: 'space-between',
            color: 'white',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
            width: '100%',
            transition: '0.7s',
            '&:hover': {
              cursor: 'pointer',
              opacity: '0.8'
            }
          }}>
            <Typography variant="h6" sx={{
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              p: '10px 0'
            }}>
              {boardConver?.title}
            </Typography>
            <Typography variant="span" sx={{
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              p: '10px 20px',
              backgroundColor: '#054789'
            }}>
              {boardConver?.titleNumber}
            </Typography>
          </Box>
          <ListCardShort key={boardConver._id} boardConver={boardConver} />
        </Item>
      </Box>
    )
  }

  return (
    <Box gridColumn={boardConver.span === 4 ? 'span 4' : 'span 12'} display={boardConver.display === 'none' ? 'none' : 'block'}
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        p: '10px 0',
        px: 3,
        transition: '0.7s'
      }}
    >
      <Item sx={{transition: '0.7s'}}>
        <Box onClick={() => handleTitle(boardConver, boardConver?._id)} sx={{
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#486889' : '#1762ad'),
          display: 'flex',
          pl: 2,
          justifyContent: 'space-between',
          color: 'white',
          borderTopLeftRadius: '5px',
          borderTopRightRadius: '5px',
          width: '100%',
          transition: '0.5s',
          '&:hover': {
            cursor: 'pointer',
            opacity: '0.7'
          }
        }}>
          <Typography variant="h6" sx={{
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            p: '10px 0'
          }}>
            {boardConver?.title}
          </Typography>
          <Typography variant="span" sx={{
            fontSize: '15px',
            fontWeight: 'bold',
            cursor: 'pointer',
            p: '10px 20px',
            backgroundColor: '#0c4176'
          }}>
            {boardConver?.titleNumber}
          </Typography>
        </Box>
        <BoardContent key={boardConver._id} board={boardConver} />
      </Item>
      
    </Box>
  )
}

export default BoardContentShort