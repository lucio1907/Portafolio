import styled from 'styled-components'
import stylesLoader from'../Loader/loader.module.css'

const LoaderContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #1C314E;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const Loader = () => {
  return (
    <LoaderContainer>
      <div className={stylesLoader['loader']}>
        <div className={stylesLoader['waves']}></div>
      </div>
    </LoaderContainer>
  )
}

export default Loader