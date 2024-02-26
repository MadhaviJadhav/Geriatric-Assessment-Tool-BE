import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class localStrategy extends PassportStrategy(Strategy)
{
    constructor(private authService:AuthService){
        super({
            usernameField:'doctorId',
            password:'password'
        });
    }

    validate(doctorId:string, password:string,doctorName:string){
        const doctor = this.authService.validateDoctor({doctorId,password,doctorName});
        console.log("doctor ",doctor)
        if(!doctor) throw new UnauthorizedException();
        return doctor;
    }
}