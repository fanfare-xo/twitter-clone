import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 45vw;
  height: 100vh;
  padding: 70px;
  &:first-child {
    align-items: center;
  }
  &:nth-child(2) {
    flex-direction: column;
    align-items: left;
  }
`;

export const Logo = styled.svg`
  width: 380px;
`;

export const Text = styled.span`
  font-weight: 700;
  &:first-child {
    font-size: 60px;
  }
  &:nth-child(2) {
    margin-top: 50px;
    font-size: 30px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  width: 300px;
  height: 40px;
  border: 1px solid #cfd9de;
  border-radius: 20px;
  font-size: 14px;
  &:hover {
    background-color: #e6e6e6;
    transition: background-color 0.5s ease;
  }
  &[type='submit'] {
    cursor: pointer;
    background-color: #1d9bf0;
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    &:hover {
      opacity: 0.8;
      transition: opacity 0.5s ease;
    }
  }
  &[type='button'] {
    cursor: pointer;
    background-color: #ffffff;
    color: #1d9bf0;
    font-size: 15px;
    font-weight: 700;
    &:hover {
      background-color: #1d9bf01a;
      transition: background-color 0.5s ease;
    }
  }
`;

export const Error = styled.span`
  color: #ff3f3f;
  font-size: 14px;
`;

export const Switcher = styled.div`
  p {
    padding-bottom: 20px;
    font-size: 18px;
    font-weight: 700;
  }
  a {
    text-decoration: none;
    color: #1d96f0;
  }
`;
