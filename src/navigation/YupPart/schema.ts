import { SchemaOf, object, array, NumberSchema, number } from 'yup';
import * as yup from 'yup';

interface IntervalForm {
  start: string;
  end: string;
}

interface TimetableForm {
  monday: IntervalForm[];
  tuesday: IntervalForm[];
  wednesday: IntervalForm[];
  thursday: IntervalForm[];
  friday: IntervalForm[];
  saturday: IntervalForm[];
  sunday: IntervalForm[];
}

interface Interval {
  start: number;
  end: number;
}

interface Timetable {
  monday: Interval[];
  tuesday: Interval[];
  wednesday: Interval[];
  thursday: Interval[];
  friday: Interval[];
  saturday: Interval[];
  sunday: Interval[];
}

// .test((schema) => {
//   const sortedIntervals = schema ? schema.sort((a, b) => (a.start ?? 0) - (b.start ?? 0)) : [];
//   return true;
// })

const intervalItemSchema: SchemaOf<number> = yup
  .number()
  .required()
  .transform((value, originalValue) => {
    return parseInt(originalValue.toString().split(':').join(''), 10);
  });

const intervalSchema: SchemaOf<Interval> = object()
  .shape({
    start: intervalItemSchema,
    end: intervalItemSchema,
    dfsdf: number().default(10),
  })
  .strict()
  .test((schema) => {
    return (schema.start ?? 0) < (schema.end ?? 0);
  });

const arrayOfIntervalsSchema: SchemaOf<Interval[]> = array().of(intervalSchema);

const timetableSchema: SchemaOf<Timetable> = object().shape({
  monday: arrayOfIntervalsSchema,
  tuesday: arrayOfIntervalsSchema,
  wednesday: arrayOfIntervalsSchema,
  thursday: arrayOfIntervalsSchema,
  friday: arrayOfIntervalsSchema,
  saturday: arrayOfIntervalsSchema,
  sunday: arrayOfIntervalsSchema,
});

const timetable: TimetableForm = {
  monday: [
    {
      start: '10:00',
      end: '11:00',
    },
  ],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: [],
};

// export function testSchema() {
//   console.log('Hello');
//   console.log('Is valid?', timetableSchema.isValidSync(timetable));
//   console.log('Casted', timetableSchema.cast(timetable, { assert: false, stripUnknown: true }));
// }
