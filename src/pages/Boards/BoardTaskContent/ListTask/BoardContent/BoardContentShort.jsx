import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import BoardContent from './BoardContent'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import ListCardShort from './ListCardShort/ListCardShort'
import { useMediaQuery } from 'react-responsive'

const Item = styled(Paper)(({ theme }) => ({
  bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#fff'),
  // ...theme.typography.body2,
  padding: 1,
  textAlign: 'center'
  // color: theme.palette.text.secondary,
}))

function BoardContentShort({ board, users, documents }) {

  const [boardConver, SetBoardConver] = useState(board)

  const handleTitle = (board, boardId) => {
    SetBoardConver({ ...board, span: board?.span === 4 ? 12 : 4, display: board?.span === 4 ? 'block' : 'none' })
  }

  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

 
  // console.log('isPortrait: ', isPortrait)
  // console.log('isRetina: ', isRetina)

  const handleSpan = (boardConver) => {
    if ( boardConver?.span === 4 ) return 'span 4'
    if ( boardConver?.span === 6 ) return 'span 6'
    if ( boardConver?.span === 8 ) return 'span 8'
    if ( boardConver?.span === 12 ) return 'span 12'
    return 'span 12'
  }

  if (boardConver.span === 4) {
    return (
      <Box gridColumn={boardConver.span === 4 ? 'span 4' : 'span 12'} display={boardConver.display === 'none' ? 'block' : 'none'}
        sx={{
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#fff'),
          width: '100%',
          p: '10px 0',
          transition: '0.7s',
          px: 1
        }}
      >
        <Item>
          <Box onClick={() => handleTitle(boardConver, boardConver?._id)} sx={{
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#486889' : '#bbbbbb'),
            display: 'flex',
            pl: 2,
            justifyContent: 'space-between',
            color: 'white',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
            width: '100%',
            alignItems: 'center',
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
              p: '10px 0',
              color: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#000')
            }}>
              {boardConver?.title}
            </Typography>
            <Typography variant="span" sx={{
              fontSize: '20px',
              fontWeight: 'bold',
              cursor: 'pointer',
              p: '10px 20px',
              borderTopRightRadius: '5px',
              backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#054789' : '#6b6b6b')
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
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#fff'),
        width: '100%',
        // p: '10px 0',
        px: 3,
        transition: '0.7s'
      }}
    >
      <Item sx={{ transition: '0.7s' }}>
        <Box onClick={() => handleTitle(boardConver, boardConver?._id)} sx={{
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#486889' : '#c7c7c7'),
          display: 'flex',
          pl: 2,
          justifyContent: 'space-between',
          color: 'white',
          borderTopLeftRadius: '5px',
          borderTopRightRadius: '5px',
          width: '100%',
          alignItems: 'center',
          transition: '0.5s',
          '&:hover': {
            cursor: 'pointer',
            opacity: '0.7'
          }
        }}>
          <Typography variant="h6" sx={{
            fontSize: '20px',
            fontWeight: 'bold',
            cursor: 'pointer',
            // p: '10px 0',
            color: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#000')
          }}>
            {boardConver?.title}
          </Typography>
          <Typography variant="span" sx={{
            width: '52px',
            height: '52px',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '23px',
            fontWeight: 'bold',
            cursor: 'pointer',
            p: '10px 20px',
            borderTopRightRadius: '5px',
            backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#054789' : '#6b6b6b')
          }}>
            {boardConver?.titleNumber}
          </Typography>
        </Box>
        <BoardContent key={boardConver._id} board={boardConver} users={users} documents={documents} />
      </Item>
    </Box>
  )
}

export default BoardContentShort