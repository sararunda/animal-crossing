import { Villager } from '../../types/types';
import Image from 'next/image';
interface VillageritemProps {
  villager: Villager;
}
const VillagerItem = (props: VillageritemProps) => {
  return (
    <div>
      <div>
        <Image
          width={200}
          height={200}
          src={props.villager.photo}
          alt="foto camiseta"
        />
        <p>{props.villager.name}</p>
        <p>{props.villager.species}</p>
        <button type="button">+ info</button>
      </div>
    </div>
  );
};
export default VillagerItem;
