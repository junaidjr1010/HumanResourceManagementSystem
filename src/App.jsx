import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import EmployeesStatistics from './Dashboard/EmployeesStatistics'
import StatsCards from './components/StatsCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sidebar/>
    <div className="ml-48 p-8">
      <h1 className="text-xl font-bold text-blue-800 mb-6">Dashboard</h1>
      <StatsCards/>
      <div className="mt-2">
        <EmployeesStatistics/>
      </div>
    </div>
    </>
  )
}

export default App
