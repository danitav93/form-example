import { SchemaOf } from 'yup';
import * as yup from 'yup';

export interface IntervalForm {
  start: string;
  end: string;
}

export interface TimetableForm {
  monday: IntervalForm[];
  tuesday: IntervalForm[];
  wednesday: IntervalForm[];
  thursday: IntervalForm[];
  friday: IntervalForm[];
  saturday: IntervalForm[];
  sunday: IntervalForm[];
}

export interface Interval {
  start: number;
  end: number;
}

export interface Timetable {
  monday: Interval[];
  tuesday: Interval[];
  wednesday: Interval[];
  thursday: Interval[];
  friday: Interval[];
  saturday: Interval[];
  sunday: Interval[];
}

export const intervalItemSchema: SchemaOf<number> = yup
  .number()
  .required()
  .transform(function (value, originalValue) {
    if (this!.isType(value)) return value;
    if (!originalValue.match(/\d*:?\d*/)) {
      return yup.ValidationError;
    }
    const [hh, mm] = originalValue.split(':').map((n: string) => parseInt(n, 10));
    return hh * 60 + mm;
  })
  .min(0)
  .max(1440, 'Valore massimo 24:00');

export const intervalSchema: SchemaOf<Interval> = yup
  .object()
  .shape({
    start: intervalItemSchema,
    end: intervalItemSchema,
  })
  .strict()
  .test('start before end', 'Intervallo non valido', (schema) => {
    return (schema.start ?? 0) < (schema.end ?? 0);
  });

export const arrayOfIntervalsSchema: SchemaOf<Interval[]> = yup.array().of(intervalSchema);

export const timetableSchema: SchemaOf<Timetable> = yup.object().shape({
  monday: arrayOfIntervalsSchema,
  tuesday: arrayOfIntervalsSchema,
  wednesday: arrayOfIntervalsSchema,
  thursday: arrayOfIntervalsSchema,
  friday: arrayOfIntervalsSchema,
  saturday: arrayOfIntervalsSchema,
  sunday: arrayOfIntervalsSchema,
});

// const timetable: TimetableForm = {
//   monday: [
//     {
//       start: '10:00',
//       end: '11:00',
//     },
//   ],
//   tuesday: [],
//   wednesday: [],
//   thursday: [],
//   friday: [],
//   saturday: [],
//   sunday: [],
// };

// export function testSchema() {
//   console.log('Hello');
//   console.log('Is valid?', timetableSchema.isValidSync(timetable));
//   console.log('Casted', timetableSchema.cast(timetable, { assert: false, stripUnknown: true }));
// }
