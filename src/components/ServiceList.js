import { useSelector, useDispatch } from "react-redux";

function ServiceList() {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.serviceList);
  const filterValue = useSelector((state) => state.serviceFilter.filterValue);

  const filtredServices = services.filter((item) =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const handleEdit = (id) => {
    const serviceToEdit = services.find((item) => item.id === id);
    dispatch({
      type: "SET_FORM",
      payload: serviceToEdit,
    });
  };

  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE_SERVICE",
      payload: id,
    });
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <ul>
      {filtredServices &&
        filtredServices.map((o) => (
          <li key={o.id}>
            {o.name} {o.price}
            <button onClick={() => handleEdit(o.id)}>Edit</button>
            <button onClick={() => handleRemove(o.id)}>✕</button>
          </li>
        ))}
    </ul>
  );
}

export default ServiceList;
