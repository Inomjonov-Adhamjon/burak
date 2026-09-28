import { T } from '../libs/types/common';
import { Request, Response } from 'express';
import MemberService from '../modules/Members.service';
import { MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';

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

restaurantController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log('processSignup');

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;

        const memberService = new MemberService();
        const result = await memberService.processSignup(newMember);
        res.send(result);
    } catch (err) {
        console.log('Error, processSignup', err);
        res.send(err);

    }
};

export default restaurantController;

