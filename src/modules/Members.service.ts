import { LoginInput, Member, MemberInput, MemberUpdateInput } from "../libs/types/member";
import MemberModel from "../schema/Member.model";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { MemberType } from "../libs/enums/member.enum";
import * as bcrypt from "bcryptjs";
import { shapeIntoMongooseObjectId } from "../libs/config";

class MemberService {
    // MemberModel bilan ishlash uchun memberModel property yaratiladi,  Constructor ishga tushganda MemberModel memberModel ga biriktiriladi
    private readonly memberModel;
    constructor() {
        this.memberModel = MemberModel;
    };

    // ==================== SPA ====================

    // ==================== Signup ====================
    public async signup(input: MemberInput): Promise<Member> {
        const salt = await bcrypt.genSalt();
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

        try {
            const result = await this.memberModel.create(input);
            result.memberPassword = "";
            return result.toJSON();
        } catch (err) {
            console.log("Error: model:signup", err)
            throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);
        };
    };

    // ==================== Login ====================
    public async login(input: LoginInput): Promise<Member> {
        // TODO: COnsider member status

        const member = await this.memberModel
            .findOne(
                { memberNick: input.memberNick },
                { memberNick: 1, memberPassword: 1 }
            )
            .exec();
        if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

        const isMatch = await bcrypt.compare(
            input.memberPassword,
            member.memberPassword
        );
        if (!isMatch) {
            throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD)
        };

        return await this.memberModel.findById(member._id).lean().exec();
    }

    // ==================== SSR ====================

    public async processSignup(input: MemberInput): Promise<Member> {

        // Bazada restaurant type dagi user bor yoki yo'qligini tekshiramiz
        const exist = await this.memberModel
            .findOne({ memberType: MemberType.RESTAURANT })
            .exec();
        if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);

        // User yuborgan passwordni hash qilib,   input ichidagi eski password o'rniga hashlangan passwordni yozamiz
        const salt = await bcrypt.genSalt();
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

        // db da restaurant user exist bolmasa yaratish, return bolganda passwordni yashirish
        try {
            const result = await this.memberModel.create(input);
            result.memberPassword = "";
            return result;
        } catch (err) {
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }
    }

    // ==================== Login ====================
    public async processLogin(input: LoginInput): Promise<Member> {

        // memberNick orqali userni db'dan qidiramiz // Faqat memberNick va memberPassword fieldlarini olamiz
        const member = await this.memberModel
            .findOne(
                { memberNick: input.memberNick }, { memberNick: 1, memberPassword: 1 }
            )
            .exec();
        if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

        // User login paytida kiritgan passwordni database'dagi hashlangan password bilan solishtiramiz
        const isMatch = await bcrypt.compare(
            input.memberPassword,
            member.memberPassword
        );

        if (!isMatch) {
            throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD)
        };

        // Password to'g'ri bo'lsa, userning to'liq ma'lumotlarini db dan _id orqali qayta olamiz
        return await this.memberModel.findById(member._id).exec();
    }



    public async getUsers(): Promise<Member[]> {
        const result = await this.memberModel
            .find({ memberType: MemberType.USER })
            .exec();

        if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

        return result
    }


    public async updateChosenUser(input: MemberUpdateInput): Promise<Member> {
        input._id = shapeIntoMongooseObjectId(input._id);
        const result = await this.memberModel
            .findByIdAndUpdate({ _id: input._id }, input, { new: true })
            .exec();

        if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

        return result
    }
}

export default MemberService;