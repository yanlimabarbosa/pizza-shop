import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <>
      <Helmet title="Dashboard" />
      <h1>Header</h1>

      <div>
        <Outlet />
      </div>
    </>
  )
}
