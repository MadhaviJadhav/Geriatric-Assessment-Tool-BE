import { Module } from '@nestjs/common';
import { ContactDetailsService } from './contact-details.service';
import { ContactDetailsController } from './contact-details.controller';
import { ContactDetail } from './entities/contact-detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([ContactDetail])],
  controllers: [ContactDetailsController],
  providers: [ContactDetailsService],
})
export class ContactDetailsModule {}
