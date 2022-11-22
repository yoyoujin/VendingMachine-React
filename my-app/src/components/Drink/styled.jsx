import styled from 'styled-components';

export const DrinkWrapper = styled.li`
  width: 94px;
  height: 130px;
  text-align: center;
  text-decoration: none;
  list-style: none;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  border-radius: 10px;
  padding: 11px 0 9px;
  cursor: pointer;
  position: relative;

  &.on {
    outline: 3px solid #6327fe;
  }

  img {
    width: 36px;
    box-sizing: border-box;
  }

  p {
    width: 70px;
    font-weight: 500;
    font-size: 9px;
    line-height: 10px;
    margin: 6px auto 0;
    box-sizing: border-box;

    &:last-child {
      font-weight: 500;
      font-size: 12px;
      line-height: 100%;
      color: #fff;
      padding: 5px 0;
      border-radius: 50px;
      background-color: #6327fe;
    }
  }
`;
