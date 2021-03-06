import React from 'react';
import { Link as ReactRouterDomLink } from 'react-router-dom';
import styled from 'styled-components';
import { THEME } from '../../common/constant/theme';
import { asRem } from '../../helpers';

const Ul = styled.ul`
  list-style: none;
  width: 60%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0;

  @media (max-width: 790px) {
    flex-direction: column;
    justify-content: flex-start;
    flex-flow: column wrap;
    position: fixed;
    box-sizing: border-box;
    background: #eee;
    margin: 0;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    padding-top: 50px;
    height: 100vh;
    width: 70%;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
  }

  .Link:hover {
    transition: border-bottom 0.4s linear;
    border-bottom: 1px solid #fff;
  }
`;

const Link = styled(ReactRouterDomLink)`
  display: inline;
  padding: 10px;
  color: #100f10;
  text-decoration: none;
  font-size: 80%;
  font-family: ${THEME.font.fontFamily};
  font-weight: ${THEME.font.weight.bold};
  text-transform: uppercase;
  border: 1px solid #eee;
  margin-right: 1.5rem;

  :hover {
    transition: border-bottom 0.4s linear;
    border-bottom: 1px solid #100f10;
  }

  :last-of-type {
    border-bottom: none;
    transition: none;
  }
`;

const LoginBtn = styled.button`
  width: ${asRem(40)};
  border: none;
  padding: 10px 30px;
  background-color: #0074b7;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  border-radius: 18px;
  transition: background-color 0.2s ease-in-out;
  outline: none;

  :hover {
    background-color: #145da0;
  }
`;

export const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to='/'> Home </Link>
      <Link to='/about-me'>About Me</Link>
      <Link to='/login'>
        <LoginBtn>Login</LoginBtn>
      </Link>
    </Ul>
  );
};
