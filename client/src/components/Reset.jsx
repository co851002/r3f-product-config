import React from 'react'

import CustomButton from './CustomButton'
import state, {initialStateObj} from '../store';
import { deepClone } from '../config/helpers';



const Reset = () => {
  function reset(e) {
    console.log(e,'reset')
    const resetObj = deepClone(initialStateObj);
    Object.keys(resetObj).forEach((key) => {
        state[key] = resetObj[key];
    });    
  };

  return (
    <></>
  )
}

export default Reset