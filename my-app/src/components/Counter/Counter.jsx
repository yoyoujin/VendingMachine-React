import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT, INCREMENT } from '../../redux/reducers/reducers';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  // initialState안에 있는 state를 선택

  const dispatch = useDispatch();

  const onClickIncrement = () => {
    dispatch({ type: INCREMENT });
  };
  const onClickDecrement = () => {
    dispatch({ type: DECREMENT });
  };

  return (
    <>
      <div>{counter}</div>
      <button onClick={onClickIncrement}>더하기</button>
      <button onClick={onClickDecrement}>빼기</button>
    </>
  );
};

export default Counter;
