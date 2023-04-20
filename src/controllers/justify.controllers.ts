import { Response, Request } from "express";
import * as justifyService from "../services/justify.service";

/** Function that send the justify text made by the services
 *
 * @param {Request}
 * @param {Response}
 */
function postJustifyText(req: Request, res: Response) {
  const text: string = justifyService.justifyText(req.body, 80);
  res.status(200).send(text);
}

export { postJustifyText };
