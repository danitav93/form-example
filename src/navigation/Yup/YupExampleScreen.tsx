import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaOf, object, string, number } from 'yup';
import * as events from 'events';
import { Slide, SlideTitle } from '../../components/ui/slide';
import { useSlide } from '../../hooks/useSlide';
import { useMount } from '../../hooks/useMount';

interface Data {
  username: string;
  age: number;
  email: string;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Error = styled.p`
  color: orangered;
`;

export const YupExampleScreen = () => {
  useMount('Example');
  useSlide();

  const schema: SchemaOf<Data> = object({
    username: string().required('Il campo e obbligatorio').min(1, 'asdjfklasjdf'),
    age: number().typeError('Il campo deve essere un numero').required(),
    email: string().required('Il campo e obbligatorio').email('Email non valida'),
  });

  const { register, handleSubmit, formState } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: events) => console.log('Submit data:', data);

  return (
    <Slide>
      <SlideTitle>Example Form</SlideTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">
          Username
          <input type="text" name="username" ref={register} id="username" />
          <Error>{formState.errors.username?.message ?? ''}</Error>
        </label>
        <label htmlFor="age">
          Age
          <input type="number" name="age" ref={register} id="age" />
          <Error>{formState.errors.age?.message ?? ''}</Error>
        </label>
        <label htmlFor="email">
          Email
          <input type="text" name="email" ref={register} id="email" />
          <Error>{formState.errors.email?.message ?? ''}</Error>
        </label>
        <button type="submit" className="button" disabled={!formState.isValid}>
          Submit
        </button>
      </Form>
    </Slide>
  );
};
