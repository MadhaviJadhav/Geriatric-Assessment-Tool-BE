import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorModule } from './doctor/doctor.module';
import { Doctor } from './doctor/entities/doctor.entity';
import { PatientModule } from './patient/patient.module';
import { Patient } from './patient/entities/patient.entity';
import { AuthModule } from './auth/auth.module';
import { ContactDetailsModule } from './contact-details/contact-details.module';
import { ContactDetail } from './contact-details/entities/contact-detail.entity';
import { FormStatusModule } from './form-status/form-status.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FormStatus } from './form-status/entities/form-status.entity';
import { SectionMasterModule } from './section-master/section-master.module';
import { QuestionMasterModule } from './question-master/question-master.module';
import { PatientQuestionTrackerModule } from './patient-question-tracker/patient-question-tracker.module';
import { PatientSectionMasterModule } from './patient-section-master/patient-section-master.module';
import { SectionMaster } from './section-master/entities/section-master.entity';
import { QuestionMaster } from './question-master/entities/question-master.entity';
import { PatientSectionMaster } from './patient-section-master/entities/patient-section-master.entity';
import { PatientQuestionTracker } from './patient-question-tracker/entities/patient-question-tracker.entity';



@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true, envFilePath:['.local.env']}),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],

      useFactory: () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '*******',
        synchronize: true,
        logging: false,
        
        database: 'userdata',
        entities:[Doctor, Patient, ContactDetail, FormStatus, SectionMaster, QuestionMaster, PatientSectionMaster, PatientQuestionTracker],
        // migrationRun:true
        // entities:[__dirname + "/**/*.entity{.ts, .js}"]
      }),
    }),
    AuthModule,
    PatientModule,
    DoctorModule,
    ContactDetailsModule,
    FormStatusModule,
    SectionMasterModule,
    QuestionMasterModule,
    PatientQuestionTrackerModule,
    PatientSectionMasterModule
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
