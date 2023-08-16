import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import BoardTaskContent from './BoardTaskContent/BoardTaskContent'
import { mockData } from '~/apis/mock-data'

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh', backgroundColor:'primary.main' }}>
      <AppBar />
      <BoardBar board={mockData?.board} />
      {/* <BoardContent board={mockData?.board} /> */}
      <BoardTaskContent boards={mockData?.tasks} />
    </Container>
  )
}
export default Board
