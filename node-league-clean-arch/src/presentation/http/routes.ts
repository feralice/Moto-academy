import { Router } from "express";


const router = Router();


router.post('/', (req, res) => leagueController.create(req, res));
router.get('/', (req, res) => leagueController.getAll(req, res));

export default router;
