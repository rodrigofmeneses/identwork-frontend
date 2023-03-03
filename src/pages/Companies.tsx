import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Button, Table } from '../components'
import style from './styles/Companies.module.scss'
import routerStyle from './styles/Router.module.scss'

export default function Companies() {
  const navigate = useNavigate()

  const [header, setHeader] = useState(['Name', 'Actions'])
  const [companies, setEmployees] = useState([
    {
      name: 'Maré',
    },
    { name: 'LAP' },
  ])

  return (
    <div className={routerStyle.routerContainer}>
      <div className={style.topContainer}>
        <div>
          <div className={style.wrapper}>
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search" required />
            <Button>Search</Button>
          </div>
        </div>
        <div>
          <Button onClick={() => navigate('/add-company')}>Add Company</Button>
        </div>
      </div>
      <div className={style.tableContainer}>
        <Table
          title="Companies"
          checkbox={false}
          edit={false}
          header={header}
          content={companies}
        ></Table>
      </div>
    </div>
  )
}
