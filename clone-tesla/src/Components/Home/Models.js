import React from 'react';
import styled from 'styled-components';



const Models = ({title, text, leftBtn, rightBtn, backgroundImg, dropdown, ifDropDownExists, ifblackColorExits}) => {
  return (
      <div>
      <Background style={{background: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <Container>
          <TextItem>
              <h1>{title}</h1>
              <p>{text}</p>
          </TextItem>
          <ButtonItem>
              <ButtonGroup>
                  <button type="button" className={`left-btn ${ifblackColorExits && "blackColor"}`}>{leftBtn}</button>
                  {
                    rightBtn &&
                    <button type="button" className="right-btn">{rightBtn}</button>
                  }
                  
              </ButtonGroup>
              {
              ifDropDownExists &&
              <img src={dropdown} alt="img/drop" />
              }
              
          </ButtonItem>
        </Container>
      </Background>
      </div>
    );
  };

const Background = styled.section`
    min-height: 100vh;
`;

const Container = styled.div`
    width: 95%;
    margin: 0 auto;

    display: flex;
    min-height: 91vh;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`;
const TextItem = styled.div`
    
  padding-top: 11rem;
  h1{
        color: #171A20CC;   
        font-weight: 500;
        font-size: 3rem;
    }
    p{
        font-weight: 300;
    }
`;
const ButtonItem = styled.div`
  overflow: hidden;  
  img{
      width: 24px;
      height: 24px;
      object-fit: contain;
      opacity: 1;
      z-index: 1500;
      margin: 3vh 2rem 0 0;

      animation: animateDown 1.5s infinite;

    }
`;
const ButtonGroup = styled.div`
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;

      button{
        outline: none;
        border: none;
        text-transform: uppercase;
        padding: 0.8rem 5rem;
        margin: 0 10px;
        font-size: 14px;
        font-weight: 400;
        border-radius: 100px;
        transition: all 0.7s ease-in-out;
      }
`;

export default Models