import { Observable, of } from 'rxjs';
import { User } from "../interfaces/user";


export class MockAuthService {

  user: Observable<User>;

  constructor(  ) {
    this.user = of({
      uid: "testUID",
      email: "testemail@mail.com",
      isAdmin: false
    })
  }

  // Triggers the Provider's popup window and authenticates the user.
  // It returns a Promise that resolves with the auth credential.

  googleLogin() {
        return new Promise<void>((resolve, reject) => {
      if (true) {
        resolve();
      }
      else {
        reject();
      }
    });
  }

  githubLogin() {
        return new Promise<void>((resolve, reject) => {
      if (true) {
        resolve();
      }
      else {
        reject();
      }
    });
  }

  facebookLogin() {
        return new Promise<void>((resolve, reject) => {
      if (true) {
        resolve();
      }
      else {
        reject();
      }
    });
  }

  twitterLogin() {
        return new Promise<void>((resolve, reject) => {
      if (true) {
        resolve();
      }
      else {
        reject();
      }
    });
  }

  // Email Sign up and login

  emailSignUp(email: string, password: string) {
    return new Promise<void>((resolve, reject) => {
      if (true) {
        resolve();
      }
      else {
        reject();
      }
    });
  }

  emailLogin(email: string, password: string) {
        return new Promise<void>((resolve, reject) => {
      if (true) {
        resolve();
      }
      else {
        reject();
      }
    });
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
        return new Promise<void>((resolve, reject) => {
      if (true) {
        resolve();
      }
      else {
        reject();
      }
    });
  }

  async signOut() {
  }
}
