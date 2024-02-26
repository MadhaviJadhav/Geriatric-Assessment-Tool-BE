import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey:"madhavi",
            expiresIn:"2h"
            
        });
    }

    validate(payload:any){
        // console.log("Inside JWT")
        // console.log(payload)
        return payload
    }
}