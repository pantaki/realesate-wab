import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import AnimateHeight from 'react-animate-height'
import Draggable from '@tdaniil/react-draggable'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import AddIcon from '@mui/icons-material/Add'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

function BoardContentBottom({users}) {
  const [height, setHeight] = useState(0)
  const [padding, setPadding] = useState('0px')
  const [disabled, setDisabled] = useState(0)
  const [roleUser, setRoleUser] = useState('')

  const handleClick = (event) => {
    setHeight(height === 0 ? '-200' : 0)
    setPadding(padding === '0px' ? '15px' : '0px')


  }
  const handleChange = (event) => {
    setRoleUser(event.target.value)
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#000'),
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minWidth: '17%'
  }))

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Box sx={{
        position: 'absolute',
        // width: '80%'
        // top: (theme) => theme.trello.boardContentHeight
      }}>
        <Button
          aria-expanded={height !== 0}
          aria-controls="example-panel"
          sx={{
            borderRadius: '0px',
            boxShadow: '2px -1px 1px 0px #757575',
            color: '#6f6d6d',
            backgroundColor: '#ddd',
            '&:hover':{ backgroundColor: '#ddd' }
          }}
          id="basic-button-contentTop"
          onClick={handleClick}
          startIcon={<DragIndicatorIcon />}
          endIcon={<ExpandLessIcon />}
        >
          documents
        </Button>
        <Box
          sx={{
            backgroundColor: '#ddd',
            boxShadow: '2px 0px 3px 0px #757575',
            borderBottomRightRadius: '5px',
            borderBottomLeftRadius: '5px',
            
            transition: '0.5s',
            width: '100%',
            overflowX: 'auto',
            overflowY: 'hidden'
          }}>
          <AnimateHeight
            id="example-panel"
            duration={500}
            height={height} // see props documentation below
          >
            <Stack
              direction="column"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
              sx={{
                backgroundColor: 'inherit'
              }}
            >
              <Card
                sx={{ minWidth: 275 }}
              >
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Documents
                  </Typography>
                  <Typography variant="h5" component="div">
                    test{bull}test1{bull}test2{bull}test3
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    test
                  </Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet veniam.
                    <br />
                    {'"smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>

            </Stack>
          </AnimateHeight>
        </Box>

      </Box>
    </Box>
  )
}

export default BoardContentBottom