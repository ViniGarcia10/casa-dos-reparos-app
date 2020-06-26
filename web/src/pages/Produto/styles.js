import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const BoxSearch = styled.div`
  display: flex;
  margin-left: 15px;
  margin-top: 57px;
  width: 770px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  background: #fff;
  border-radius: 16px;
`;

export const DescriptionSearch = styled.input`
  height: 100%;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 33px;
  line-height: 39px;
  border: none;
  flex: 20;
  color: #ff9900;
  border-radius: 16px;
  text-transform: uppercase;
`;

export const ContainerBox = styled.div`
  width: 100%;
  height: 100%;
  /* background: #0f0; */
  display: flex;
`;

export const BoxLeft = styled.div`
  flex: 1;
  /* background: #ff0; */
`;

export const BoxRight = styled.div`
  display: ${(props) => (props.modeClean ? 'flex' : 'block')};
  width: 553px;
  margin-top: ${(props) => (props.modeClean ? '0px' : '46px')};
  /* background: #f00; */
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
`;

export const ComboOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const ItemsOptionsProd = styled.div`
  width: 70px;
  height: 70px;

  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 53.12%),
    #3899ec;
  border: 1px solid #6764ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: width 2s;

  &:hover {
    background: linear-gradient(
        180deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 53.12%
      ),
      rgba(255, 153, 0, 0.78);
    cursor: pointer;
    border: none;
  }
`;

export const ItemTitle = styled.p`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 4px;
  justify-content: center;

  color: #000000;
`;

export const ContainerCombo = styled.div`
  /* height: 30px; */
  display: flex;
  flex-direction: row;
  width: 560px;
  height: 88px;
  justify-content: center;

  /* background: #f00; */
`;

export const PictureProd = styled.div`
  width: 550px;
  height: 279.13px;

  background: #fff;
  margin: 5px 0px 0px 10px;
  border-radius: 4px;
`;

export const DetailsProd = styled.div`
  width: 550px;
  height: 293px;

  margin: 2px 0px 30px 10px;
  border-radius: 4px;

  display: grid;
`;

export const DetailsPicture = styled.p`
  position: absolute;
  width: auto;
  height: auto;
  padding: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  overflow: hidden;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 0px 20px black;
  background: rgba(0, 0, 0, 0.28);
`;

export const ImageProd = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const DescriptionProd = styled.p`
  width: 550px;
  height: 62.14px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #000000;
  grid-column: 1 / span 3;
  grid-row: 1;
`;

export const DescriptionProdBlue = styled.div`
  width: 173px;
  height: 45.84px;
  background: ${(props) => (props.disable ? '#53585d' : '#3899ec')};
  border-radius: 22px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
`;

export const TitleDescription = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  text-align: center;

  color: #000;
`;

export const TitleDescriptionResult = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;

  color: ${(props) => props.color || '#fff'};
`;

export const DescriptionProdBlueBig = styled.div`
  width: 362px;
  height: 104.84px;
  background: #3899ec;
  border-radius: 22px;
  display: block;
  grid-row: 4 / 6;
  grid-column: 1 / span 2;
`;

export const TitleDescriptionBig = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 46px;
  text-align: center;
  color: #000;
`;

export const TitleDescriptionResultBig = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
`;
