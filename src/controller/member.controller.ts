import { T } from '../libs/types/common';
import { Request, Response } from 'express';
import MemberService from '../modules/Members.service';
import { Member, MemberInput, LoginInput } from '../libs/types/member';
import Errors from '../libs/Errors';

const memberService = new MemberService()

const memberController: T = {};
// React


// ==================== Signup ====================
memberController.signup = async (req: Request, res: Response) => {
    try {
        console.log('signup');
        const input: MemberInput = req.body,
            result: Member = await memberService.signup(input);
        // ToDO: Tokens

        res.json({ member: result });
    } catch (err) {
        console.log('Error, signup', err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);

    }
};


// ==================== Login ====================
memberController.login = async (req: Request, res: Response) => {
    try {
        console.log('login')

        const input: LoginInput = req.body,
            result = await memberService.login(input);

        res.json({ member: result });
    } catch (err) {
        console.log('Error, login', err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};


export default memberController;

