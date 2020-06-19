import styled from 'styled-components';

export const BoxResult = styled.div`
  width: 770px;
  height: 553px;
  overflow: overlay;

  margin-left: 15px;
  border-collapse: collapse;

  background: #ffffff;
  border-radius: 4px;
  margin-bottom: 30px;

  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE and Edge */
  & {
    -ms-overflow-style: none;
  }
`;

export const BoxResultTr = styled.div`
  height: 57px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  flex: 1;
  flex-direction: row;
  justify-content: space-between;

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  &:hover {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: bold;
    cursor: pointer;
    font-size: 14px;
    background: rgba(255, 153, 0, 0.78);
  }
`;

export const BoxResultTrTitle = styled.div`
  height: 57px;
  width: 770px;
  margin-top: 20px;
  margin-left: 15px;
  border-radius: 4px;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const BoxResultTh = styled.div`
  flex: 1;
`;

export const BoxResultTh1 = styled.div`
  flex: 3;
`;

export const BoxResultTh2 = styled.div`
  flex: 1;
`;

export const BoxResultTh3 = styled.div`
  flex: 1;
`;

export const BoxResultTh4 = styled.div`
  flex: 1;
`;

export const BoxResultTh5 = styled.div`
  flex: 1;
`;

export const BoxResultTd = styled.div`
  flex: 1;
`;

export const BoxResultTd1 = styled.div`
  flex: 1;
  flex: 3;
`;

export const BoxResultTd2 = styled.div`
  flex: 1;
`;

export const BoxResultTd3 = styled.div`
  flex: 1;
`;

export const BoxResultTd4 = styled.div`
  flex: 1;
`;

export const BoxResultTd5 = styled.div`
  flex: 1;
`;
