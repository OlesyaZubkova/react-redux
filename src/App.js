import "./App.css";
import ServiceFilter from "./components/ServiceFilter";
import ServiceForm from "./components/ServiceForm";
import ServiceList from "./components/ServiceList";

function App() {
  return (
    <>
      <ServiceForm />
      <ServiceFilter />
      <ServiceList />
    </>
  );
}

export default App;
