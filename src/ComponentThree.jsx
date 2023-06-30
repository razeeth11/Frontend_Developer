import { useState } from "react";

export function ComponentThree() {
  const [show, setShow] = useState(false);

  const style = {
    background: show ? "var(--light, rgba(225, 166, 255, 0.4))" : "#FFF",
  };
  const style2 = {
    background: show ? "#FFF" : "var(--light, rgba(225, 166, 255, 0.4))",
  };

  return (
    <div className="component-three">
      <div className="component-three-title">
        <h1 className="comp-three-heading">Choose your plan</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
      </div>
      <div className="component-three-toggle">
        <p
          className="comp-three-para"
          style={style2}
          onClick={() => setShow(false)}
        >
          Monthly
        </p>
        <p
          className="comp-three-para"
          style={style}
          onClick={() => setShow(true)}
        >
          Yearly
        </p>
      </div>
      <div className="component-three-plan">
        <PlanComp show={show} />
        <PlanComp show={show} />
        <PlanComp show={show} />
      </div>
    </div>
  );
}
function PlanComp({ show }) {
  return (
    <div className="plan-details">
      <p className="plan-head">Basic Plan</p>
      <p className="plan-content">
        Lorem Ipsum is simply dummy text of the printing and typesetting
      </p>
      <h3 className="plan-heading3">
        $ {show ? 648 : 54}
        <span className="month">{show ? "/year" : "/month"}</span>
      </h3>
      <ul>
        <li>Free access to video class</li>
        <li>Free access to video class</li>
        <li>Free access to video class</li>
      </ul>
      <button className="plan-button">Start Free Trial</button>
    </div>
  );
}
