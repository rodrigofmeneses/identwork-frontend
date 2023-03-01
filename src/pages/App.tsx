import { RouterProvider } from 'react-router-dom'
import { Header } from '../components/Header/index'
import { Sidebar } from '../components/Sidebar/index'
import { router } from '../routes'
import style from './styles/App.module.scss'

function App() {
  return (
    <main className={style.mainPage}>
      <Header />
      <div className={style.content}>
        <div className={style.sidebar}>
          <Sidebar />
        </div>
        <div className={style.router}>
          <RouterProvider router={router} />
        </div>
      </div>
    </main>
  )
}

export default App
