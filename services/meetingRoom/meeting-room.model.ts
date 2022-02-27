export interface ICreateMeeting {
  title: string;

  description: string;

  start: string;

  end: string;

  roomId: number;

  type: MeetingEventType;

  allDay: boolean;
}

export enum MeetingEventType {
  INTERNAL = "internal",
  EXTERNAL = "external",
}

export enum EMakeStatus {
  MAKE = "MAKE",
  EDIT = "EDIT",
  READ = "READ",
}
