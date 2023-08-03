import { useState } from 'react'
import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect/ModeSelect'
import AppIcon from '@mui/icons-material/Apps'
import { ReactComponent as realesateLogo } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Profiles from './Menus/Profiles'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

function AppBar() {

  const [searchValue, setSearchValue] = useState('')

  return (
    <Box sx={{
      // backgroundColor: 'primary.light',
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppIcon sx={{ color: 'white' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon component={realesateLogo} fontSize="small" inheritViewBox sx={{ color: 'white' }} />
          <Typography variant="span" sx={{fontSize: '1.2rem', fontWeight: 'bold', color: 'white'}} >
            Realesate</Typography>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button
            sx={{ 
              color: 'white',
              border: 'none',
              '&:hover': { border: 'none'}
            }}
            variant="outlined" 
            startIcon={<LibraryAddIcon />}
          >
            Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField 
          id="outline-search"
          label="Search..."
          type="text"
          size='small'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                fontSize='small'
                sx={{ color: searchValue ? 'white' : 'transparent', cursor: 'pointer' }}
                onClick={(e) => setSearchValue('')}
              />
            )
          }}
          sx={{
            minWidth: 120,
            maxWidth: 170,
            '& label': { color: 'white' },
            '& input': { color: 'white' },
            '& label.Mui-focused': { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset' : { borderColor: 'white' },
              '&:hover fieldset' : { borderColor: 'white' },
              '&.Mui-focused fieldset' : { borderColor: 'white' }
            }
          }}
        />

        <ModeSelect />

        <Tooltip title="Notifications">
          <Badge color="warning" variant="dot" sx={{cursor: 'pointer'}}>
            <NotificationsIcon sx={{ color: 'white' }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help" sx={{cursor: 'pointer'}}>
          <HelpOutlineIcon sx={{ color: 'white' }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  )
}
export default AppBar
