import { useDispatch, useSelector } from "react-redux";

function ServiceFilter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.serviceFilter.filterValue);

  const handleChange = (e) => {
    dispatch({
      type: "SET_FILTER",
      payload: e.target.value,
    });
  };

  return (
    <>
      <div>Фильтровать</div>
      <input name="filter" type="text" onChange={handleChange} value={filter} />
    </>
  );
}

export default ServiceFilter;
