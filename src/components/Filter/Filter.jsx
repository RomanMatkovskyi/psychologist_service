const Filter = () => {
  return (
    <div>
      <p className="mb-2">Filters</p>
      <select
        name="filter"
        className="py-3.5 px-[18px] rounded-[14px] bg-mainOrange text-mainWhite"
      >
        <option value="alphabet">A to Z</option>
        <option value="revAlphabet">Z to A</option>
        <option value="<10">Less than 10$</option>
        <option value=">10">Greater than 10$</option>
        <option value="popular">Popular</option>
        <option value="nopPpular">Not popular</option>
        <option value="all">Show all</option>
      </select>
    </div>
  );
};

export default Filter;
