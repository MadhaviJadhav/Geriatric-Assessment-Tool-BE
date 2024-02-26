import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { FormStatusService } from './form-status.service';
import { CreateFormStatusDto } from './dto/create-form-status.dto';
import { UpdateFormStatusDto } from './dto/update-form-status.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('form-status')
@ApiTags("Form-Status")
export class FormStatusController {
  constructor(private readonly formStatusService: FormStatusService) {}

  @Post()
  create(@Body() createFormStatusDto: CreateFormStatusDto) {
    return this.formStatusService.create(createFormStatusDto);
  }

  @Get()
  findAll() {
    return this.formStatusService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.formStatusService.findOne(+id);
  // }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFormStatusDto: UpdateFormStatusDto) {
    return this.formStatusService.update(+id, updateFormStatusDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.formStatusService.remove(+id);
  // }
}
