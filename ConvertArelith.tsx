import { DateTime } from './types';
import * as React from 'react';

// const gameHourToRLHourLength = 1 / 3;
// const gameDayToRLHourLength = 8;
// const gameMonthLengthDays = 28;
// const gameYearLengthDays = 336;

const daysPerMonth = 28;
const monthsPerYear = 12;
const daysPerYear = daysPerMonth * monthsPerYear;

const realworldToGameTimeConversion = 3;
function overFlow(
  value: number,
  maxIntegerValue: number
): { overflow: number; remaining: number } {
  if (value >= maxIntegerValue) {
    const fits_into_x_times = Math.floor(value / maxIntegerValue);
    const remaining = value - maxIntegerValue * fits_into_x_times;
    return { remaining, overflow: fits_into_x_times };
  }
  return { overflow: 0, remaining: value };
}

export function Convert({
  arelithDate,
  fromDate,
  targetDate,
}: {
  arelithDate: DateTime;
  fromDate: Date;
  targetDate: Date;
}) {
  console.log('arelithDate', arelithDate);
  console.log('fromDate', fromDate);
  console.log('targetDate', targetDate);

  let dateNow = fromDate;
  let rlHours = Math.abs(targetDate.getTime() - dateNow.getTime()) / 36e5;
  const arelithHoursTotal = rlHours * realworldToGameTimeConversion;
  const arelithDays = Math.floor(arelithHoursTotal / 24);
  let timeLeft = arelithHoursTotal - arelithDays * 24;
  const arelithHours = Math.floor(timeLeft);
  timeLeft = timeLeft - arelithHours;
  const arelithMinutes = Math.floor(timeLeft * 60);
  timeLeft = timeLeft - arelithMinutes / 60;

  const targetArelithDate = { ...arelithDate };

  const overflowMinute = overFlow(arelithDate.minute + arelithMinutes, 60);
  targetArelithDate.minute = overflowMinute.remaining;

  const overflowHours = overFlow(
    arelithDate.hour + arelithHours + overflowMinute.overflow,
    24
  );
  targetArelithDate.hour = overflowHours.remaining;

  const overflowDays = overFlow(
    arelithDate.day - 1 + arelithDays + overflowHours.overflow,
    28
  );
  targetArelithDate.day = overflowDays.remaining + 1;

  const overflowMonths = overFlow(
    arelithDate.month - 1 + overflowDays.overflow,
    12
  );
  targetArelithDate.month = overflowMonths.remaining + 1;
  targetArelithDate.year = targetArelithDate.year + overflowMonths.overflow;

  const stringy = `Result: rl hours: ${rlHours}, arelith hours total: ${arelithHoursTotal}, arelith time left: ${JSON.stringify(
    {
      days: arelithDays,
      hours: arelithHours,
      minutes: arelithMinutes,
      timeLeft,
    }
  )}, Arelith target date: ${JSON.stringify({ targetArelithDate })}`;
  console.log(stringy);

  return (
    <React.Fragment>
      <div>Source Arelith Datetime</div>
      <div>{JSON.stringify(arelithDate)}</div>
      <div>Target Arelith Datetime</div>
      <div>{JSON.stringify(targetArelithDate)}</div>
    </React.Fragment>
  );
}