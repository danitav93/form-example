import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { SlideTitle } from '../../components/ui/slide';
import { useSlide } from '../../hooks/useSlide';
import { useMount } from '../../hooks/useMount';

const Container = styled.div`
  flex: 1;
  display: grid;
  place-content: center;
  grid-template-columns: 800px 800px;
  grid-gap: 40px;
  justify-items: center;
`;

const StateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const StyledSlideTitle = styled(SlideTitle)`
  grid-column: 1 / -1;
`;

interface Form {
  text: string;
  checkbox: boolean;
  radio: 1 | 2 | 3;
  time: string;
  select: 'option1' | 'option2' | 'option3' | 'option4';
}

export const ReactHookFormFirstExampleScreen = () => {
  useSlide(true);
  useMount();

  const { register, handleSubmit, watch } = useForm<Form>();

  // eslint-disable-next-line no-console
  const onSubmit = (data: Form) => console.log(data);

  const current = watch();

  return (
    <Container>
      <StyledSlideTitle>Example</StyledSlideTitle>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="text">
          Text:
          <input type="text" id="text" name="text" ref={register} />
        </label>
        <label htmlFor="checkbox">
          Checkbox:
          <input type="checkbox" name="checkbox" id="checkbox" ref={register} />
        </label>
        <label htmlFor="radio">
          Radio:
          <input type="radio" id="radio1" name="radio" value="1" ref={register} />
          <input type="radio" id="radio2" name="radio" value="2" ref={register} />
          <input type="radio" id="radio3" name="radio" value="3" ref={register} />
        </label>
        <label htmlFor="time">
          Time:
          <input type="time" id="time" name="time" ref={register} />
        </label>
        <label htmlFor="select">
          Select:
          <select name="select" id="select" ref={register}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </label>
        <button type="submit" className="button">
          Form state
        </button>
      </FormContainer>
      <StateContainer>
        <span>{JSON.stringify(current)}</span>
      </StateContainer>
    </Container>
  );
};
