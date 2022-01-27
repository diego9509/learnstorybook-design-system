import React from 'react';

export default function Task({ task: { id, title, value } }) {

  const stepArray = [
    50, 100, 200, 300, 400, 500, 600, 700, 800, 900
  ]
  const stepList = stepArray.map((step) => <div className={
    String(step) == "500" ? title +'-text-color ' + title + "-" + String(step):
    '' + title + "-" + String(step)}
  >{step}</div>);
  
  return (
    <div className="step-wrapper">
      {stepList}
    </div>
  );
}