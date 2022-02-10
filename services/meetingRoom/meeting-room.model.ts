export interface ICreateMeeting {
  title: string;

  description: string;

  start: string;

  end: string;

  roomId: number;
}

export enum EMakeStatus {
  MAKE = "MAKE",
  EDIT = "EDIT",
  READ = "READ",
}
