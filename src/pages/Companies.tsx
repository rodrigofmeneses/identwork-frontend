import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Button, Table } from '../components'
import style from './styles/Companies.module.scss'
import routerStyle from './styles/Router.module.scss'
import { ICompany } from '../types/company'
import axios from 'axios'

export default function Companies() {
  const navigate = useNavigate()

  const [header, setHeader] = useState(['ID', 'Name', 'Actions'])
  const [companies, setCompanies] = useState<ICompany[]>([])

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:7777/companies',
    })
      .then(res => {
        const resCompanies = res.data
        setCompanies(resCompanies)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

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
          header={header}
          content={companies}
        ></Table>
      </div>
    </div>
  )
}
