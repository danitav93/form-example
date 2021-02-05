import React, { FormEvent, useRef, useState } from 'react';
import styled from 'styled-components';
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
export const FormStateUncontrolledWithDefaultScreen = () => {
  useSlide(true);
  useMount();

  const text = useRef<HTMLInputElement | null>(null);
  const checkBox = useRef<HTMLInputElement | null>(null);
  const radio = useRef<HTMLInputElement | null>(null);
  const time = useRef<HTMLInputElement | null>(null);
  const select = useRef<HTMLSelectElement | null>(null);

  const [preview, setPreview] = useState('');

  const onSubmit = (event: FormEvent) => {
    setPreview(
      JSON.stringify({
        text: text.current?.value,
        checkBox: checkBox.current?.checked,
        radio: radio.current?.checked,
        time: time.current?.value,
        select: select.current?.value,
      }),
    );
    event.preventDefault();
  };

  return (
    <Container>
      <StyledSlideTitle>Uncontrolled with default</StyledSlideTitle>
      <FormContainer onSubmit={onSubmit}>
        <label htmlFor="text">
          Text:
          <input type="text" id="text" name="text" ref={text} defaultValue="pippo" />
        </label>
        <label htmlFor="checkbox">
          Checkbox:
          <input type="checkbox" name="checkbox" id="checkbox" ref={checkBox} defaultChecked />
        </label>
        <label htmlFor="radio">
          Radio:
          <input type="radio" id="radio1" name="radio" value="1" ref={radio} defaultChecked />
          <input type="radio" id="radio2" name="radio" value="2" ref={radio} />
          <input type="radio" id="radio3" name="radio" value="3" ref={radio} />
        </label>
        <label htmlFor="time">
          Time:
          <input type="time" id="time" name="time" ref={time} defaultValue="12:12" />
        </label>
        <label htmlFor="select">
          Select:
          <select name="select" id="select" ref={select} defaultValue="option3">
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
        <span>{preview}</span>
      </StateContainer>
    </Container>
  );
};
