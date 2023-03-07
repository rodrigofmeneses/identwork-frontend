import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Table } from '../components'
import { ICompany } from '../types/company'
import style from './styles/Companies.module.scss'
import routerStyle from './styles/Router.module.scss'

export default function Companies() {
  const navigate = useNavigate()

  const [header, setHeader] = useState(['ID', 'Name', 'Actions'])
  const [companies, setCompanies] = useState<ICompany[]>([])
  const [selected, setSelected] = useState<ICompany>()

  const selectCompany = (selectedCompany: ICompany) => {
    setSelected(selectedCompany)
    setCompanies(prevCompanies =>
      prevCompanies.map(company => ({
        ...company,
        selected: selectedCompany.id === company.id,
      }))
    )
  }

  const deleteCompany = async (id: string) => {
    try {
      await axios.delete(`http://localhost:7777/companies/${id}`)
    } catch (e) {
      console.log(e)
    }
  }

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
          header={header}
          content={companies}
          checkbox={false}
          onDelete={deleteCompany}
        ></Table>
      </div>
    </div>
  )
}
