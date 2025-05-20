import React from 'react'

type Props = {
  children : React.ReactNode,
}

const Head = ({children}: Props) => {
  return (
    <h1 className='text-2xl font-bold font-montserrat '>{children}</h1>
  )
}

export default Head