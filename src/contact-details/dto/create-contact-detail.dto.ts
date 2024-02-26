import { IsEnum, IsNotEmpty } from "class-validator";
import { ContactType } from "../enum/contact-enum"

export class CreateContactDetailDto {
    email: string
    @IsNotEmpty()
    @IsEnum(ContactType, { message: 'Invalid contact type' })
    contactType: ContactType;

    @IsNotEmpty()
    contactValue: string;

    isPrimary: boolean
    // isCARGContact: boolean
    isSecondary: boolean

    primaryNumber:string;

    secondaryNumbers:string;
}
