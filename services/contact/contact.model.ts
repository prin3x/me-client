export enum ContactStatus {
  ENABLED = "enabled",
  DISABLED = "disabled",
  NONE = "none",
}
export interface IContact {
  id: number;
  profilePicUrl: string;
  name: string;
  nickname: string;
  company: string;
  department: string;
  division?: string;
  section: string;
  ipPhone: string;
  email: string;
  position: string;
  staffId?: string | number;
  nameTH: string;
  status: string;
  birthDate: string;
  createdBy: number;
  createdDate: string;
  updatedDate: string;
  role? : string
}

export interface ListQueryParams {
  page?: number;

  limit?: number;

  orderBy?: string;

  order?: string;

  search?: string;

  department?: string;

  company?: string;
}

export interface ListQueryParamsBirthday extends ListQueryParams {
  startDate: Date | string;
  endDate: Date | string;
}

export enum EDepartment {
  MD = "MD",
  MARKETING = "Marketing",
  OPERATION = "Operation",
  FINANCE_ACCOUNT = "Finance & Accounting",
  SHUUSHABU = "Shuushabu",
  BD = "Business Development",
  HR = "Human Resource",
  ITB = "International Business Development",
  RECRUITMENT = "Recruitment",
}

export enum ECompanyList {
  MI = "Mind Edge Innovation",
  MR = "Mind Edge Recruitment",
  FB = "Foodberg",
  MY = "Me and You Entertainment"
}


export const DEPT_SELECTOR = [
  EDepartment.BD,
  EDepartment.FINANCE_ACCOUNT,
  EDepartment.HR,
  EDepartment.ITB,
  EDepartment.MARKETING,
  EDepartment.MD,
  EDepartment.OPERATION,
  EDepartment.RECRUITMENT,
  EDepartment.SHUUSHABU,
];

export const COMPANY_SELECTOR = [
  ECompanyList.FB,
  ECompanyList.MI,
  ECompanyList.MR,
  ECompanyList.MY,
];