import VillagerItem from './VillagerItem';
import { Villager } from '../types/types';
interface VillagersListProps {
  villagers: Villager[];
}
const VillagersList = (props: VillagersListProps) => {
  const renderList = () => {
    return props.villagers.map((item, index) => {
      return (
        <li key={index}>
          <VillagerItem key={index} villager={item} />
        </li>
      );
    });
  };

  return renderList().length > 0 ? (
    <ul className="list">
      <h2 className="list__title-events">Villagers:</h2>
      {renderList()}
    </ul>
  ) : (
    <p>loading</p>
  );
};
export default VillagersList;
