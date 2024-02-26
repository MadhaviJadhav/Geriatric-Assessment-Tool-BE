import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class AuthPayloadDto{
    @IsString()
    @ApiProperty()
    doctorId:string

    @IsString()
    @ApiProperty()
    password:string

    
    doctorName:string
}