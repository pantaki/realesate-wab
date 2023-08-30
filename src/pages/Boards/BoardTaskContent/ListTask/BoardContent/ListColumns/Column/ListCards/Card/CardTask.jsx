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
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import EditIcon from '@mui/icons-material/Edit'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import * as React from 'react'
import Stack from '@mui/material/Stack'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

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
  bgcolor: '#ddd',
  border: '2px solid #000',
  boxShadow: 24,
  p: '15px 20px'
}
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function CardTask({ card, index }) {

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: card._id,
    data: { ...card }
  })

  const dndKitCardStyle = {
    // touchActive: 'none',
    // change transform to Translate
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
    border: isDragging ? '1px solid #2ecc71' : undefined
  }

  const [openTask, setOpenTask] = useState(false)
  const [selectedValue, setSelectedValue] = useState()
  const [dataCart, setDataCart] = useState(card)
  const [inputEditTask, setInputEditTask] = useState(dataCart?.title)
  const [inputAddNote, setInputAddNote] = useState('')
  const [taskComment, setTaskComment] = useState(dataCart?.comments)
  const [chilrenHidden, setChilrenHidden] = useState('block')
  const [chilrenHiddenIcon, setChilrenHiddenIcon] = useState(<KeyboardArrowDownIcon sx={{ fill: '#919eab' }} />)
  const [userChecked, setUserChecked] = useState(false)
  const [userChecked1, setUserChecked1] = useState(false)
  const [openNoti, setOpenNoti] = React.useState(false)

  

  const handleNotiClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenNoti(false)
  }

  const handleChangeUser1 = (event) => {
    setUserChecked(event.target.checked)
  }

  const handleChangeUser2 = (event) => {
    setUserChecked1(event.target.checked)
  }


  const handleOpenTask = () => {
 
    if (dataCart.status === 'task_waiting' || dataCart.status === 'task_note') setOpenTask(true)
    setSelectedValue(dataCart.status)
  }
  const handleCloseTask = () => setOpenTask(false)

  const shouldShowCardActions = () => {
    return (!!dataCart?.memberIds?.length || !!dataCart?.comments?.length || !!dataCart?.attachments?.length)
    // && dataCart.status === 'task_note'
  }

  const orderedChildrens = mapOrder(dataCart?.childrens, dataCart?.cardChildrenOrderIds, '_id')

  const TaskColor = (theme) => {
    if (dataCart.status === 'task_done') return theme.taskColor.task_done
    if (dataCart.status === 'task_note') return theme.taskColor.task_note
    if (dataCart.status === 'task_waiting') return theme.taskColor.task_waiting
    if (dataCart.status === 'task_grey') return theme.taskColor.task_grey
  }

  function handleSaveTask() {
    let convertId = 0
    console.log('dataCart.commentsLastId: ', dataCart)
    dataCart.status = selectedValue
    if (inputEditTask !== dataCart.title) dataCart.title = inputEditTask
    if(dataCart.commentsLastId)  {
      convertId = CardConvertId(dataCart.commentsLastId)
    } else {
      convertId = 'comment-id-01'
    }
    
    if(inputAddNote) {
      const commentNew = {
        _id: convertId,
        userId: 'user-id-01',
        userName: 'Ben',
        comment : inputAddNote,
        date: 'Aug. 25 ,2023 20:30 Am'
      }
      if(dataCart.commentsLastId !== convertId || dataCart.commentsLastId === '') dataCart.commentsLastId = convertId
      
      setTaskComment( (taskComment) => [...taskComment, commentNew])
      dataCart.comments = taskComment
      
      
    }
    setOpenNoti(true)
    setDataCart(dataCart)
    setInputEditTask(dataCart.title)
    
    // setOrderedCards(dataCarts[index] = dataCart)
    // cards[index] = dataCart
    // column.cards = cards
    // columns[columnIndex] = column
    
    setInputAddNote('')
    console.log('dataCart.commentsLastId after: ', dataCart)
    setOpenTask(false)
  }

  const CardConvertId = (id) => {
    const arrData = id.split('-')
    const idNew = parseInt(arrData[2]) + 1
    const dataConvert = arrData[0] + '-' + arrData[1] + '-' + idNew
    return dataConvert
  }
  const handleChange = (event) => {
    setSelectedValue(event.target.value)
  }

  const handleChilrenHidden = (event) => {
    if (chilrenHidden === 'block') {
      setChilrenHidden('none')
      setChilrenHiddenIcon(<KeyboardArrowRightIcon sx={{ fill: '#919eab' }} />)
    }
    if (chilrenHidden === 'none') {
      setChilrenHidden('block')
      setChilrenHiddenIcon(<KeyboardArrowDownIcon sx={{ fill: '#919eab' }} />)
    }
  }

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-status',
    inputProps: { 'aria-label': item }
  })
// useEffect(() => {
//     // setOrderedColumns(columns)
    
