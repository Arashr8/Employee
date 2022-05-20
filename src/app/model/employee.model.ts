export interface IEmployeeDetail {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
  gender: string;
  email: string;
  dateOfBirth: Date;
  phone: string;
  location: {
    street: string;
    city: string;
    state: string;
    country: string;
    timezone: string;
  }
  registerDate: Date;
  updatedDate: Date;
}
export interface IEmployee {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
  checked : boolean
}

export interface EmployeeListResponse {
  data: IEmployee[];
  total: number;
  page: number;
  limit: number;
}

