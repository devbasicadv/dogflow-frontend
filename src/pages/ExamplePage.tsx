import React from "react";

interface IExamplePage {
  title: string;
}

const ExamplePage: React.FC<IExamplePage> = ({ title }) => {
  return (
    <>
      <h2>Welcome to {title}</h2>
      <p>This is a responsive layout with a fixed header and footer.</p>
      <p>Scroll down to see the effect.</p>      
    </>
  );
};

export default ExamplePage;
