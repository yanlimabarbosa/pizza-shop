import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <>
      <Helmet title="Login" />
      <h1>Autenticação</h1>

      <div>
        <Outlet />
      </div>
    </>
  )
}
