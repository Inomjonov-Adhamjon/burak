import { T } from '../libs/types/common';
import { Request, Response } from 'express';
import MemberService from '../modules/Members.service';

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log('goHome')
        res.send('home page');
    } catch (err) {
        console.log('Error, go home', err);
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log('getLogin')
        res.send('login page');
    } catch (err) {
        console.log('Error, get login', err);
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log('getSignup')
        res.send('Signup page');
    } catch (err) {
        console.log('Error, getSignup', err);
    }
};

restaurantController.processLogin = (req: Request, res: Response) => {
    try {
        console.log('processLogin')
        res.send("done");
    } catch (err) {
        console.log('Error, processLogin', err);
    }
};

restaurantController.processSignup = (req: Request, res: Response) => {
    try {
        console.log('processSignup')
        res.send('done');
    } catch (err) {
        console.log('Error, processSignup', err);
    }
};

export default restaurantController;

