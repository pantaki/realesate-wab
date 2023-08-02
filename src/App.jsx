import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import HomeIcon from '@mui/icons-material/Home'
import { pink } from '@mui/material/colors'

function App() {

  return (
    <>
      <div>test dev</div>
      <Button variant="text">text</Button>
      <Button variant="contained">Hello World</Button>
      <Button variant="outlined">outlined</Button>
      <br />
      <AccessAlarmIcon />
      <ThreeDRotation />
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[700] }} />

    </>
  )
}

export default App
