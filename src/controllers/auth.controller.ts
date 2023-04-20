import { Response, Request } from "express";
import JWToken from "../model/jwtoken";
import * as authService from "../services/auth.service";

/** See if the email and valid then return a token in the cookie
 *
 * @param {Request}
 * @param {Response}
 */
async function authenticate(req: Request, res: Response) {
  const { email } = req.body;
  const expression: RegExp =
    /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
  const emailIsValid: boolean = expression.test(email);

  if (emailIsValid) {
    const token = authService.authenticate(email);
    res.cookie("token", token, { httpOnly: true, maxAge: 100000 * 900 });
    res.status(200).send({ token });
    return;
  }

  const jsonResponse = {
    message: {
      email: "Email is not valid or not specified in the body.",
    },
  };
  res.status(400).send(jsonResponse);
}
/**  Check if the token is valid or not
 *
 * @param {Request}
 * @param {Response}
 * @param {Function}
 */
function verifyToken(req: Request, res: Response, next: Function) {
  const token = req.cookies.token;
  if (token) {
    authService.checkToken(token);
    return next();
  }
  res.status(401).send({ message: "Unauthorized" });
}

export { authenticate, verifyToken };
