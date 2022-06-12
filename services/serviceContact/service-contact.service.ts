import axios from "../../config/axios.config";
import { IServiceContact } from "./service-contact.model";

export async function _getContactServiceList(): Promise<IServiceContact[]> {
  return axios.get("/service-contact").then((res) => res.data);
}
