import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class CreateDoctorDto {
    @ApiProperty()
    @IsString()
    doctorId:string

    @ApiProperty()
    @IsString()
    password:string

    @ApiProperty()
    @IsString()
    doctorName:string
}
