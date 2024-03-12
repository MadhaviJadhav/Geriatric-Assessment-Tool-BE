import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SectionMasterService } from './section-master.service';
import { CreateSectionMasterDto } from './dto/create-section-master.dto';
import { UpdateSectionMasterDto } from './dto/update-section-master.dto';

@Controller('section-master')
export class SectionMasterController {
  constructor(private readonly sectionMasterService: SectionMasterService) {}

  // constructor(private readonly sectionService: SectionMasterService) {}

  @Get()
  getAllSections() {
    return this.sectionMasterService.findAll();
  }
  @Post()
  async createSection(@Body('sectionName') sectionName: string) {
    const createdSection = await this.sectionMasterService.create(sectionName);
    return { section: createdSection };
  }

  @Get()
  findAll() {
    return this.sectionMasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sectionMasterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSectionMasterDto: UpdateSectionMasterDto) {
    return this.sectionMasterService.update(+id, updateSectionMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sectionMasterService.remove(+id);
  }
}
