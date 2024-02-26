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
        password: 'sheela0703',
        synchronize: true,
        logging: false,
        database: 'userdata',
        entities:[Doctor, Patient, ContactDetail, FormStatus]
        // entities:[__dirname + "/**/*.entity{.ts, .js}"]
      }),
    }),
    AuthModule,
    PatientModule,
    DoctorModule,
    ContactDetailsModule,
    FormStatusModule
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
