import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { SlideTitle } from '../../components/ui/slide';
import { useSlide } from '../../hooks/useSlide';
import { useMount } from '../../hooks/useMount';
import { MemoizedColouredComponent } from '../../components/reactHookFormPerformances/ColouredComponent';

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
  redText: string;
  otherData: string;
}

export const FormStateReactHookFormPerformanceWithValuesScreen = () => {
  useSlide(true);
  useMount('MainContainer');

  const { register, watch } = useForm<Form>();

  const [purpleText, setPurpleText] = useState('');

  const [otherData, setOtherDataText] = useState('');

  const onPurpleTextChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPurpleText(event.target.value);
  }, []);

  const onOtherDataTextChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setOtherDataText(event.target.value);
  }, []);

  const redText = watch('redText');

  return (
    <Container>
      <StyledTitle>Performance</StyledTitle>
      <FormContainer>
        <label htmlFor="redText">
          RedText (RHF):
          <input type="text" id="redText" name="redText" ref={register} />
        </label>
        <label htmlFor="otherData">
          OtherData (RHF):
          <input type="text" id="otherData" name="otherData" ref={register} />
        </label>
      </FormContainer>
      <FormContainer>
        <label htmlFor="controlledText">
          PurpleText (Controlled):
          <input type="text" id="controlledText" value={purpleText} onChange={onPurpleTextChange} />
        </label>
        <label htmlFor="otherData">
          OtherData (Controlled):
          <input type="text" id="otherData" value={otherData} onChange={onOtherDataTextChange} />
        </label>
      </FormContainer>
      <MemoizedColouredComponent color="red" text={redText} />
      <MemoizedColouredComponent color="purple" text={purpleText} />
    </Container>
  );
};
