import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <>
        <h1>{`Página de Error`}</h1>
        <h3>{error.statusText || error.message}</h3>
        <Link to="/">Volver</Link>
    </>
  )
}
