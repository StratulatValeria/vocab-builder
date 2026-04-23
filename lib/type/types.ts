export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface User {
  name: string | null;
  email: string | null;
}
export interface AuthResponse {
  name: string;
  email: string;
  token: string;
}
export interface Word {
  _id: string;
  en: string;
  ua: string;
  category: string;
  isIrregular?: boolean;
  owner: string;
  progress: number;
}

export interface WordsResponse {
  results: Word[];
  totalPages: number;
  page: number;
  perPage: number;
}

// export interface AuthResponse {
//   user: User;
//   token: string;
// }
