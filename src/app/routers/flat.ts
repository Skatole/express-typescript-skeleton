import * as flatController from "../controllers/flat";
import { Router } from "express";

export const router: Router = Router( { mergeParams: true });

router.get('/flat', flatController.index);
router.get('/flat', flatController.show);
router.post('/flat', flatController.create);
router.put('/flat', flatController.update);
router.delete('/flat', flatController.destroy);

