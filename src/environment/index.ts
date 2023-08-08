// import * as dotenv from 'dotenv';

// // config use env
// dotenv.config();

// //URL
// export const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

export enum Endpoints {
  //AUTH
  LOGIN_ENDPOINT = '/auth/login',
  CREATE_ACCOUNT_ENDPOINT = '/auth/create-account',
  REFRESH_TOKEN_ENDPOINT = '/auth/refresh-token',
  SIGN_IN_GOOGLE = '/auth/sign-in-google',
  //USER
  GET_USER_ENDPOINT = '/user',
  UPLOAD_USER_AVATAR_ENDPOINT = '/user/upload-avatar',
  UPDATE_USER_PROFILE_ENDPOINT = '/user/update-user',
  //JOB
  GET_JOB_ENDPOINT = '/job',
  GET_CATEGORY_ENDPOINT = '/category',
  GET_ALL_COMPANY_ENDPOINT = '/company',
  GET_PROFILE_ENDPOINT = '/user/profile',
  APPLY_JOB_ENDPOINT = '/user-job',
  SEARCH_JOB_ENDPOINT = '/job/get-job-by-name',
  GET_JOB_BY_CATEGORY_ENDPOINT = '/job/get-job-by-category',
  GET_SAVE_JOB_ENDPOINT = '/save-job',
  POST_JOB_USER_ENDPOINT = '/post',

  // CATEGORY
  GET_ALL_CATEGORY_ENDPOINT = '/category/type',
  HISTORY_APPLY_JOB_ENDPOINT = '/user-job/owner',
}
