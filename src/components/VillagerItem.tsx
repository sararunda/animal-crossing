import { Villager } from '../types/types';
interface VillageritemProps {
  villager: Villager;
}
const VillagerItem = (props: VillageritemProps) => {
  return (
    <div>
      <div>
        <img
          className="TshirtItem__container-item__image"
          src={props.villager.photo}
          alt="foto camiseta"
        />
        <p className="TshirtItem__container-item__name">
          {props.villager.name}
        </p>
        <button type="button" className="TshirtItem__container-item__add">
          Añadir
        </button>
      </div>
    </div>
  );
};
export default VillagerItem;
