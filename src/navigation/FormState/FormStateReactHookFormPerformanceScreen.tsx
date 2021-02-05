import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { SlideTitle } from '../../components/ui/slide';
import { useSlide } from '../../hooks/useSlide';
import { useMount } from '../../hooks/useMount';
import { ColouredComponent } from '../../components/reactHookFormPerformances/ColouredComponent';

const Container = styled.div`
  flex: 1;
  display: grid;
  place-content: center;
  grid-template-columns: 600px 600px;
  grid-gap: 40px;
  justify-items: stretch;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const StyledTitle = styled(SlideTitle)`
  grid-column: 1 / -1;
`;

interface Form {
  text: string;
}

export const FormStateReactHookFormPerformanceScreen = () => {
  useSlide(true);
  useMount('MainContainer');

  const { register } = useForm<Form>();

  const [controlledText, setControlledText] = useState('');

  const onControlledTextChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setControlledText(event.target.value);
  }, []);

  return (
    <Container>
      <StyledTitle>Performance</StyledTitle>
      <FormContainer>
        <label htmlFor="text">
          Text (RHF):
          <input type="text" id="text" name="text" ref={register} />
        </label>
      </FormContainer>
      <FormContainer>
        <label htmlFor="controlledText">
          Text (Controlled):
          <input
            type="text"
            id="controlledText"
            value={controlledText}
            onChange={onControlledTextChange}
          />
        </label>
      </FormContainer>
      <ColouredComponent color="red" />
      <ColouredComponent color="purple" />
      <ColouredComponent color="green" />
      <ColouredComponent color="gray" />
    </Container>
  );
};
