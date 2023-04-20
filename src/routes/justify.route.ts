import { Router, Request, Response } from "express";
import { verifyToken } from "../controllers/auth.controller";
import * as justifyController from "../controllers/justify.controllers";

const router: Router = Router();

//Route that justify a text
router.post("/justify", verifyToken, (req: Request, res: Response) => {
  justifyController.postJustifyText(req, res);
});

module.exports = router;
