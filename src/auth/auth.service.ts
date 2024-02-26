import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthPayloadDto } from './dto/create-auth.dto';
import { DoctorService } from 'src/doctor/doctor.service';
import { Doctor } from 'src/doctor/entities/doctor.entity';


@Injectable()
export class AuthService {

    constructor(private jwtService:JwtService, private doctorService:DoctorService){}

    async validateDoctor({doctorId, password}:AuthPayloadDto):Promise<string>
    {
        
        const findDoctor = await this.doctorService.findByDoctorId(doctorId)
        console.log("findDoctor ",findDoctor) 
        if(!findDoctor) throw new UnauthorizedException("Doctor Not Found");

        if(password===findDoctor.password){
            const {password, ...doctor} = findDoctor;
            return  this.jwtService.sign(doctor,{ expiresIn: '2h' })
        }
    }
}
