function generateRandomPassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';
    const specialCharacters = '!@#$%^&*()-_+=[]{}|;:,.<>?';
  
    const allCharacters = uppercaseLetters + lowercaseLetters + digits + specialCharacters;
  
    length = Math.max(length, 8);
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.charAt(randomIndex);
    }
  
    return password;
  }
  
  const passwordLength = 12; // Set the desired password length here
  const password = generateRandomPassword(passwordLength);
  console.log("Generated Password:", password);
  