import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

const FormContainer = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Title = styled.span`
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 170px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  text-align: center;
`;

const Subtitle = styled.input`
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-size: 30px;
  font-weight: 300;
  line-height: 32px;
  text-align: center;
  border: none;
  outline: none !important;
  background: transparent;
`;

type Inputs = {
  exampleRequired: string;
};

export const HomeScreen = () => {
  const history = useHistory();

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = () => {
    history.push(ROUTES.WHY);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <TitleContainer>
        <Title> Fight the form </Title>
        <Subtitle
          name="exampleRequired"
          ref={register({
            validate: (value) => !!value && value === 'yes',
          })}
          defaultValue="and stay alive"
        />
      </TitleContainer>
      <button type="submit" className="button">
        Let&apos;s Go?
      </button>
    </FormContainer>
  );
};
