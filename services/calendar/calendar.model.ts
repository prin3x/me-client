export interface MakeNewsDto {
  title: string;

  content: string;

  status: NewsStatus;

  categoryId: number;
}

export enum ECalendarEventType {
  EVENT = "event",
  BIRTHDAY = "birthday",
  HOLIDAY = "holiday",
  OTHER = "other",
}

export interface UpdateNewsDto extends MakeNewsDto {}

export enum NewsStatus {
  ENABLED = "enabled",
  DISABLED = "disabled",
  NONE = "none",
}

export enum ModalEditType {
  EDIT_EVENT = "edit",
  MAKE_EVENT = "make",
}

export class ListQueryCalendarDTO {
  startDate: string;

  endDate: string;
}


export interface MakeNewsDto {
  title: string;

  content: string;

  status: NewsStatus;

  categoryId: number;
}
