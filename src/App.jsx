import "./App.css";
import { BodyOne } from "./BodyOne";
import { BodyThree } from "./BodyThree";
import { BodyTwo } from "./BodyTwo";
import { Header } from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <BodyOne />
      <BodyTwo />
      <BodyThree />
      <CustomerReview />
    </div>
  );
}

function CustomerReview() {
  return (
    <div className="customer-review">
      <div className="content-review">
        <h1>Review from customers</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry
        </p>
      </div>
    </div>
  );
}

export default App;
