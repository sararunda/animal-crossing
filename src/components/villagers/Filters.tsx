import { prependOnceListener } from 'process';
import FilterName from './FilterName';
interface FiltersProps {
  handleChangeFilterName(filterVillagerValue: string): void;
}
const Filters = (props: FiltersProps) => {
  return (
    <form action="">
      <FilterName handleChangeFilterName={props.handleChangeFilterName} />
    </form>
  );
};
export default Filters;
