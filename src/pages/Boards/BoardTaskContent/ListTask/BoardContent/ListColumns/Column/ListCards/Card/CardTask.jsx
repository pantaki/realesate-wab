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
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Zoom from 'react-medium-image-zoom'
import { Document, Page } from 'react-pdf'
import 'react-medium-image-zoom/dist/styles.css'

 
const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#ddd',
  boxShadow: 24,
  p: '5px 20px',
  borderRadius: '6px'
}
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
})

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
  const [openTaskColor, setOpenTaskColor] = useState(false)
  const [selectedValue, setSelectedValue] = useState()
  const [dataCart, setDataCart] = useState(card)
  const [inputEditTask, setInputEditTask] = useState(dataCart?.title)
  const [inputAddNote, setInputAddNote] = useState('')
  const [taskComment, setTaskComment] = useState(dataCart?.comments)
  const [chilrenHidden, setChilrenHidden] = useState('block')
  const [chilrenHiddenIcon, setChilrenHiddenIcon] = useState(<KeyboardArrowDownIcon sx={{ fill: '#919eab' }} />)
  const [userChecked, setUserChecked] = useState(false)
  const [userChecked1, setUserChecked1] = useState(false)
  const [openNoti, setOpenNoti] = useState(false)
  const [file, setFile] = useState(dataCart?.attachments)
  const [imageFiles, setImageFiles] = useState([])
  const [images, setImages] = useState([])
  const [valueTabFile, setValueTabFile] = useState('1')


  const handleChangeTabFile = (event, newValue) => {
    setValueTabFile(newValue)
  }

  useEffect(() => {

  }, [dataCart])

  useEffect(() => {
    const images = [], fileReaders = []
    let isCancel = false
    if (imageFiles.length) {
      imageFiles.forEach((file) => {
        const fileReader = new FileReader()
        fileReaders.push(fileReader)
        fileReader.onload = (e) => {
          const { result } = e.target
          if (result) {
            images.push(result)
          }
          if (images.length === imageFiles.length && !isCancel) {
            setImages(images)
            setFile((file) => [...file, images])
          }
        }
        fileReader.readAsDataURL(file)
      })
    }
    return () => {
      isCancel = true
      fileReaders.forEach(fileReader => {
        if (fileReader.readyState === 1) {
          fileReader.abort()
        }
      })
    }
  }, [imageFiles])

  function handleChangeAddNote(event) {
    setInputAddNote(event.target.value)

  }

  function handleChangeFile(e) {
    const { files } = e.target
    const validImageFiles = []
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      // if (file.type.match(imageTypeRegex)) {
      validImageFiles.push(file)
      // }
    }
    if (validImageFiles.length) {
      setImageFiles(validImageFiles)


      return
    }
    alert('Selected images are not of valid type!')
    // setFile((file) => [...file, event.target.files[0]])
  }

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

    // if (dataCart.status === 'task_waiting' || dataCart.status === 'task_note')
    setOpenTask(true)
    // setSelectedValue(dataCart.status)
    dataCart.comments = taskComment

    setDataCart(dataCart)
  }
  const handleCloseTask = () => setOpenTask(false)

  function handleSaveTask() {
    let convertId = 0
    
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


    }

    // dataCart.status = selectedValue
    if (inputEditTask !== dataCart.title) dataCart.title = inputEditTask

    dataCart.comments = taskComment
    dataCart.attachments = file
    setValueTabFile('1')
    setOpenNoti(true)
    setInputEditTask(dataCart.title)

    setInputAddNote('')
    setOpenTask(false)
    setDataCart(dataCart)
  }
  
  const handleOpenTaskColor = () => {
 
    setOpenTaskColor(true)
    setSelectedValue(dataCart.status)

  }
  const handleCloseTaskColor = () => setOpenTaskColor(false)

  function handleSaveTaskColor() {

    dataCart.status = selectedValue

    setOpenNoti(true)
    setDataCart(dataCart)
    setOpenTaskColor(false)
    
  }

  const shouldShowCardActions = () => {
    return (!!dataCart?.memberIds?.length || !!dataCart?.comments?.length || !!dataCart?.attachments?.length)
    // && dataCart.status === 'task_note'
  }

  const orderedChildrens = mapOrder(dataCart?.childrens, dataCart?.cardChildrenOrderIds, '_id')

  const TaskColor = (theme) => {
    if (dataCart.status === 'task_done') return theme.taskColor.task_done
    if (dataCart.status === 'task_done_na') return theme.taskColor.task_done_na
    if (dataCart.status === 'task_note') return theme.taskColor.task_note
    if (dataCart.status === 'task_waiting') return theme.taskColor.task_waiting
    if (dataCart.status === 'task_grey') return theme.taskColor.task_grey
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

  const imageTypeRegex = /image\/(png|jpg|jpeg)/gm

  return (
    //<div ref={setNodeRef} style={dndKitCardStyle} {...attributes} >

    <Box>
      <Card
        ref={setNodeRef} style={dndKitCardStyle} 
        sx={{
          cursor: 'pointer',
          boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
          overflow: 'unset',
          maxWidth: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          transition: '0.7s',
          position: 'relative',
          // '&:hover': { opacity: '0.7'}
        }}>
        <Box
          sx={{
            width: '35px',
            height: '100%',
            // mr: 1
          }} onClick={handleOpenTaskColor}>
          <Box {...attributes} {...listeners} sx={{
            // display: 'flex',
            backgroundColor: TaskColor,
            width: '30px',
            // height: '100%',
            // mx: 1,
            // p: '61px 15px',
            // borderRadius: '20px',
            transition: '0.7s',
            height: '100%',
            left: 0,
            top: 0,
            position: 'absolute',
            '&:hover': { opacity: '0.7'}
          }} ></Box>
        </Box>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openTaskColor}
          onClose={handleCloseTaskColor}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500
            }
          }}
        >
          <Fade in={openTaskColor}>
            {/* <Box sx={style}> */}
            <Box sx={style2}>

              {/* box Task Status */}
              <Box>
                <Box sx={{mt: 2}}>
                  <Typography
                    sx={{
                      fontSize: '17px',
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
                  p: 2,
                  m: '20px 0'
                }}>

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
                            color: '#01b10a'
                          },
                        }}
                      /> Done
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
                        backgroundColor: '#01b10a',
                        color: '#fff'
                      }}>X</Box>
                      <Radio
                        {...selectedValue === 'task_done_na'
                          ? 'disabled' : ''}
                        {...controlProps('task_done_na')}
                        sx={{
                          p: '9px 0',
                          color: '#01b10a',
                          '&.Mui-checked': {
                            color: '#01b10a'
                          },
                        }}
                      /> Done NA
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

                </Box>
              </Box>

              <Box sx={{m: '10px 0'}}>
                <Button sx={{}} variant="contained" onClick={handleSaveTaskColor}>
                  Save Status
                </Button>
              </Box>

            </Box>
            {/* </Box> */}
          </Fade>
        </Modal>
        <Box sx={{
          pl: '20px',
        }}>
          {dataCart?.childrens?.length > 0 &&
          <Box onClick={handleChilrenHidden}>
            {chilrenHiddenIcon}
          </Box>

          }
        </Box>

        {/* {card?.cover && <CardMedia sx={{ height: 140 }} image={card?.cover} />} */}

        <Box
          sx={{
            transition: '0.7s',
            '&:hover': { opacity: '0.7'}
          }} onClick={handleOpenTask}>
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
                    m: '10px 0',
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

              {/* Attachment */}
              <Box sx={{mt: 1}}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: '15px',
                      fontWeight: 'bold',
                      textTransform: 'uppercase'
                    }}
                    variant="subtitle1" gutterBottom
                  >
                    Task Attachment
                  </Typography>
                </Box>
                <Box sx={{
                  backgroundColor: '#fff',
                  p:1,
                  borderRadius: '6px'
                }}>
                  <TabContext value={valueTabFile}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <TabList onChange={handleChangeTabFile} aria-label="lab API tabs example">
                        <Tab label="List File" value="1" />
                        <Tab label="Upload File" value="2" />
                      </TabList>
                    </Box>
                    <TabPanel value="1" sx={{p: 1}}>

                      <Box sx={{
                        display: '-webkit-box',
                        justifyContent: 'space-evenly',
                        overflow: 'auto'
                      }}>
                        {file?.map((fileValue, index) => {
                          console.log('fileValue: ' + fileValue[0])
                          return (<Box sx={{
                            maxHeight: '90px', ml: '5px'
                          }} key={index}>
                            <Zoom><img style={{height: '90px'}} src={fileValue[0]} alt="" /></Zoom>
                            <Zoom>
                              <Document
                                file={{
                                  data: fileValue[0]
                                }}
                              >
                                <Page pageNumber='1' />
                              </Document>
                            </Zoom>
                          </Box>
                          )
                        })}
                      </Box>
                    </TabPanel>
                    <TabPanel value="2" sx={{p: 1}}>
                      <Box>

                        <TextField
                          color="success"
                          type="file"
                          variant="filled"
                          onChange={handleChangeFile}
                        />

                      </Box>
                    </TabPanel>

                  </TabContext>
                </Box>
              </Box>

              {/* box Task Notes */}
              <Box sx={{mt: 1}}>
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
                    maxHeight: '110px',
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
                m: '10px 0',
                width: '100%'
              }}>
                {/* <input ref={inputEditTask} type="text" /> */}
                {/* <Textarea placeholder="Type anything…" />; */}
                <TextField
                  id="outlined-multiline-static"
                  label="Add Note"
                  multiline
                  rows={4}
                  onChange={handleChangeAddNote }
                  defaultValue={inputAddNote}
                />
              </Box>
              <Box sx={{ m: '20px 0'}}>
                <Button sx={{}} variant="contained" onClick={handleSaveTask}>
                  Save Task
                </Button>
              </Box>

            </Box>
            {/* </Box> */}
          </Fade>
        </Modal>
      </Card>

      

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
   // </div>
    
  )
}

export default CardTask