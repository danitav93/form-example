/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { FormState, useFieldArray } from 'react-hook-form';
import { SchemaOf } from 'yup';
import * as yup from 'yup';
import { StringTimetable } from '../../utils/schema';

export const stringIntervalItemSchema: SchemaOf<string> = yup
  .string()
  .matches(/^[10]?\d:\d{2}$/, 'Formato non valido')
  .required('Il campo e richiesto');

export const IntervalsArray = ({
  name,
  parentIndex,
  control,
  register,
  formState,
  selfRemove,
}: {
  name: string;
  parentIndex: number;
  control: any;
  register: any;
  formState: FormState<StringTimetable>;
  selfRemove: any;
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  const day = name as keyof StringTimetable;
  const { errors } = formState;

  return (
    <Container>
      <H2>Day {parentIndex}</H2>
      {fields.map((field, index) => (
        <IntervalContainer key={field.id}>
          <label htmlFor="start">
            Start
            <Input
              type="text"
              name={`days[${parentIndex}].day[${index}].start`}
              ref={register}
              defaultValue={field?.start ?? ''}
            />
            <Error>{errors?.days?.[parentIndex]?.day?.[index]?.start?.message ?? ''}</Error>
          </label>
          <label htmlFor="end">
            End
            <Input
              type="text"
              name={`days[${parentIndex}].day[${index}].end`}
              ref={register}
              defaultValue={field?.end ?? ''}
            />
            <Error>{errors?.days?.[parentIndex]?.day?.[index]?.end?.message ?? ''}</Error>
          </label>
          <button type="button" className="button" onClick={() => remove(index)}>
            Remove
          </button>
        </IntervalContainer>
      ))}
      <button
        type="button"
        className="button"
        onClick={() => append({ start: '00:00', end: '00:00' })}
      >
        Add
      </button>
      <button
        type="button"
        className="button"
        onClick={() => selfRemove()}
      >
        Remove
      </button>
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 2px solid gray;
`;

const Error = styled.p`
  color: orangered;
`;

const Input = styled.input`
  width: auto !important;
`;

const IntervalContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr max-content;
  gap: 20px;
`;

const H2 = styled.h2`
  color: white;
`;
