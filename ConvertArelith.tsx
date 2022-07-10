import { DateTime } from './types';
import * as React from 'react';
import { convertArelith, overFlow } from './convert-arelith';

const realworldToGameTimeConversion = 3;

export function Convert({
  arelithDate,
  fromDate,
  targetDate,
}: {
  arelithDate: DateTime;
  fromDate: Date;
  targetDate: Date;
}) {
  const targetArelithDate = convertArelith(arelithDate, fromDate, targetDate);

  return (
    <React.Fragment>
      <div>Source Arelith Datetime</div>
      <div>{JSON.stringify(arelithDate)}</div>
      <div>Target Arelith Datetime</div>
      <div>{JSON.stringify(targetArelithDate)}</div>
    </React.Fragment>
  );
}
