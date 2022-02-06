export enum ContactStatus {
  ENABLED = "enabled",
  DISABLED = "disabled",
  NONE = "none",
}

export interface StaffContact {
  id: number;

  profilePicUrl: string;

  name: string;

  nickname: string;

  company: string;

  department: string;

  division: string;

  ipPhone: string;

  email: string;

  status: ContactStatus;

  birthDate: string;
}

export interface ListQueryParams {
  page?: number;

  limit?: number;

  orderBy?: string;

  order?: string;

  search?: string;

  department?: string;
}


export interface ListQueryParamsBirthday extends ListQueryParams{
  startDate: Date | string;
  endDate: Date | string;
}
