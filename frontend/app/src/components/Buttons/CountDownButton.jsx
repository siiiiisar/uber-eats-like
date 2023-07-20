import React from 'react';

// style
import { RoundButton } from '../shared_style';

export const CountDownButton = (props) => {
  const {onClick,isDisabled} = props;

  return(
    <RoundButton onClick={onClick} disabled={isDisabled}>
    ー
  </RoundButton>
  )

}
