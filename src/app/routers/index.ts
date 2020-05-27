import { router as flatRouter } from "./flat";
import { Router } from 'express';

export const router: Router = Router({mergeParams: true});
router.use('/flat', flatRouter);