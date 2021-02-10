/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as events from 'events';
import { Slide, SlideTitle } from '../../components/ui/slide';
import { useSlide } from '../../hooks/useSlide';
import { StringTimetable, stringTimetableSchema } from '../../utils/schema';
import { IntervalsArray } from './IntervalsArray';

export const YupVeryComplexExampleScreen = () => {
  useSlide();

  const { register, handleSubmit, formState, control } = useForm({
    mode: 'onChange',
    resolver: yupResolver(stringTimetableSchema),
    defaultValues: {
      days: [
        { day: [{ start: '15:00', end: '19:00' }] },
        { day: [] },
        { day: [] },
        { day: [{ start: '00:00', end: '24:00' }] },
        { day: [{ start: '00:00', end: '12:00' }] },
      ],
    } as StringTimetable,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'days',
  });

  // eslint-disable-next-line no-console
  const onSubmit = (data: events) => console.log('Submit data:', data);

  return (
    <Slide>
      <SlideTitle>Very complex Form</SlideTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <IntervalsArray
            key={field.id}
            name={`days[${index}].day`}
            parentIndex={index}
            control={control}
            register={register}
            selfRemove={remove}
            formState={formState}
          />
        ))}
        <button
          type="button"
          className="button"
          onClick={() => append({ day: [{ start: '', end: '' }] })}
        >
          Add day
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
