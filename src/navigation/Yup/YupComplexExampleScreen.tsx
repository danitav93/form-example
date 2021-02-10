/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as events from 'events';
import { Slide, SlideTitle } from '../../components/ui/slide';
import { useSlide } from '../../hooks/useSlide';
import { StringSingleDay, stringSingleDaySchema } from '../../utils/schema';

export const YupComplexExampleScreen = () => {
  useSlide();

  const { register, handleSubmit, formState, control } = useForm({
    mode: 'onChange',
    resolver: yupResolver(stringSingleDaySchema),
    defaultValues: {
      day: [
        { start: '12:20', end: '14:00' },
        { start: '15:00', end: '16:00' },
      ],
    } as StringSingleDay,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'day',
  });

  // eslint-disable-next-line no-console
  const onSubmit = (data: events) => console.log('Submit data:', data);

  const { errors } = formState;

  return (
    <Slide>
      <SlideTitle>Complex Form</SlideTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <IntervalContainer key={field.id}>
            <label htmlFor="start">
              Start
              <input
                type="text"
                name={`day[${index}].start`}
                ref={register}
                defaultValue={field.start}
              />
              <Error>{errors?.day?.[index]?.start?.message ?? ''}</Error>
            </label>
            <label htmlFor="end">
              End
              <input
                type="text"
                name={`day[${index}].end`}
                ref={register}
                defaultValue={field.end}
              />
              <Error>{formState.errors?.day?.[index]?.end?.message ?? ''}</Error>
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
        <button type="submit" className="button" disabled={!formState.isValid}>
          Submit
        </button>
      </Form>
    </Slide>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Error = styled.p`
  color: orangered;
`;

const IntervalContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
