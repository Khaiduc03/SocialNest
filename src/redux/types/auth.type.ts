import {  Avatar, Role, Timestamp, uuid } from '../../types';

export type AuthState = {
  enableSignIn: boolean;
  enableBiometric: boolean;
  accessToken: string;
  refreshToken: string;
  user: Partial<User>;
  isGoogle: boolean;
};


export type LoginPayload = {
  email: string;
  password: string;
  device_token:string
}


export type User = uuid &
  Timestamp & {
    nick_name: string;
    full_name: string;
    phone_number: string;
    dob: string;
    email: string;
    password: string;
    gender: number;
    address: string;
    role: Role;
    summary: string;
    status: boolean;
    device_token: string;
    avatar: Avatar;
  };
