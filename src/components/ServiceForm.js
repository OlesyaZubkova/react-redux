import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

function ServiceForm() {
  const dispatch = useDispatch();
  const editedService = useSelector((state) => state.serviceForm);
  const [form, setForm] = useState(editedService);

  useEffect(() => {
    setForm(editedService);
  }, [editedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_SERVICE",
      payload: form,
    });
    clearForm();
  };

  const clearForm = () => {
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        onChange={handleChange}
        value={form.name}
      />
      <input
        name="price"
        type="text"
        onChange={handleChange}
        value={form.price}
      />
      <button onClick={handleSubmit}>Save</button>
      <button type="button" onClick={clearForm}>
        Cancel
      </button>
    </form>
  );
}

export default ServiceForm;
