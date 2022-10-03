import React from "react";
import { Button, ButtonProps } from '@preamp/core';

export interface props extends ButtonProps {
//Extend properties here
}

export default function ButtonPreamp(props: props) {
  return (
    <Button
      {...props}
    >
      {props.children}
    </Button>
  );
}
