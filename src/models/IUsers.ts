import {ICompany} from "./ICompany";
import {IAddress} from "./IAddress";

export interface IUsers {
  id:number;
  name:string;
  username:string;
  email:string;
  address:IAddress;
  phone:string;
  website:string;
  company:ICompany
}






