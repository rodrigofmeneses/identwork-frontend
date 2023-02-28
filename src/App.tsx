import style from './App.module.scss'
import { Navbar } from './components/Navbar/Navbar'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Table } from './components/Table/Table'

function App() {
  return (
    <div>
      <div>
        <Navbar title="Linda"></Navbar>
      </div>
      <div className={style.mainPageContainer}>
        <Sidebar></Sidebar>
        <Table></Table>
      </div>
    </div>
  )
}

export default App
