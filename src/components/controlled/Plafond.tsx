import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes, { InferProps } from 'prop-types';
import { useMount } from '../../hooks/useMount';

const Container = styled.div`
  display: flex;
  gap: 50px;
`;

export function Plafond({ onChange, value }: InferProps<typeof Plafond.propTypes>) {
  useMount('ControlledPlafond');
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
        Plafond:
        <input
          type="text"
          id="plafond"
          value={value ?? ''}
          onChange={onChange}
          disabled={value === null}
        />
      </label>
      <label htmlFor="unlimited">
        Illimitato
        <input type="checkbox" id="unlimited" checked={value === null} onChange={onChecked} />
      </label>
    </Container>
  );
}

Plafond.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Plafond.defaultProps = {
  value: undefined,
};
