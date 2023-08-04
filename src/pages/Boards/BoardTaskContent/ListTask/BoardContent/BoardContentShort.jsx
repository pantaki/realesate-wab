import React from 'react'
import Box from '@mui/material/Box'
import BoardContent from './BoardContent'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

const Item = styled(Paper)(({ theme }) => ({
  bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center'
  // color: theme.palette.text.secondary,
}))

function BoardContentShort({ board }) {
  console.log('board :', board.span)

  const handleTitle = (boardId, event) => {
    console.log( 'handleTitle: ', boardId)

  }

  if (board.span === 4) {
    return (
      <Box gridColumn={board.span === 4 ? 'span 4' : 'span 12'} display={board.display === 'none' ? 'block' : 'none'}
        sx={{
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
          width: '100%',
          p: '10px 0',
          px: 2
        }}
      >
        <Item>

          <Box onClick={handleTitle(board?._id)} sx={{
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#486889' : '#1762ad'),
            display: 'flex',
            px: 1,
            justifyContent: 'space-between',
            color: 'white',
            borderRadius: '6px',
            width: '100%',
            transition: '0.7s',
            '&:hover': {
              cursor: 'pointer',
              opacity: '0.8'
            }
          }}>
            <Typography variant="h6" sx={{
              fontSize: '13px',
              fontWeight: 'bold',
              cursor: 'pointer',
              p: '10px 0'
            }}>
              {board?.title}
            </Typography>
            <Typography variant="span" sx={{
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              p: '10px 0'
            }}>
              {board?.titleNumber}
            </Typography>
          </Box>
          <Box>
            test Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odit, fugiat placeat at, iure culpa eligendi sequi laboriosam explicabo dicta corporis cum, perspiciatis ad fuga blanditiis nulla libero voluptas quo.
          </Box>
        </Item>
      </Box>
    )
  }

  return (
    <Box gridColumn={board.span === 4 ? 'span 4' : 'span 12'} display={board.display === 'none' ? 'none' : 'block'}
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        // height: (theme) => theme.trello.boardContentHeight,
        // display: 'flex',
        p: '10px 0',
        px: 2
      }}
    >
      <Item>
        <Box onClick={handleTitle(board?._id)} sx={{
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#486889' : '#1762ad'),
          display: 'flex',
          px: 2,
          justifyContent: 'space-between',
          color: 'white',
          borderRadius: '6px',
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
            {board?.title}
          </Typography>
          <Typography variant="span" sx={{
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            p: '10px 0'
          }}>
            {board?.titleNumber}
          </Typography>
        </Box>
        <BoardContent key={board._id} board={board} />
      </Item>
      
    </Box>
  )
}

export default BoardContentShort