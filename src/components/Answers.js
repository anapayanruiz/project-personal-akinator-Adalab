import React from 'react';
import Button from './Button';


function Answers(props) {
  return (
    <div>
      <div>
        <Button value="Si" handleClick={props.handleClick} />
        <Button value="No" handleClick={props.handleClick} />
      </div>
    </div>
  );
}

export default Answers;
