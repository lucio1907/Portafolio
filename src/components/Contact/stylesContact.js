import styled from "styled-components";

export const ContainerForm = styled.div`
    width: 100%;
    background-color: #1c314e;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 30px;
`

export const Form = styled.form`
    margin-top: 40px;
    padding: 20px;
    width: 80%;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 6px;

    @media (min-width: 1000px) {
        margin-left: 120px;
    }
    
    @media (min-width: 1138px) {
        margin: 50px auto;
        width: 70%;
        padding: 0;
        padding-bottom: 50px;
        padding-left: 50px;
        padding-right: 50px;
    }
`

export const Label = styled.label` 
    font-family: 'Outfit', sans-serif;
    font-size: 18px;
    font-weight: 700;

    @media (min-width: 768px) {
        font-size: 21px;
    }
`

export const ContainerInput = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 6px;
    margin-top: 30px;

    @media (min-width: 768px) {
        margin-top: 80px;
        gap: 20px;
    }
`

export const Input = styled.input` 
    border: none;
    border-radius: 2px;
    padding: 7px;

    &::placeholder {
        font-family: 'Outfit', sans-serif;
    }

    &:focus-visible {
        outline: none;
        background-color: #00000012;
    }

    @media (min-width: 768px) {
        padding: 20px;

        &::placeholder {
            font-size: 18px;
        }
    }
`

export const InputTextArea = styled.input` 
    border: none;
    border-radius: 2px;
    padding-bottom: 70px;
    padding-left: 7px;
    padding-top: 7px;

    &::placeholder {
        font-family: 'Outfit', sans-serif;
    }

    &:focus-visible {
        outline: none;
        background-color: #00000012;
    }

    @media (min-width: 768px) {
        padding-left: 16px;
        padding-top: 16px;
        padding-bottom: 90px;
        
        &::placeholder {
            font-size: 18px;
        }
    }
`

export const Submit = styled.button` 
    margin-top: 30px;
    border: none;
    background-color: #1c314e;
    color: #fff;
    padding: 10px;
    border-radius: 2px;
    font-family: 'Outfit', sans-serif;
    text-transform: uppercase;
    transition: all 500ms ease;

    &:hover {
        background-color: #21376d;
        cursor: pointer;
    }
`

export const LinkLinkedin = styled.a`
    color: #ffff;
    font-size: 30px;
    transition: all 200ms ease;

    &:hover {
        color: #0077b5;
    }

    @media (min-width: 768px) {
        margin: 0 10px;
        font-size: 40px;
    }
`

export const EmailSuccess = styled.div` 
    margin-top: 40px;
    padding: 20px;
    width: 80%;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 6px;

    
    @media (min-width: 1000px) {
        margin: 50px auto;
        width: 70%;
        padding: 0;
        padding-bottom: 50px;
        padding-left: 50px;
        padding-right: 50px;
    }
`

export const MessageSucces = styled.p` 
    font-family: 'Outfit', sans-serif;
    font-size: 30px;
    text-align: center;
    position: relative;
    top: 5px;

    @media (min-width: 768px) {
        top: 20px;
    }
`

export const ImgCheck = styled.img`
    margin-top: 70px;
    width: 100px;
    animation: effect 2.4s ease;
    position: relative;
    bottom: 23px;

    @media (min-width: 768px) {
        bottom: 4px;
    }

    @keyframes effect {
        from {
            position: relative;
            left: -1000px;
            z-index: -1;
            filter: blur(6px);
        } to {
            position: relative;
            filter: blur(0px);
            left: 0;
        }
    }
`