import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { InputData } from './styles';

export default function Input({ name, width, height, marginBottom, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
    //eslint-disable-next-line
  }, [inputRef, registerField]);

  return (
    <>
      <InputData
        ref={inputRef}
        {...rest}
        style={{ width, height, marginBottom }}
      />
    </>
  );
}
