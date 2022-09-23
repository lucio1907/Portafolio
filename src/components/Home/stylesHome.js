import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #1C314E;
    display: flex;
    flex-direction: column;
`

export const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    gap: 10px;
`

export const Greetings = styled.p`
    font-family: 'Inter', sans-serif;
    text-align: center;
    padding: 0 20px;
    color: #fff;

    @media (min-width: 768px) {
        font-size: 28px;
        font-weight: 600;
    }
`

export const DeveloperName = styled.p` 
    text-align: center;
    font-family: 'Outfit', sans-serif;
    font-size: 25px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #228aff;
    padding: 0 20px;

    @media (min-width: 768px) {
        font-size: 36px;
    }
`

export const Stack = styled.h1` 
    text-align: center;
    font-family: 'Outfit', sans-serif;
    font-size: 25px;
    text-transform: uppercase;
    color: #fff;
    padding: 0 20px;
    margin-top: 10px;
    letter-spacing: 3px;
 
    @media (min-width: 768px) {
        font-size: 36px;
    }

    @media (min-width: 1066px) {
        font-size: 50px;
    }
`

export const Span = styled.span` 
    text-align: center;
    font-family: 'Inter', sans-serif;
    color: #fff;
    padding: 0 20px;
    line-height: 32px;

    @media (min-width: 768px) {
        font-size: 28px;
        font-weight: 600;
    }
`

export const Span2 = styled.span`
    text-align: center;
    font-family: 'Inter', sans-serif;
    color: #fff;
    line-height: 32px;
    padding: 0 20px;
    text-align: left;

    @media (min-width: 768px) {
        width: 50%;
    }
`



export const ScrollDown = styled.a` 
    color: #fff;
    font-size: 30px;
    padding: 20px;
    animation: bouncer 1.3s ease infinite;
    z-index: 0;
    border-radius: 100%;
    margin-top: 20px;
    width: 30px;
    height: 30px;
    transition: all 500ms ease;

    &:hover {
        box-shadow: -0px 10px 0px 5px #fff;
        animation: buttonEffect 500ms ease;
        animation: bouncer 1.3s ease infinite;

    }

    @keyframes bouncer {
        0% {
            position: relative;
            top: 0px;
        } 
        50% {
            position: relative;
            top: 7px;
        }
        100% {
            position: relative;
            top: 0px;
        }
    }

    @keyframes buttonEffect {
        from {
            box-shadow: -0px 0px 0px 0px #fff;
        } 
        to {
            box-shadow: -0px 0px 0px 5px #fff;
        }
    }
`

export const CVButtonContainer = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    justify-content: center;
    align-items: center;
    padding: 20px;
    position: relative;
    top: 74vh;
`