import React, { useCallback } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import Select from 'react-select';
import { useMount } from '../../hooks/useMount';

const options = [1, 2, 3].map((id) => ({
  value: { id: `id${id}`, name: `name${id}` },
  label: `name${id}`,
}));

export function ControlledSelect({
  onChange,
  value,
}: InferProps<typeof ControlledSelect.propTypes>) {
  useMount('ControlledSelect');

  const onOptionChange = useCallback(
    (newOption) => {
      onChange(newOption.value);
    },
    [onChange],
  );

  return (
    <Select
      onChange={onOptionChange}
      value={value ? { value, label: value.name } : undefined}
      options={options}
    />
  );
}

ControlledSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

ControlledSelect.defaultProps = {
  value: undefined,
};
