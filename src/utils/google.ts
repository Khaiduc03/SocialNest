import {GoogleSignin, User} from '@react-native-google-signin/google-signin';

// try {
//   GoogleSignin.configure({
//     webClientId:
//       '809273932713-h4mmdl8evuhc1psn5htd3blf1l2rc180.apps.googleusercontent.com',
//   });
// } catch (error) {
//   console.log(error);
// }

export class GoogleService {
  // constructor(
  //   webClientId: string = '809273932713-h4mmdl8evuhc1psn5htd3blf1l2rc180.apps.googleusercontent.com',
  // ) {
  //   GoogleSignin.configure({
  //     webClientId,
  //   });
  // }

  static async signIn(): Promise<User | null> {
    try {
      GoogleSignin.configure({
            webClientId:'809273932713-im11qm5me5ql14qeo7unpjur7j3jg5cl.apps.googleusercontent.com',
          });
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo)
      return userInfo;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  static async signOut(): Promise<void> {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.log(error);
    }
  }
}
