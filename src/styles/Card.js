import styled from 'styled-components';
import BookLogo from '../resources/books.png';

export const CardBox = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: space-between;
   overflow: auto;
   padding: 0 0 32px;
   margin: 20vh auto 0;
   width: 400px;
   font-family: Quicksand, arial, sans-serif;
   box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.60);
   border-radius: 5px;
   background-color: #fff;

@media (min-width: 1280px) {
    max-width: 1280px;
}

@media (min-width: 1024px) {
    max-width: 1024px;
}

@media (min-width: 768px) {
    max-width: 768px;
}

@media (min-width: 640px) {
    max-width: 640px;
}

`;


export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
  position: relative;
  margin: 0 auto;
`;

export const HeaderImage = styled.div`
  background-image: url(${BookLogo});
  position: absolute;
  width: 64px;
  height: 64px;
  left: 13.5em;
  top: 0.5em;
`;

export const CardHeading = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const CardForm = styled.form`
   width: 100%;
`;

export const Spacer = styled.div`
    margin-top: 5%;
`;

export const CardOption = styled.button`
    width: 100%;
    height: 7vh;
    margin-top: 5%;
    border: 3px solid #5C62C2;
    border-radius: 25px;
    font-weight: bold;
    text-align: center;
    font-size: 1em;
    background-color: #fff;
    opacity: 0.7;
    transition: 0.4s;

    &:hover {
        background-color: #FF9F00;
        opacity: 1;
    }

`;