import "./App.css";
import { BodyOne } from "./BodyOne";
import { BodyThree } from "./BodyThree";
import { BodyTwo } from "./BodyTwo";
import { CustomerReview } from "./CustomerReview";
import { Footer } from "./Footer";
import { Header } from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <BodyOne />
      <BodyTwo />
      <BodyThree />
      <CustomerReview />
      <Footer />
      {/* <img className="image" src="public/images/polygon-2.png" alt="" /> */}
    </div>
  );
}



export default App;
