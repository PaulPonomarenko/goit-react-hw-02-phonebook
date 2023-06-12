export const Filter = ({ onChange, value }) => {
  return (
    <>
      <label htmlFor="filter">Find contact by name</label>
      <input type="text" id="filter" value={value} onChange={onChange} />
    </>
  );
};
