export enum EDITOR_TYPE {
  EDIT = "edit",
  MAKE = "make",
}

export enum POST_STATUS {
  ENABLED = "enabled",
  DISABLED = "disabled",
  NONE = "none",
}

export interface POST_RESPOSE {
  content: string;
  title: string;
  categoryId: number;
  status?: POST_STATUS;
  createdDate?: string;
  updatedDate?: string;
}

export interface EDITOR_BODY extends POST_RESPOSE {
  type: EDITOR_TYPE;
}

export interface ListQueryParamsForPost {
  page?: number;

  limit?: number;

  orderBy?: string;

  order?: string;

  search?: string;

  categoryName?: string;

  tag?: string;
}

export enum EPostCategory {
  ANNOUNCEMENT = "announcement",
  IT = "itclinic",
  ACTIVITY = "activity",
  LIFESTYLE = "lifestyle",
}
