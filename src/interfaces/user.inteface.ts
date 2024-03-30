export interface IUser {
  id: string;
  name: string;
  email: string;
  emailVerified?: Date | null;
  password: string;
  role: string;
  image?: string | null;
}
