import React from 'react'
import AlertPing from './AlertPing'

export default function HeroButton({name,onClick}) {
  return (
    <>
        <button onClick={onClick} type='button' className='btn' style={{color:"white",backgroundColor:"rgba(28, 28, 33, 1)",width:"280px",height:"45px"}}><AlertPing/>{name}</button>
    </>
  )
}
