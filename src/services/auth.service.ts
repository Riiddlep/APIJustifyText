import "dotenv/config";
import jwt from "jsonwebtoken";
import JWToken from "../model/jwtoken";

/**
 * Authenticate the user with his email address.
 * @param { string }
 * @return { string }
 */
function authenticate(email: string): string {
  let secretKey = process.env.JWT_SECRET!;
  return jwt.sign({ email }, secretKey);
}
/**
 * Check the user token.
 * @param { string }
 * @return { JWToken }
 **/
function checkToken(token: string): JWToken | undefined {
  try {
    let secretKey = process.env.JWT_SECRET!;
    const decodedToken: JWToken = jwt.verify(token, secretKey) as JWToken;
    return decodedToken;
  } catch (error) {
    console.log(error);
  }
  return undefined;
}

export { authenticate, checkToken };
