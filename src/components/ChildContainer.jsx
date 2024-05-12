import React from "react";
import logo from "../images/dog.jpg";

function ChildContainer({ name }) {
  return (
    <div className={`child ${name}`}>
      <h1>Data Neuron</h1>
      <h4>
        DataNeuron is revolutionizing the conventional Supervised NLP Workflows
        through an automation based SaaS product.
      </h4>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default ChildContainer;
