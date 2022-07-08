import * as React from 'react';
import './style.css';
import { DateTime } from './types';
import { Convert } from './ConvertArelith';
export default function App() {
  const currentDateTime = new Date(2022, 7 - 1, 8, 16, 15);
  const destinationDateTime = new Date(2022, 7 - 1, 9, 15, 0);
  const [arelithDT, setArelithDT] = React.useState<DateTime>({
    year: 177,
    month: 1,
    day: 15,
    hour: 0,
    minute: 0,
  });
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Convert
        arelithDate={arelithDT}
        fromDate={currentDateTime}
        targetDate={destinationDateTime}
      />
      <h2>Archive</h2>
      <h2>Visual asserting</h2>
      Heute 22
      <Convert
        arelithDate={{ year: 177, month: 1, day: 4, hour: 9, minute: 0 }}
        fromDate={new Date(2022, 7 - 1, 8, 16, 16)}
        targetDate={new Date(2022, 7 - 1, 8, 22, 0)}
      />
      <hr />
      Samstag 22
      <Convert
        arelithDate={{ year: 177, month: 1, day: 4, hour: 9, minute: 0 }}
        fromDate={new Date(2022, 7 - 1, 8, 16, 16)}
        targetDate={new Date(2022, 7 - 1, 9, 22, 0)}
      />
      <h2>Visual asserting</h2>
      Half rl day
      <Convert
        arelithDate={{ year: 177, month: 1, day: 15, hour: 0, minute: 0 }}
        fromDate={new Date(2022, 7 - 1, 8, 15, 0)}
        targetDate={new Date(2022, 7 - 1, 9, 3, 0)}
      />
      <hr />
      1/3 rl day
      <Convert
        arelithDate={{ year: 177, month: 1, day: 15, hour: 0, minute: 0 }}
        fromDate={new Date(2022, 7 - 1, 8, 15, 0)}
        targetDate={new Date(2022, 7 - 1, 8, 23, 0)}
      />
      <hr />
      2/3 rl day
      <Convert
        arelithDate={{ year: 177, month: 1, day: 15, hour: 0, minute: 0 }}
        fromDate={new Date(2022, 7 - 1, 8, 15, 0)}
        targetDate={new Date(2022, 7 - 1, 9, 7, 0)}
      />
      <hr />
      2/3 rl day & 30 minutes
      <Convert
        arelithDate={{ year: 177, month: 1, day: 15, hour: 0, minute: 0 }}
        fromDate={new Date(2022, 7 - 1, 8, 15, 0)}
        targetDate={new Date(2022, 7 - 1, 9, 7, 30)}
      />
      <hr />
      1/3 rl day - end of year
      <Convert
        arelithDate={{ year: 176, month: 12, day: 27, hour: 0, minute: 0 }}
        fromDate={new Date(2022, 7 - 1, 8, 16, 0)}
        targetDate={new Date(2022, 7 - 1, 8, 24, 0)}
      />
      <hr />
      2/3 rl day - end of year
      <Convert
        arelithDate={{ year: 176, month: 12, day: 27, hour: 0, minute: 0 }}
        fromDate={new Date(2022, 7 - 1, 8, 16, 0)}
        targetDate={new Date(2022, 7 - 1, 9, 8, 0)}
      />
      <hr />
      full rl day - end of year
      <Convert
        arelithDate={{ year: 176, month: 12, day: 27, hour: 0, minute: 0 }}
        fromDate={new Date(2022, 7 - 1, 8, 16, 0)}
        targetDate={new Date(2022, 7 - 1, 9, 16, 0)}
      />
      <hr />
      full rl day - end of month
      <Convert
        arelithDate={{ year: 177, month: 9, day: 27, hour: 0, minute: 0 }}
        fromDate={new Date(2022, 7 - 1, 8, 16, 0)}
        targetDate={new Date(2022, 7 - 1, 9, 16, 0)}
      />
      <hr />
      full rl day - end of day
      <Convert
        arelithDate={{ year: 177, month: 9, day: 4, hour: 23, minute: 0 }}
        fromDate={new Date(2022, 7 - 1, 8, 16, 0)}
        targetDate={new Date(2022, 7 - 1, 9, 16, 0)}
      />
      <hr />
      full year
      <Convert
        arelithDate={{ year: 177, month: 6, day: 15, hour: 16, minute: 0 }}
        fromDate={new Date(2022, 7 - 1, 8, 16, 0)}
        targetDate={new Date(2023, 7 - 1, 8, 16, 0)}
      />
      <hr />
      full month
      <Convert
        arelithDate={{ year: 177, month: 6, day: 15, hour: 16, minute: 0 }}
        fromDate={new Date(2022, 7 - 1, 8, 16, 0)}
        targetDate={new Date(2022, 8 - 1, 8, 16, 0)}
      />
      <hr />
      {/* <div>
        <label>Arelith date time</label>
        <div>
          <input type="number" min="177-01-01" max="179-01-01" />
          <input type="time" />
        </div>
      </div> */}
      {/* <div>
        <label>Target datetime</label>
        <div>
          <input type="datetime-local" />
        </div>
      </div> */}
      {/* <div>
        <label>Target in game datetime</label>
        <div>
          <input type="datetime-local" />
        </div>
      </div> */}
    </div>
  );
}
