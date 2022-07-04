import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className='flex flex-row mx-4'>
        <Sidebar />
        <ProductList />
      </div>
    </>
  );
}

export default App;
