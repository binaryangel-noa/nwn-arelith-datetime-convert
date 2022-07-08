export type Date = {
  year: number;
  day: number;
  month: number;
};
export type Time = {
  hour: number;
  minute: number;
};

export type DateTime = Date & Time;
