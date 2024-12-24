import React from "react";

function FirstRender() {
  return (
    <React.StrictMode>
      <h1>First rendering Component............</h1>
    </React.StrictMode>
  );
}
function SecondRender() {
  return (
    <React.StrictMode>
      <h1>Second rendering Component............</h1>
    </React.StrictMode>
  );
}

export default function ConditionalRender() {
  let isrender = true;
  let content;
  isrender ? content = <FirstRender />  : content = <SecondRender />
  return content;
}
