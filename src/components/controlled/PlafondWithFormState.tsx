import React, { memo, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { ControllerRenderProps, InputState, useFormContext } from 'react-hook-form';
import { useMount } from '../../hooks/useMount';

const Container = styled.div`
  display: flex;
  gap: 50px;
`;

export const PlafondWithFormState = (field: ControllerRenderProps) => {
  const { value, onChange } = field;
  useMount('ControlledPlafondWithFormState');
  const onChecked = useCallback(() => {
    if (value === null) {
      onChange('');
    } else {
      onChange(null);
    }
  }, [onChange, value]);
  return (
    <Container>
      <label htmlFor="plafond">
        Plafond with form state:
        <input
          type="text"
          id="plafondWithFormState"
          value={value ?? ''}
          onChange={onChange}
          disabled={value === null}
        />
      </label>
      <label htmlFor="unlimited2">
        Illimitato
        <input type="checkbox" id="unlimited2" checked={value === null} onChange={onChecked} />
      </label>
    </Container>
  );
};