//   }, [dataCarts, dataCart, selectedValue, inputEditTask])
  return (
    // <div ref={setNodeRef} style={dndKitCardStyle} {...attributes} >
    <Box>
      <Card
        onClick={handleOpenTask}
        ref={setNodeRef} style={dndKitCardStyle} {...attributes} {...listeners}
        sx={{
          cursor: 'pointer',
          boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
          overflow: 'unset',
          maxWidth: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          transition: '0.7s',
          '&:hover': { opacity: '0.7'}
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
          }} ></Box>
        </Box>
        <Box>
          {dataCart?.childrens?.length > 0 &&
          <Box onClick={handleChilrenHidden}>
            {chilrenHiddenIcon}
          </Box>

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
                <Button size="small" startIcon={<CommentIcon />}>{dataCart?.comments?.length}</Button>
              }
              {!!dataCart?.attachments?.length &&
                <Button size="small" startIcon={<AttachmentIcon />}>{dataCart?.attachments?.length}</Button>
              }
            </CardActions>
          }

        </Box>
      </Card>

      {/* edit task detail */}
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

            {/* Box Task Name */}
            <Box>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                <Box sx={{
                  display: 'grid',
                  m: '20px 0',
                  width: '100%'
                }}>
                  <Typography
                    sx={{
                      fontSize: '15px',
                      fontWeight: 'bold',
                      textTransform: 'uppercase'
                    }}
                    variant="subtitle1" gutterBottom
                  >
                    Task Name
                  </Typography>
                  {/* <input ref={inputEditTask} type="text" /> */}
                  {/* <Textarea placeholder="Type anything…" />; */}
                  <TextField
                    sx={{
                      backgroundColor: '#fff'
                    }}
                    id="outlined-multiline-static"
                    label=""
                    multiline
                    rows={4}
                    onChange={(v) => setInputEditTask(v.target.value) }
                    defaultValue={inputEditTask}
                  />
                </Box>
              </Typography>
            </Box>

            {/* box Task Status */}
            <Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: '15px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                  }}
                  variant="subtitle1" gutterBottom
                >
                  Task Status
                </Typography>
              </Box>
              <Box sx={{
                backgroundColor: '#fff',
                borderRadius: '6px',
                p: 1
              }}>
                {(dataCart.status === 'task_waiting' || dataCart.status === 'task_note') && (
                  <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    // m: 1,

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
                          p: '9px 0',
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
                          p: '9px 0',
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
                          p: '9px 0',
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
                          p: '9px 0',
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
                          p: '9px 0',
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
            </Box>

            {/* box Task Notes */}
            <Box sx={{mt: 2}}>
              <Box>
                <Typography
                  sx={{
                    fontSize: '15px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                  }}
                  variant="subtitle1" gutterBottom
                >
                  Task Notes
                </Typography>
              </Box>
              <Box sx={{
                backgroundColor: '#fff4c6',
                p:2,
                borderRadius: '6px'
              }}>

                <Box sx={{
                  maxHeight: '200px',
                  overflow: 'auto'
                }}>
                  {/* List Comment */}
                  {taskComment?.map((taskCommentSplit, index) => {
                    return (<Box key={taskCommentSplit?._id}>
                      <Box sx={{
                        display: 'flex'
                      }}>
                        <Box>
                          {taskCommentSplit?._id &&
                            <Typography
                              sx={{
                                fontSize: '14px',
                                fontWeight: 'bold',
                                p: '0 10px'
                              }}
                              variant="subtitle1" gutterBottom
                            >
                              Note {index + 1}
                            </Typography>
                            // <Button size="small" startIcon={<CommentIcon />} onClick={handleOpen}>{dataCart?.comments?.length}</Button>
                          }
                        </Box>

                        <Box>
                          <Typography
                            sx={{
                              fontSize: '13px',
                              fontWeight: '400'
                            }}
                            variant="subtitle2" gutterBottom
                          >
                            {taskCommentSplit?.date}
                          </Typography>
                        </Box>

                      </Box>
                      <Box sx={{
                        p: '0 10px'
                      }}>
                        <Typography
                          sx={{
                            fontSize: '13px',
                            fontWeight: '400'
                          }}
                          variant="subtitle2" gutterBottom
                        >
                          {taskCommentSplit?.userName} - {taskCommentSplit?.comment}
                        </Typography>
                      </Box>
                    </Box>
                    )
                  })}
                </Box>
                

                <Box sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gridGap: 1,
                  m: 1
                  // display: 'flex',
                  // justifyContent: 'center',
                  // p: '0 8px'
                }}>
                  {/* <FormControl component="fieldset"> */}
                  {/* <FormGroup aria-label="position" row> */}
                  <Box sx={{
                    borderTop: '1px solid #ababab',
                    borderRight: '1px solid #ababab',
                    p: '0 8px'
                  }}>
                    <FormControlLabel
                      value="end"
                      control={
                        <Checkbox checked={userChecked} onChange={handleChangeUser1} name="cleia" />
                      }
                      label={<Typography style={{fontSize: '13px'}}>Cleia read this</Typography>}
                      labelPlacement="end"
                      color='#fff'
                    />
                  </Box>
                  <Box sx={{
                    borderTop: '1px solid #ababab',
                    p: '0 8px'
                  }}>
                    <FormControlLabel
                      value="end"
                      control={
                        <Checkbox checked={userChecked1} onChange={handleChangeUser2} name="julia" />
                      }
                      label={<Typography style={{fontSize: '13px'}}>Julia read this</Typography>}
                      labelPlacement="end"
                    />
                  </Box>
                      
                      
                    {/* </FormGroup> */}
                  {/* </FormControl> */}
                </Box>
                
              </Box>
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
                label="Add Note"
                multiline
                rows={4}
                onChange={(v) => setInputAddNote(v.target.value) }
                defaultValue={inputAddNote}
              />
            </Box>
            <Box>
              <Button sx={{}} variant="contained" onClick={handleSaveTask}>
                Save Task
              </Button>
            </Box>

          </Box>
          {/* </Box> */}
        </Fade>
      </Modal>
      <Snackbar open={openNoti} autoHideDuration={1500} onClose={handleNotiClose}>
        <Alert onClose={handleNotiClose} severity="success" sx={{ width: '100%' }}>
          Update success!
        </Alert>
      </Snackbar>
      <Box sx={{
        pt: '10px',
        display: chilrenHidden

      }}>
        <CardChildrens ChildrentCards={orderedChildrens} />
      </Box>
    </Box>
    //</div>

  )
}

export default CardTask