export interface User {
  created_at: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  role: number;
  updated_at: string;
}

export interface CreateUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}
