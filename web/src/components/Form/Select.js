import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

export default function Select({ name, ...rest }) {
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
      <select ref={inputRef} {...rest} />
    </>
  );
}
