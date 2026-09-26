import { T } from '../libs/types/common';
import { Request, Response } from 'express';
import MemberService from '../modules/Members.service';

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        res.send('home page');
    } catch (err) {
        console.log('Error, go home', err);
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        res.send('login page');
    } catch (err) {
        console.log('Error, get login', err);
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        res.send('Signup page');
    } catch (err) {
        console.log('Error, getSignup', err);
    }
};

export default restaurantController;

