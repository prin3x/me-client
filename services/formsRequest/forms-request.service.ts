import axios from "axios";
import {
  ICreateFormsRequestItem,
  IFormsRequest,
  IUpdateFormsRequestCategory,
  IUpdateFormsRequestItem,
} from "./forms-request.model";

export function _getFormRequestContent(): Promise<IFormsRequest[]> {
  return axios.get("/forms-request").then((res) => res.data);
}

export function _createContactServiceListItem(
  createItem: ICreateFormsRequestItem
): Promise<IFormsRequest> {
  return axios
    .post("/forms-request", { ...createItem })
    .then((res) => res.data);
}

export function _updateContactServiceListItem(
  updatedItem: IUpdateFormsRequestItem
) {
  return axios.patch(`/forms-request/${updatedItem.id}`, {
    ...updatedItem,
  });
}

export function _removeContactService(id: string) {
  return axios.delete(`/forms-request/${id}`);
}

export function _createFormsReIFormsRequestCategory(categoryTitle: string) {
  return axios.post("/forms-request-category", { title: categoryTitle });
}

export function _updateFormsReIFormsRequestCategory(
  categoryTitle: IUpdateFormsRequestCategory
) {
  return axios.patch(`/forms-request-category/${categoryTitle.id}`, {
    title: categoryTitle.title,
  });
}

export function _removeContactServiceCategory(id: string) {
  return axios.delete(`/forms-request-category/${id}`);
}
