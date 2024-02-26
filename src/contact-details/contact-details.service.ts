import { Injectable } from '@nestjs/common';
import { CreateContactDetailDto } from './dto/create-contact-detail.dto';
import { UpdateContactDetailDto } from './dto/update-contact-detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactDetail } from './entities/contact-detail.entity';
import { ContactType } from './enum/contact-enum';

@Injectable()
export class ContactDetailsService {
  
  constructor(@InjectRepository(ContactDetail) private contactRepository:Repository<ContactDetail>){}

  async create(createContactDetailDto:CreateContactDetailDto):Promise<ContactDetail[]> {
    const entries : ContactDetail[] = [];
    
    if(createContactDetailDto.primaryNumber)
    {
      entries.push(this.contactRepository.create({
        contactType:ContactType.PHONE,
        contactValue:createContactDetailDto.primaryNumber,
        
      
      }))
    }
    if (createContactDetailDto.secondaryNumbers && createContactDetailDto.secondaryNumbers.length > 0) {
      for (const secondaryNumber of createContactDetailDto.secondaryNumbers) {
        entries.push(
          this.contactRepository.create({
            contactType: ContactType.PHONE,
            contactValue: secondaryNumber,
            isPrimary: false,
            isSecondary: true,
          }),
        );
      }
    }
    if(createContactDetailDto.email)
    {
      entries.push(this.contactRepository.create({
        contactType:ContactType.EMAIL,
        contactValue:createContactDetailDto.email,
        isPrimary:false,
        isSecondary:false
      }))
    }

    // if(createContactDetailDto)
    return this.contactRepository.save(entries)
  }

  async findAll() {
    return await this.contactRepository.find({
      relations:{
        patient:true
      }
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} contactDetail`;
  // }

  update(id: number, updateContactDetailDto: UpdateContactDetailDto) {
    return this.contactRepository.update(id,updateContactDetailDto);
  }

  remove(id: number) {
    return `This action removes a #${id} contactDetail`;
  }
}
