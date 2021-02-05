import React, { useCallback, useState } from 'react';
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

interface Form {
  text: string;
  checkbox: boolean;
  radio: 1 | 2 | 3;
  time: string;
  select: 'option1' | 'option2' | 'option3' | 'option4';
}

export const FormStateControlledScreen = () => {
  useSlide(true);

  useMount();

  const [form, setForm] = useState<Form>({
    text: 'wololo',
    checkbox: true,
    radio: 1,
    time: '',
    select: 'option2',
  });

  const onTextChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((oldForm) => ({
      ...oldForm,
      text: event.target.value,
    }));
  }, []);

  const onCheckboxChange = useCallback(() => {
    setForm((oldForm) => ({
      ...oldForm,
      checkbox: !oldForm.checkbox,
    }));
  }, []);

  const onRadioChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((oldForm) => ({
      ...oldForm,
      radio: +event.target.value as 1 | 2 | 3,
    }));
  }, []);

  const onTimeChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((oldForm) => ({
      ...oldForm,
      time: event.target.value,
    }));
  }, []);

  const onSelectChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setForm((oldForm) => ({
      ...oldForm,
      select: event.target.value as 'option1' | 'option2' | 'option3',
    }));
  }, []);

  return (
    <Container>
      <StyledSlideTitle>Controlled example</StyledSlideTitle>
      <FormContainer>
        <label htmlFor="text">
          Text:
          <input type="text" id="text" name="text" onChange={onTextChange} value={form.text} />
        </label>
        <label htmlFor="checkbox">
          Checkbox:
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            onChange={onCheckboxChange}
            checked={form.checkbox}
          />
        </label>
        <label htmlFor="radio1">
          Radio:
          {[1, 2, 3].map((radioOption) => (
            <input
              type="radio"
              id={`radio${radioOption}`}
              name="radio"
              value={radioOption}
              checked={form.radio === radioOption}
              onChange={onRadioChange}
            />
          ))}
        </label>
        <label htmlFor="time">
          Time:
          <input type="time" id="time" name="time" value={form.time} onChange={onTimeChange} />
        </label>
        <label htmlFor="select">
          Select:
          <select name="select" id="select" value={form.select} onChange={onSelectChange}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </label>
      </FormContainer>
      <StateContainer>
        <span>{JSON.stringify(form)}</span>
      </StateContainer>
    </Container>
  );
};
