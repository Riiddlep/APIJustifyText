//What's inside our token
interface JWToken {
  email: string;
  remainingWords: number;
  iat: number;
  exp: number;
}

export default JWToken;
