export class RegistrationFormValidator {
  constructor(email, firstName, pass, passConfirm) {
    this.email = email;
    this.firstName = firstName;
    this.pass = pass;
    this.passConfirm = passConfirm;
  }

  validateEmail() {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(this.email)) {
      return "Введіть правильну електронну пошту";
    }
    return null;
  }

  validateName() {
    if (!this.firstName) {
      return "Введіть своє ім'я";
    }
    return null;
  }

  validatePass() {
    if (!this.pass && !this.passConfirm) {
      return "Введіть та підтвердіть пароль";
    }
    if (this.pass !== this.passConfirm) {
      return "Паролі не збігаються";
    }
    return null;
  }

  validate() {
    const emailError = this.validateEmail();
    const namesError = this.validateName();
    const passError = this.validatePass();

    if (emailError || namesError || passError) {
      return {
        email: emailError,
        names: namesError,
        pass: passError,
      };
    }

    return null;
  }
}
