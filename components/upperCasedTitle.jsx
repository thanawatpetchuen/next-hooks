import React, { useState } from 'react';
import MyContext from './context';

const UpperCasedTitle = () => {
  return (
    <MyContext.Consumer>
      {(context) => (
        <h3>{context.nameState.name} has done of {context.state.count} times</h3>
      )}
    </MyContext.Consumer>
  )
}

export default UpperCasedTitle