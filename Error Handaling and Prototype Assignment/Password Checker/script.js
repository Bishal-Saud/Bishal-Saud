class User{
    constructor(username, password) {
        this.username = username;
        this._password = password;
      }
    
      get password() {
        return this._password.replace(/./g, '*');
      }

    set password(newPassword) {
        if (newPassword.length >= 8 && /\d/.test(newPassword) && /[A-Z]/.test(newPassword)) {
          this._password = newPassword;
          console.log('Password has been set successfully.');
        } else {
          console.error('Invalid password! Password must be at least 8 characters long and contain at least one number and one uppercase letter.');
        }
      }
    
    
}

const result = new User("Bishal","212rasas32AS@");
console.log(result.password);
// console.log(result);

result.password = 'newpass'