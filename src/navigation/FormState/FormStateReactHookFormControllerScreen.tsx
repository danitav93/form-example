import React from 'react';
import styled from 'styled-components';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { SlideTitle } from '../../components/ui/slide';
import { useSlide } from '../../hooks/useSlide';
import { useMount } from '../../hooks/useMount';
import { Plafond } from '../../components/controlled/Plafond';
import { ControlledSelect } from '../../components/controlled/Select';

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
  plafond: string | null;
  iceCreamType:
    | { value: 'chocolate'; label: 'Chocolate' }
    | { value: 'strawberry'; label: 'Strawberry' }
    | { value: 'vanilla'; label: 'Vanilla' };
  company: {
    id: string;
    name: string;
  };
}

export const FormStateReactHookControllerScreen = () => {
  useSlide(true);
  useMount('MainContainer');

  const { control } = useForm<Form>({
    defaultValues: {
      plafond: null,
      iceCreamType: { value: 'strawberry', label: 'Strawberry' },
      company: {
        id: 'id2',
        name: 'name2',
      },
    },
  });
  return (
    <Container>
      <StyledTitle>RHF: Controller</StyledTitle>
      <FormContainer>
        <Controller name="plafond" render={Plafond} control={control} />
        <Controller
          name="iceCreamType"
          control={control}
          options={[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
          ]}
          as={Select}
        />
        <Controller name="company" render={ControlledSelect} control={control} />
      </FormContainer>
    </Container>
  );
};
