import styled from 'styled-components';

export const Header = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;

  justify-content: left;
  align-items: center;
  padding-left: 51px;

  background: #3899ec;
`;

export const TitleTopo = styled.h1`
  width: 389px;
  height: 56px;

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  margin-left: 3px;

  color: #ffffff;
`;
