import { CVButtonContainer, Span } from "./stylesHome"
import stylesButton from './style/buttoncv.module.css'
import CV from '../../img/Cv.pdf'

const ButtonCv = () => {
  return (
    <CVButtonContainer>
        <a className={stylesButton['fancy']} href={CV} download='Lucio Gastellu Arrieta CV'>
            <span className={stylesButton['top-key']}></span>
            <Span className={stylesButton['text']}>Descarga mi CV</Span>
            <span className={stylesButton['bottom-key-1']}></span>
            <span className={stylesButton['bottom-key-2']}></span>
        </a>
      </CVButtonContainer>
  )
}

export default ButtonCv