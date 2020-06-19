import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageProd = styled.div`
  width: 744px;
  height: 223.74px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 60px;
  background: #f5e8ff;
  border: 4px solid rgba(82, 0, 255, 0.23);
  box-sizing: border-box;
  border-radius: 4px;
`;

export const AltImage = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 29px;
  line-height: 34px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #9c9090;
`;

export const ComboInput = styled.div`
  width: 744px;
  height: 154px;
  margin-top: 20px;
  background: blue;
`;

export const ButtonSave = styled.button`
  width: 180px;
  height: 59px;
  background: #51e369;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: Center;
  cursor: pointer;
  border: none;
  &:hover {
    box-shadow: 0 0 1em #0000009c;
  }
`;

export const ButtonCancel = styled.button`
  width: 180px;
  height: 59px;
  background: #ff6767;
  border-radius: 4px;
  margin-left: 43px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: Center;
  cursor: pointer;
  border: none;

  &:hover {
    box-shadow: 0 0 1em #0000009c;
  }
`;

export const TextBtn = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;

  color: #ffffff;
  margin-left: 4px;
`;

export const ComboButton = styled.div`
  margin-top: 10px;
  width: 100%;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const FormInput = styled.div`
  width: 744px;
  height: 154px;
  background: #f00;
`;
