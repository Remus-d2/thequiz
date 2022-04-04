import styled from 'styled-components';

export const ResultsBox = styled.div`
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

export const ResultsHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const ResultsHeading = styled.h1`
  font-size: 2em;
  font-weight: bold;
  text-align: center;
`;

export const ResultsBody = styled.div`
  text-align: center;
`;
