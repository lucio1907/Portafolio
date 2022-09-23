import styled from "styled-components";

export const ContainerProjects = styled.div`
    width: 100%;
    background-color: #1c314e;
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const GridProjects = styled.div` 
    margin-top: 30px;
    padding: 20px;
    display: grid;
    grid-template-rows: repeat(5, minmax(0, 1fr));

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-template-rows: repeat(2, minmax(0, 1fr));
        width: 80%;
        margin-left: 40px;
        gap: 50px;
    }

    @media (min-width: 1463px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
`

export const CardProject = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProjectTitle = styled.h4` 
    font-size: 21px;
    font-family: 'Outfit', sans-serif;
    color: #aebff4;
    text-align: center;
`

export const ProjectDescription = styled.p` 
    font-family: 'Outfit', sans-serif;
    font-size: 17px;
    text-align: center;
    color: #fff;
    padding: 20px;
`

export const ImageProjects = styled.img`
    width: 300px;
    height: 12rem;
    border-radius: 5px;

    @media (min-width: 768px) {
        width: 350px;
        transition: all 500ms ease;

        &:hover {
            transform: scale(1.10);
            filter: drop-shadow(0px 1px 6px #00080F);
        }
    }
`

export const ContainerLinks = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0;
    width: 100%;
    gap: 40px;

    @media (min-width: 768px) {
        justify-content: center;
        
    }
`

export const LinkGit = styled.a`
    background-color: #8324ff;
    padding: 10px;
    font-family: 'Outfit', sans-serif;
    font-weight: 700;
    color: #fff;
    border-radius: 4px;
    transition: all 300ms ease;

    &:hover { 
        background-color: #5d00d7;
        color: #bebebe;
    }
`

export const ButtonProject = styled.button`
    background-color: ${({proj}) => proj.link ? '#f1f5f9' : '#bebebe'};
    padding: 12px;
    font-family: 'Outfit', sans-serif;
    font-weight: 500;
    border-radius: 4px;
    color: #000;
    transition: all 300ms ease;
    border: none;

    &:hover {
        background-color: #bebebe;
        cursor: ${({proj}) => proj.link ? 'pointer' : 'not-allowed'};
    }
`