export function BodyThree() {
  return (
    <div className="body-three">
      <div className="body-three-title">
        <h1>Choose your plan</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's{" "}
        </p>
      </div>
      <div className="body-three-toggle">
        <p>Monthly</p>
        <p>Yearly</p>
      </div>
      <div className="body-three-plan">
        <PlanComp />
        <PlanComp />
        <PlanComp />
      </div>
    </div>
  );
}
function PlanComp() {
  return (
    <div className="plan-details">
      <p className="plan-head">Basic Plan</p>
      <p className="plan-content">
        Lorem Ipsum is simply dummy text of the printing and typesetting
      </p>
      <h3>
        $ 54 <span className="month">/month</span>
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
