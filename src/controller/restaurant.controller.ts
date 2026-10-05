import { T } from '../libs/types/common';
import { Request, Response } from 'express';
import MemberService from '../modules/Members.service';
import { AdminRequest, LoginInput, MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';
import { Message } from '../libs/Errors';

// MemberService clasidan instans / object yaratdik
const memberService = new MemberService();

// Restaurant controller uchun barcha methodlarni saqlaydigan object
const restaurantController: T = {};

// ==================== Go Home ====================
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log('goHome')
        res.render('home');
    } catch (err) {
        console.log('Error, go home', err);
    }
};

// ==================== Get Signup ====================
restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log('getSignup')
        res.render('signup');
    } catch (err) {
        console.log('Error, getSignup', err);
    }
};

// ==================== Get Login ====================
restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log('getLogin')
        res.render('login');
    } catch (err) {
        console.log('Error, get login', err);
    }
};

// ==================== Process Signup ====================
restaurantController.processSignup = async (req: AdminRequest, res: Response) => {
    try {
        console.log('processSignup');

        // req.body ni newMemberga tenglab, memberTypeni RESTAURANT qilib belgilaymiz
        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;

        // memberService classining processSignup methodiga newMember ni argument qilib berib
        // qaytgan natijani result ga tenglab oldik
        const result = await memberService.processSignup(newMember);
        // Sessions Authentication
        req.session.member = result;
        req.session.save(function () {
            res.send(result);
        });

    } catch (err) {
        console.log('Error, processSignup', err);
        res.send(err);

    }
};

// ==================== Process Login ====================
restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
    try {
        console.log('processLogin')
        console.log("body:", req.body)
        const input: LoginInput = req.body;

        // Login ma'lumotlarini service ga yuboramiz,  Service userni database'dan topib, passwordni tekshiradi
        const result = await memberService.processLogin(input);
        // Sessions Authentication
        req.session.member = result;
        req.session.save(function () {
            res.send(result);
        });

    } catch (err) {
        console.log('Error, processLogin', err);
        res.send(err)
    }
};



restaurantController.checkAuthSession = async (
    req: AdminRequest,
    res: Response
) => {
    try {
        console.log('checkAuthSession');
        if (req.session?.member)
            res.send(`<script> alert("${req.session.member.memberNick}") </script>`);
        else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}") </script>`);

    } catch (err) {
        console.log('Error, processLogin', err);
        res.send(err)
    }
};

export default restaurantController;

