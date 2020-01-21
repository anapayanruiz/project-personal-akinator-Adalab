import React from 'react';




function Question(props) {
  return (
    <React.Fragment>
      <h3 className="title--medium ">{props.question}</h3>
    </React.Fragment>
  );
}

export default Question;
