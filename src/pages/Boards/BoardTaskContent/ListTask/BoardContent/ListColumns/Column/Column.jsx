import { useEffect , useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Cloud from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Tooltip from '@mui/material/Tooltip'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ListCards from './ListCards/ListCards'
import { mapOrder } from '~/utils/sorts'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import ListCardsHeader from './ListCardsHeader/ListCardsHeader'
import Fade from '@mui/material/Fade'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import Backdrop from '@mui/material/Backdrop'

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

function Column({ cards, column, columns, board }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: column._id,
    data: { ...column }
  })

  const dndKitColumnStyle = {
    // touchActive: 'none',
    // change transform to Translate
    transform: CSS.Translate.toString(transform),
    transition,
    // error drag 100%
    height: '100%',
    opacity: isDragging ? 0.5 : undefined
  }

  const [anchorEl, setAnchorEl] = useState(null)
  const [columnData, setColumnData] = useState(column)
  const [columnsData, setColumnsData] = useState(columns)
  const [boardData, setBoardData] = useState(board)
  const [openNewTask, setOpenNewTask] = useState(false)
  const [selectedValueName, setSelectedValueName] = useState()
  const [inputNewTask, setInputNewTask] = useState('')
  const [dataCards, setDataCards] = useState(cards)
  const [cardOrderIds, setCardOrderIds] = useState(column.cardOrderIds)
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('count', count)
    console.log('boardData', boardData)
    console.log('columnData', columnData)
    console.log('cardOrderIds', cardOrderIds)
    // const convertId = CardConvertId(columnsData.lastColumnCardId)
    // columnData.cardOrderIds = cardOrderIds
    // columnData.cards = dataCards
    // columnData.cardLastId = convertId
    // columnsData.lastColumnCardId = convertId
    // setColumnData(columnData)
    // setColumnsData(columnsData)
}, [ cardOrderIds, columnData, columnsData, boardData, count, dataCards])

  const handleOpenTask = () => {
    setCount(count + 1)
    setOpenNewTask(true)
  }

  const handleCloseNewTask = () => setOpenNewTask(false)

  function handleSaveNewName() {

    const convertId = CardConvertId(boardData.lastColumnCardId)
    console.log('handleNewCard column: ', columnData )


    if(cardOrderIds.indexOf(convertId) === -1) {
      const arrNew = {
        _id: convertId,
        boardId: 'board-id-01',
        columnId: columnData?.cards[0].columnId,
        childrens: [],
        status: 'task_grey',
        title: inputNewTask,
        description: null,
        cover: null,
        memberIds: [],
        comments: [],
        attachments: []
      }
      setDataCards( (dataCards) => [...dataCards, arrNew])
      setCardOrderIds( (cardOrderIds) => [...cardOrderIds, convertId])
      columnData.cardOrderIds = cardOrderIds
      columnData.cards = dataCards
      columnData.cardLastId = convertId
      boardData.lastColumnCardId = convertId
      setColumnData(columnData)
      setBoardData(boardData)

    }
    setInputNewTask('')
    setOpenNewTask(false)

  }

  const open = Boolean(anchorEl)
  const handleClick = (event) => { setAnchorEl(event.currentTarget) }
  const handleClose = () => { setAnchorEl(null) }

  const orderedCards = mapOrder(columnData?.cards, columnData?.cardOrderIds, '_id')

  const CardConvertId = (id) => {
    const arrData = id.split('-')
    const idNew = parseInt(arrData[2]) + 1
    const dataConvert = arrData[0] + '-' + arrData[1] + '-' + idNew
    return dataConvert
  }

  const newTaskData = (data, newValue) => {
    setDataCards( (data) => [...data, newValue])
  }

 

  return (
    // <div ref={setNodeRef} style={dndKitColumnStyle} {...attributes} >
    <Box
      {...listeners}
      sx={{
        minWidth: '300px',
        minHeight: '700px',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
        ml: '3px',
        borderRadius: '6px',
        height: 'fit-content',
        overflow: 'auto',
        maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
      }}>
      {/* Box column Header */}
      <Box sx={{
        // width: '244px',
        m: '25px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Box sx={{
          // width: '180px',
          minHeight: '140px',
          p: 2,
          borderRadius: '8px',
          backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#6a6f89' : '#dbdbdb')
          // m: '10px 10%',
          // p: '15px 10px'
        }}>
          <Box sx={{
            p: '10px 0'
          }}>{columnData.title} {count}</Box>
          <ListCardsHeader cards={orderedCards} />
        </Box>
      </Box>

      <Box sx={{
        height: (theme) => theme.trello.columnHeaderHeight,
        mb: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '2px solid #ddd'
      }}>
        <Typography variant="h6" sx={{
          fontSize: '21px',
          fontWeight: 'bold',
          cursor: 'pointer',
          p: '10px 0',
          textTransform: 'uppercase'
        }}>
          {columnData?.title}
        </Typography>
        {/* <Box>
          <Tooltip title="More Option">
            <ExpandMoreIcon
              sx={{ color: 'text.primary', cursor: 'pointer' }}
              id="basic-column-dropdown"
              aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
          </Tooltip>
          <Menu
            id="basic-menu-column-dropdown"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-column-dropdown'
            }}
          >
            <MenuItem>
              <ListItemIcon><AddCardIcon fontSize="small" /></ListItemIcon>
              <ListItemText>Add new card </ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon><ContentCut fontSize="small" /></ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon><ContentCopy fontSize="small" /></ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon><ContentPaste fontSize="small" /></ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon><DeleteForeverIcon fontSize="small" /></ListItemIcon>
              <ListItemText>Remove this column</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon><Cloud fontSize="small" /></ListItemIcon>
              <ListItemText>Archive this column</ListItemText>
            </MenuItem>
          </Menu>
        </Box> */}
      </Box>

      <ListCards cards={orderedCards} />

      {/* Box column Footer */}
      <Box sx={{
        height: (theme) => theme.trello.columnFooterHeight,
        p: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Button onClick={handleOpenTask} startIcon={<AddCardIcon />}>Add new card</Button>
        <Tooltip title="Drap to move">
          <DragHandleIcon sx={{ cursor: 'pointer' }} />
        </Tooltip>
      </Box>
      <Box>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openNewTask}
          onClose={handleCloseNewTask}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500
            }
          }}
        >
          <Fade in={openNewTask}>
            {/* <Box sx={style}> */}
            <Box sx={style2}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                New Task
              </Typography>
              <Box sx={{
                display: 'grid',
                m: '20px 0',
                width: '100%'
              }}>
                {/* <input ref={inputEditTask} type="text" /> */}
                {/* <Textarea placeholder="Type anything…" />; */}
                <TextField
                  id="outlined-multiline-static-new-task"
                  label="Type text here"
                  multiline
                  rows={4}
                  onChange={(v) => setInputNewTask(v.target.value) }
                  defaultValue={inputNewTask}
                />
              </Box>
              <div className="button-modal">
                <Button variant="contained" onClick={handleSaveNewName}>
                  Save Task
                </Button>
              </div>
            </Box>
            {/* </Box> */}
          </Fade>
        </Modal>
      </Box>
    </Box>
    // </div>

  )
}

export default Column