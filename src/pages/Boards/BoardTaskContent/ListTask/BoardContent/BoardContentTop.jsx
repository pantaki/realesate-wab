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
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'


function BoardContentTop({ users }) {
  const [height, setHeight] = useState(0)
  const [padding, setPadding] = useState('0px')
  const [disabled, setDisabled] = useState(0)
  const [roleUser, setRoleUser] = useState('')

  const handleClick = (event) => {
    setHeight(height === 0 ? 'auto' : 0)
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

  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Box sx={{
        position: 'absolute',
        width: '80%'
      }}>
        <Box
          sx={{
            backgroundColor: '#ddd',
            boxShadow: '2px 3px 3px 0px #757575',
            borderBottomRightRadius: '5px',
            borderBottomLeftRadius: '5px',
            p: {padding},
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
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
              sx={{
                backgroundColor: 'inherit'
              }}
            >
              {users?.map(user => {
                return (
                  <Box key={user?._id}>
                    <Card>
                      <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          {user?.type}: {user?.name}
                        </Typography>
 
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          adjective
                        </Typography>
                        <Typography variant="body2">
                          {user?.phone}
                          <br />
                          {user?.email}
                        </Typography>
                        <Typography variant="body2" sx={{
                          fontSize: '14px',
                          p: '10px 0'
                        }}>
                          ROLE:
                          <Select
                            disabled
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={user?.role_key}
                            label="Role User"
                            onChange={handleChange}
                          >
                            <MenuItem value={user?.role_key}>{user?.role}</MenuItem>

                          </Select>
                        </Typography>
                      </CardContent>
                    </Card>
                    
                    
                    
                  </Box>
                )
              }

              )}


              <Item>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%'
                }}>
                  <Typography variant="body2" sx={{
                    fontSize: '17px',
                    fontWeight: 'bold',
                    p: '10px 0',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <AddIcon />Person
                  </Typography>
                </Box>
              </Item>
            </Stack>
          </AnimateHeight>
        </Box>
        <Button
          aria-expanded={height !== 0}
          aria-controls="example-panel"
          sx={{
            borderRadius: '0px',
            boxShadow: '2px 3px 3px 0px #757575',
            color: '#6f6d6d',
            backgroundColor: '#ddd',
            '&:hover':{ backgroundColor: '#ddd' }
          }}
          id="basic-button-contentTop"
          onClick={handleClick}
          startIcon={<DragIndicatorIcon />}
          endIcon={<ExpandMoreIcon />}
        >
          People
        </Button>
      </Box>
    </Box>
  )
}

export default BoardContentTop