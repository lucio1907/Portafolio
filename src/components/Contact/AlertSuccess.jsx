import React from 'react'
import { EmailSuccess, ImgCheck, MessageSucces } from './stylesContact'
import check from '../../img/check.png'

const AlertSuccess = () => {
  return (
    <EmailSuccess>
        <MessageSucces>Correo enviado correctamente...</MessageSucces>
        <ImgCheck src={check} alt="check" />
    </EmailSuccess>
  )
}

export default AlertSuccess