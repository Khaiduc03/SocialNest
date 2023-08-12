import {
  GoogleSignin,
  User
} from '@react-native-google-signin/google-signin';

try {
  GoogleSignin.configure({
    webClientId:
      '809273932713-3ir5h8e9kr8qdjmoer7dl2qimg905gh3.apps.googleusercontent.com',
  });
} catch (error) {
  console.log(error);
}

export class GoogleService {
  static async login(): Promise<User> {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      return userInfo;
    } catch (error) {
      console.log(error);
    }
    return {} as User;
  }

  static async currentUser(): Promise<User> {
    try {
      const userInfo = await GoogleSignin.getCurrentUser();
      if (!userInfo) {
        return {} as User;
      }
      console.log(userInfo);
      return userInfo;
    } catch (error) {
      console.log(error);
    }
    return {} as User;
  }

  static async checkSignIn(): Promise<boolean> {
    try {
      const isSignedIn = await GoogleSignin.isSignedIn();
      return isSignedIn;
    } catch (err) {
      console.log(err);
    }
    return false;
  }

  static async getToken(): Promise<string | null> {
    try {
      const token = await GoogleSignin.getTokens();
      console.log(token);
      return token.accessToken;
    } catch (err) {
      console.log(err);
    }
    return null;
  }

  static async logout(): Promise<void> {
    try {
      await GoogleSignin.signOut();
      console.log('logout');
    } catch (err) {
      console.log(err);
    }
  }
}
