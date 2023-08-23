import { useEffect, useState } from 'react'
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
import CardChildrens from './CardChildrens/CardChildrens'
import { mapOrder } from '~/utils/sorts'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import Backdrop from '@mui/material/Backdrop'
import Fade from '@mui/material/Fade'
import Modal from '@mui/material/Modal'
import Radio from '@mui/material/Radio'
import TextField from '@mui/material/TextField'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}
const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  backgroundColor: '#fff5c7',
}

function CardTask({ card }) {
  const [open, setOpen] = useState(false)
  const [openTask, setOpenTask] = useState(false)
  const [selectedValue, setSelectedValue] = useState()
  const [dataCart, setDataCart] = useState(card)
  const [inputEditTask, setInputEditTask] = useState(dataCart?.comments[0])

  useEffect(() => {
    console.log('useEffect', card)
    setDataCart(card)
    console.log('dataCart ', dataCart)
  }, [card])

  const handleOpenTask = () => {
    if (dataCart.status == 'task_waiting') setOpenTask(true)
    setSelectedValue(dataCart.status)
  }
  const handleCloseTask = () => setOpenTask(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: dataCart._id,
    data: { ...dataCart }
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
    return (!!dataCart?.memberIds?.length || !!dataCart?.comments?.length || !!dataCart?.attachments?.length) && dataCart.status === 'task_note'
  }

  const orderedChildrens = mapOrder(dataCart?.childrens, dataCart?.cardChildrenOrderIds, '_id')

  const TaskColor = (theme) => {
    if (dataCart.status === 'task_done') return theme.taskColor.task_done
    if (dataCart.status === 'task_note') return theme.taskColor.task_note
    if (dataCart.status === 'task_waiting') return theme.taskColor.task_waiting
    if (dataCart.status === 'task_grey') return theme.taskColor.task_grey
  }

  function handleReplyEdit() {
    dataCart.status = selectedValue
    setDataCart(dataCart)
    setOpenTask(false)
    if(inputEditTask !== dataCart.comments[0])
    dataCart.comments[0] = inputEditTask
    setDataCart(dataCart)
    setInputEditTask(dataCart.comments[0])

  }
  const handleChange = (event) => {
    setSelectedValue(event.target.value)
  }

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-status',
    inputProps: { 'aria-label': item }
  })

  return (
    <Box>
      <Card
        ref={setNodeRef} style={dndKitCardStyle} {...attributes} {...listeners}
        sx={{
          cursor: 'pointer',
          boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
          overflow: 'unset',
          maxWidth: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}>
        <Box>
          <Box sx={{
            // display: 'flex',
            backgroundColor: TaskColor,
            // width: '30px',
            // height: '30px',
            mx: 1,
            p: 2,
            transition: '0.7s',
            '&:hover': { opacity: '0.7'}
          }} onClick={handleOpenTask}></Box>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openTask}
            onClose={handleCloseTask}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500
              }
            }}
          >
            <Fade in={openTask}>
              {/* <Box sx={style}> */}
              <Box sx={style2}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Edit Task Detail {dataCart?._id}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {dataCart?.comments[0]}
                </Typography>
                <Box>
                  {dataCart.status == 'task_waiting' && (
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      m: 2
                    }}>
                      <Box sx={{
                        textAlign: 'center',
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        width: '12%'
                      }}>
                        <Box sx={{
                          width: '30px',
                          height: '30px',
                          margin: '5px auto',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: '#ababab'
                        }}></Box>
                        <Radio
                          {...selectedValue === 'task_grey'
                          ? 'disabled' : ''}
                        
                          {...controlProps('task_grey')}
                          sx={{
                            color: '#ababab',
                            '&.Mui-checked': {
                              color: '#ababab',
                            },
                          }}
                        />  Not Done
                      </Box>
                      <Box sx={{
                        textAlign: 'center',
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        width: '12%'
                      }}>
                        <Box sx={{
                          width: '30px',
                          height: '30px',
                          margin: '5px auto',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: '#01b10a'
                        }}></Box>
                        <Radio
                          {...selectedValue === 'task_done'
                          ? 'disabled' : ''}
                          {...controlProps('task_done')}
                          sx={{
                            color: '#01b10a',
                            '&.Mui-checked': {
                              color: '#01b10a',
                            },
                          }}
                        />
                      </Box>
                      <Box sx={{
                        textAlign: 'center',
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        width: '12%'
                      }}>
                        <Box sx={{
                          width: '30px',
                          height: '30px',
                          margin: '5px auto',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: '#01b10a'
                        }}>x</Box>
                        <Radio
                          disabled
                          {...controlProps('task_donena')}
                          sx={{
                            color: '#01b10a',
                            '&.Mui-checked': {
                              color: '#01b10a',
                            },
                          }}
                        />  Done NA
                      </Box>
                      <Box sx={{
                        textAlign: 'center',
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        width: '12%'
                      }}>
                        <Box sx={{
                          width: '30px',
                          height: '30px',
                          margin: '5px auto',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: '#f5c916'
                        }}></Box>
                        <Radio
                          {...controlProps('task_waiting')}
                          sx={{
                            color: '#f5c916',
                            '&.Mui-checked': {
                              color: '#f5c916',
                            },
                          }}
                        />  Wait for
                      </Box>
                      <Box sx={{
                        textAlign: 'center',
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        width: '12%'
                      }}>
                        <Box sx={{
                          width: '30px',
                          height: '30px',
                          margin: '5px auto',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: '#d10101'
                        }}></Box>
                        <Radio
                          name="radio-buttons-status"
                          {...controlProps('task_note')}
                          sx={{
                            color: '#d10101',
                            '&.Mui-checked': {
                              color: '#d10101',
                            },
                          }}
                        />  Note for
                      </Box>
                    </Box>
                  )}
                </Box>
                <Box sx={{
                  display: 'grid',
                  m: '20px 0',
                  width: '100%'
                }}>
                  {/* <input ref={inputEditTask} type="text" /> */}
                  {/* <Textarea placeholder="Type anything…" />; */}
                  <TextField
                    id="outlined-multiline-static"
                    label="Type note here"
                    multiline
                    rows={4}
                    onChange={(v) => setInputEditTask(v.target.value) }
                    defaultValue={inputEditTask}
                  />
                </Box>
                <div className="button-modal">
                  <Button variant="contained" onClick={handleReplyEdit}>
                    Save Note
                  </Button>
                </div>
              </Box>
              {/* </Box> */}
            </Fade>
          </Modal>
        </Box>
        <Box>
          {dataCart?.childrens?.length > 0 &&
            <ExpandMoreIcon sx={{ fill: '#919eab' }} />
          }
        </Box>
        {/* {card?.cover && <CardMedia sx={{ height: 140 }} image={card?.cover} />} */}

        <Box>
          <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
            <Typography sx={{
              fontSize: '13px',
              textAlign: 'left'
            }}>{dataCart?.title}</Typography>
          </CardContent>
          {shouldShowCardActions() &&
            <CardActions sx={{ p: '0 4px 8px 4px' }}>
              {!!dataCart?.memberIds?.length &&
                <Button size="small" startIcon={<GroupIcon />}>{dataCart?.memberIds?.length}</Button>
              }
              {!!dataCart?.comments?.length &&
                <Button size="small" startIcon={<CommentIcon />} onClick={handleOpen}>{dataCart?.comments?.length}</Button>
              }
              {!!dataCart?.attachments?.length &&
                <Button size="small" startIcon={<AttachmentIcon />}>{dataCart?.attachments?.length}</Button>
              }
            </CardActions>
          }
          <Box>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"
            >
              <Box sx={{
                width: 200,
                m: '30px auto',
                backgroundColor: '#ababab',
                p: '20px',
                borderRadius: '10px'
              }}>
                <h2 id="child-modal-title">User1:</h2>
                <p id="child-modal-description">
                  {dataCart?.comments}
                </p>
                <Button onClick={handleClose}>Close</Button>
              </Box>
            </Modal>
          </Box>
        </Box>

      </Card>
      <Box sx={{
        pt: '10px'
      }}>
        <CardChildrens ChildrentCards={orderedChildrens} />
      </Box>
    </Box>

  )
}

export default CardTask