import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ContactDetailsService } from './contact-details.service';
import { CreateContactDetailDto } from './dto/create-contact-detail.dto';
import { UpdateContactDetailDto } from './dto/update-contact-detail.dto';
import { ContactType } from './enum/contact-enum';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';

@Controller('contact-details')
@ApiTags("Conact-Details")
@ApiSecurity('JWT-AUTH')
export class ContactDetailsController {
  constructor(private readonly contactDetailsService: ContactDetailsService) { }

  @Post()
  async create(@Body() createContactDetailDto: CreateContactDetailDto) {
    console.log(createContactDetailDto)
    try{
      const createDetails = await this.contactDetailsService.create(createContactDetailDto)
      return {success:true, data:createDetails};
    }
    catch(error){
      return {success:false, data:error};
    }
   
  }

  @Get()
  findAll() {
    return this.contactDetailsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.contactDetailsService.findOne(+id);
  // }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateContactDetailDto: UpdateContactDetailDto) {
    return this.contactDetailsService.update(+id, updateContactDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactDetailsService.remove(+id);
  }
}
