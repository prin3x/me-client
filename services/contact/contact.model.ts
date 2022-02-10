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
  CALLCENTER = "Call Center",
  CARECALL = "Care Call",
  COMPLAINT = "Complaint",
  DIGITAL = "Digital",
  HR = "Human Resource",
  ITB = "International Business Development",
  NSC = "Nutritionist Social Care",
  RECRUITMENT = "Recruitment",
  SLBA = "Social Listening & Brand Advocacy",
}

export enum ECompanyList {
  MI = "Mindedge Innovation",
  MR = "Mindedge Recruitment",
  FB = "Foodberg",
  MY = "Me and You Entertainment"
}
