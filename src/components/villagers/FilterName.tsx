interface FilterNameProps {
  handleChangeFilterName(filterVillagerValue: string): void;
}
const FilterName = (props: FilterNameProps) => {
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterVillagerValue = event.target.value as string; //casting to string
    props.handleChangeFilterName(filterVillagerValue);
  };
  return (
    <div>
      <label htmlFor="">Name</label>
      <input onChange={handleChangeInput} type="text" />
    </div>
  );
};
export default FilterName;
