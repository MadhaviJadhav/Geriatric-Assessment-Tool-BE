import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";
import { Constants } from "src/utils/constant";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt'){
    canActivate(context: ExecutionContext) {
        const ctx = context.switchToHttp();
        const request = ctx.getRequest<Request>();

        for(let x=0; x<Constants.BY_PASS_UTILS.length; x++){
            if(request.url == Constants.BY_PASS_UTILS[x]) return true;
        }
        return super.canActivate(context);
    }
       
}
