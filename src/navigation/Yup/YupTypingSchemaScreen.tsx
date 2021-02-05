import React from 'react';
import { useSlide } from '../../hooks/useSlide';
import { Slide, SlideCode, SlideTitle } from '../../components/ui/slide';

export const YupTypingSchemaScreen = () => {
  useSlide();
  return (
    <Slide>
      <SlideTitle>Typing Yup Schema</SlideTitle>
      <SlideCode>
        {`
        interface Something {
          start: number;
          end: number;
        }

        const schema: SchemaOf<Something> = yup.object().shape({
          start: yup.number().required().max(100),
          end: yup.number().required().min(0),
        });
        `}
      </SlideCode>
    </Slide>
  );
};
