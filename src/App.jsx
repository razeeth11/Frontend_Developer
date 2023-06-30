import "./App.css";
import { ComponentOne } from "./ComponentOne";
import { ComponentThree } from "./ComponentThree";
import { ComponentTwo } from "./ComponentTwo";
import { CustomerReview } from "./CustomerReview";
import { Footer } from "./Footer";
import { Header } from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <ComponentOne />
      <MicComp />
      <ComponentTwo />
      <ComponentThree />
      <CustomerReview />
      <Footer />
    </div>
  );
}

function MicComp() {
  return (
    <div className="div">
      <div className="mic-comp">
        <img src="src/images/pngwing 1.png" alt="" />
      </div>
      <div className="podcast">
        <img src="public/images/group-79.png" alt="" />
      </div>
    </div>
  );
}

export default App;
