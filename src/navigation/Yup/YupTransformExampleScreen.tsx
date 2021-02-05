import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as events from 'events';
import { Slide, SlideTitle } from '../../components/ui/slide';
import { useSlide } from '../../hooks/useSlide';
import { intervalSchema } from '../../utils/schema';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Error = styled.p`
  color: orangered;
`;

export const YupTransformExampleScreen = () => {
  useSlide();

  const schema = intervalSchema;

  const { register, handleSubmit, watch, errors, formState } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema, { strict: false, stripUnknown: true }),
  });

  const onSubmit = (data: events) => console.log('Submit data:', data);

  console.log('Watch', watch());
  console.log('Errors', errors);
  console.log('Form state', formState);

  return (
    <Slide>
      <SlideTitle>Example Form</SlideTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="start">
          Start
          <input type="text" name="start" ref={register} id="start" />
          <Error>{errors.start && errors.start.message}</Error>
        </label>
        <label htmlFor="end">
          End
          <input type="text" name="end" ref={register} id="end" />
          <Error>{errors.end && errors.end.message}</Error>
        </label>
        <button type="submit" className="button" disabled={!formState.isValid}>
          Submit
        </button>
        <Error>{errors.message && errors.message}</Error>
      </Form>
    </Slide>
  );
};
