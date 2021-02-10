/* eslint-disable radix */
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
  .typeError("non e' un number")
  .required('richiesto')
  .test('test1', 'errore', (val) => {
    console.log('testing', val);
    return false;
  })
  .min(0, 'tropppo piccolo')
  .max(1440, 'Valore massimo 24:00');

// export const intervalItemSchema: SchemaOf<number> = yup
//   .number()
//   .required('Campo obbligatorio')
//   .transform(function (value, originalValue) {
//     console.log('transform', value, originalValue);
//     if (this.isType(value)) return value;
//     if (originalValue === '') return undefined;
//     const [left, right] = originalValue.split(':');
//     const hh = left ? parseInt(left) : 0;
//     const mm = right ? parseInt(right) : 0;
//     return hh * 60 + mm;
//   })
//   .typeError('Formato non correto')
//   .min(0)
//   .max(1440, 'Valore massimo 24:00');

export const intervalSchema: SchemaOf<Interval> = yup
  .object()
  .shape({
    start: intervalItemSchema,
    end: intervalItemSchema,
  })
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

//
// String stuff
//

const timeToMinutes = (s: string) => {
  const [hh, mm] = s.split(':').map((x) => +x);
  return hh * 60 + mm;
};

export interface StringInterval {
  start: string;
  end: string;
}

export interface StringSingleDay {
  day: StringInterval[];
}

export interface StringTimetable {
  days: StringSingleDay[];
}

export const stringIntervalItemSchema: SchemaOf<string> = yup
  .string()
  .required('Il campo e richiesto')
  .matches(/^[210]?\d:\d{2}$/, 'Formato non valido')
  .test('validTime', 'Orario non valido', (value) => {
    const [hh, mm] = value.split(':').map((x) => +x);
    return (hh < 24 && mm < 59) || (hh === 24 && mm === 0);
  });

export const stringIntervalSchema: SchemaOf<StringInterval> = yup.object().shape({
  start: stringIntervalItemSchema,
  end: stringIntervalItemSchema,
});
// .test('validInterval', 'Intervallo non valido', (value) => {
//   const start = timeToMinutes(value.start);
//   const end = timeToMinutes(value.end);
//   return start < end;
// });

export const arrayOfStringIntervalsSchema: SchemaOf<StringInterval[]> = yup
  .array()
  .of(stringIntervalSchema);
// .test('overlapping', 'Gli intervalli si overlappano', (value) => {
//   const sortedMinuteIntervals = (value ?? [])
//     .map((interval) => ({
//       start: timeToMinutes(interval.start),
//       end: timeToMinutes(interval.end),
//     }))
//     .sort((a, b) => (a.start - b.start ? 1 : -1));
//   return !sortedMinuteIntervals.find(
//     (interval, index, array) =>
//       index < array.length - 1 && interval.end >= array[index + 1].start,
//   );
// });

export const stringSingleDaySchema: SchemaOf<StringSingleDay> = yup.object().shape({
  day: arrayOfStringIntervalsSchema,
});

export const arrayOfarrayOfStringIntervalsSchema: SchemaOf<StringSingleDay[]> = yup
  .array()
  .of(stringSingleDaySchema);

export const stringTimetableSchema: SchemaOf<StringTimetable> = yup.object().shape({
  days: arrayOfarrayOfStringIntervalsSchema,
});
