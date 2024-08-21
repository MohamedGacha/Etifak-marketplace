import AppCSS from "./App.module.css";
import BackButton from "./components/BackButton";
import Header from "./components/Header";
import ProductView from "./components/ProductView";
import DescriptionCard from "./components/DescriptionCard";
import Description from "./components/Description";
import ProductCard from "./components/ProductCard";
import ShowCase from "./components/ShowCase";
import VendorDescription from "./components/VendorDescription";
import Comments from "./components/Comments";
import Footer from "./components/Footer";

function App() {
  const productName = "Lorem ipsum dolor sit amet.";
  const productPrice = 299.99;
  const oldProductPrice = 399.99;
  const productID = "1123323434345454444564564";
  const vendorDescription: string = `Lorem ipsum dolor sit amet. Aut error laborum ab minus rerum est iusto iste aut amet asperiores et porro optio qui consectetur autem in impedit expedita! Hic quae repellat ex fugiat omnis aut itaque animi ex dolorem ipsa ut sequi labore eos numquam fuga ut nisi rerum. Eum inventore officia sit esse perspiciatis ab impedit galisum sit sint magni? \nSit corporis voluptas et quis quidem non perferendis distinctio quo sapiente dicta. Hic repudiandae velit quo veritatis incidunt quo assumenda voluptas et itaque repudiandae qui praesentium quibusdam.`;

  // Define an array of products with different 'mode' values
  const products = Array.from({ length: 7 }, (_, index) => {
    let mode: "none" | "discount" | "decrease";
    // Assign different modes based on the index
    if (index % 3 === 0) {
      mode = "discount"; // Apply discount mode every third product
    } else if (index % 3 === 1) {
      mode = "decrease"; // Apply decrease mode every other third product
    } else {
      mode = "none"; // Default to no special mode
    }

    return {
      productID: `product-${index}`,
      title: productName,
      price: productPrice,
      oldPrice: oldProductPrice,
      rating: 4.5,
      mode: mode,
    };
  });

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
        <ShowCase title="Often purchased with" products={products} />
        <DescriptionCard title="About the vendor">
          <VendorDescription
            description={vendorDescription}
          ></VendorDescription>
        </DescriptionCard>
        <ShowCase title="You might be interested by" products={products} />
        <Comments productID={productID} />
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
