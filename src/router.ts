import express from 'express';
const router = express.Router();
import memberController from './controller/member.controller';
// React

router.post('/login', memberController.login);

router.post('/signup', memberController.signup);

export default router;