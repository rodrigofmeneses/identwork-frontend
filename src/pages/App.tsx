import { RouterProvider } from 'react-router-dom'
import { Header } from '../components/Header/index'
import { Sidebar } from '../components/Sidebar/index'
import { router } from '../routes'
import style from './styles/App.module.scss'

function App() {
  return (
    <main className={style.mainPageContainer}>
      <Header />
      <div className={style.routerContainer}>
        <Sidebar />
        <RouterProvider router={router} />
      </div>
    </main>
  )
}

export default App
