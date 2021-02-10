import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as events from 'events';
import { Slide, SlideTitle } from '../../components/ui/slide';
import { useSlide } from '../../hooks/useSlide';
import { intervalSchema, timetableSchema } from "../../utils/schema";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Error = styled.p`
  color: orangered;
`;

export const YupTransformExampleScreen = () => {
  useSlide();

  const { register, handleSubmit, formState } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(intervalSchema),
  });

  const onSubmit = (data: events) => console.log('Submit data:', data);

  console.log('Form state', formState);

  return (
    <Slide>
      <SlideTitle>Example Form</SlideTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="start">
          Start
          <input type="text" name="start" ref={register} id="start" />
          <Error>{formState.errors.start?.message ?? ''}</Error>
        </label>
        <label htmlFor="end">
          End
          <input type="text" name="end" ref={register} id="end" />
          <Error>{formState.errors.end?.message ?? ''}</Error>
        </label>
        <button type="submit" className="button" disabled={!formState.isValid}>
          Submit
        </button>
        <Error>{formState.errors?.message ?? ''}</Error>
      </Form>
    </Slide>
  );
};
