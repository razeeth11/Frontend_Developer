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
      <MicComp/>
      <BodyTwo />
      <BodyThree />
      <CustomerReview />
      <Footer />
    </div>
  );
}

function MicComp(){
  return(
    <div className="div">
      <div className="mic-comp">
      <img src="src/images/pngwing 1.png" alt="" />
    </div>
    <div className="podcast">
      <img src="public/images/group-79.png" alt=""/>
    </div>
    </div>
  )
}



export default App;
