import AppCSS from "./App.module.css";
import BackButton from "./components/BackButton";
import Header from "./components/Header";
import ProductView from "./components/ProductView";
import DescriptionCard from "./components/DescriptionCard";
import Description from "./components/Description";

function App() {
  const productName = "Lorem ipsum dolor sit amet.";
  const productPrice = 299.99;
  const oldProductPrice = 399.99;
  const productID = "1123323434345454444564564";
  return (
    <>
      <Header productName={productName} productPrice={productPrice}></Header>
      <div className={AppCSS.body}>
        <BackButton></BackButton>
        <br />
        <br />
        <br />
        <ProductView productID={productID}></ProductView>
        <Description productID={productID}></Description>
      </div>
    </>
  );
}

export default App;
