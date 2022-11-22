import { useState } from 'react';
import { DrinkWrapper } from './styled';

const Drink = ({ drinkData }) => {
  const { image, price, title } = drinkData;
  const [isActive, setIsActive] = useState(false);

  const onClickisActive = () => {
    setIsActive(true);
  };

  return (
    <DrinkWrapper onClick={onClickisActive} className={`${isActive ? 'on' : ''}`}>
      <img src={image} alt='콜라' />
      <p>{title}</p>
      <p>{price}원</p>
    </DrinkWrapper>
  );
};
export default Drink;
