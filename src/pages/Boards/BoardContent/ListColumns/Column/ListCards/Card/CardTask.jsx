import Card  from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'

function CardTask({ temporaryHideMedia }) {

  if (temporaryHideMedia) {
    return (
      <Card sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
        overflow: 'unset'
      }}>
        <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
          <Typography>Task test 01</Typography>
        </CardContent>

      </Card>
    )
  }

  return (
    <Card sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
      overflow: 'unset'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://media.discordapp.net/attachments/975603557048930364/1136578625207025694/Hinh-nen-2021_3.jpg?width=830&height=531"
        title="green iguana"
      />
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>Task Realesate</Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px 4px' }}>
        <Button size="small" startIcon={<GroupIcon />}>20</Button>
        <Button size="small" startIcon={<CommentIcon />}>15</Button>
        <Button size="small" startIcon={<AttachmentIcon />}>10</Button>
      </CardActions>
    </Card>
  )
}

export default CardTask