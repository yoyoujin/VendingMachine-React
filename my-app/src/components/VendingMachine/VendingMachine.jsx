import Drink from '../Drink/Drink';
import { VendingMachineWrapper } from './styled';

const VendingMachine = ({ drink }) => {
  console.log(drink);
  return (
    <VendingMachineWrapper>
      <ul>
        {drink.map((item, idx) => (
          <Drink drinkData={item} key={idx} />
        ))}
      </ul>
    </VendingMachineWrapper>
  );
};

export default VendingMachine;
