export interface IUser {}

export interface IUserState {
  loggedIn: boolean;
  username: string;
  invalidLogin: boolean;
  forgotPassword: boolean;
  id: number | null;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  phone_number: string | null;
  signup_date: Date | null;
  customer_type: string | null;
  city: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
}
