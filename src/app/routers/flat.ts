import * as flatController from "../controllers/flat";
import { Router } from "express";

export const router: Router = Router( { mergeParams: true });

router.get('/', flatController.index);
router.get('/:id', flatController.show);
router.post('/', flatController.create);
router.put('/:id', flatController.update);
router.delete('/:id', flatController.destroy);

