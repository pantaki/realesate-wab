import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterIcon from '@mui/icons-material/Filter'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatters'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar({ board }) {

  return (
    <Box sx={{
      // backgroundColor: 'primary.dark',
      backgroundColor: '#fff',
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label={board?.title}
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add to Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterIcon />}
          label="Filters"
          clickable
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover' : { borderColor: 'white' }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={5}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title="User1">
            <Avatar
              alt="User1"
              src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png" />
          </Tooltip>
          <Tooltip title="User1">
            <Avatar
              alt="User1"
              src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Pic.png" />
          </Tooltip>
          <Tooltip title="User1">
            <Avatar
              alt="User1"
              src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photo.png" />
          </Tooltip>
          <Tooltip title="User1">
            <Avatar
              alt="User1"
              src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png" />
          </Tooltip>
          <Tooltip title="User1">
            <Avatar
              alt="User1"
              src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Image-File.png" />
          </Tooltip>
          <Tooltip title="User1">
            <Avatar
              alt="User1"
              src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png" />
          </Tooltip>
          <Tooltip title="User1">
            <Avatar
              alt="User1"
              src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Pic.png" />
          </Tooltip>
          <Tooltip title="User1">
            <Avatar
              alt="User1"
              src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photo.png" />
          </Tooltip>
          <Tooltip title="User1">
            <Avatar
              alt="User1"
              src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png" />
          </Tooltip>
          <Tooltip title="User1">
            <Avatar
              alt="User1"
              src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Image-File.png" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}
export default BoardBar
