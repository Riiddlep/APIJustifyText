import { Router, Request, Response } from "express";
import * as authController from "../controllers/auth.controller";

const router: Router = Router();

//Route to authenticate our user
router.post("/auth", (req: Request, res: Response) => {
  authController.authenticate(req, res);
});

router.post("/check", (req: Request, res: Response) => {});

module.exports = router;
