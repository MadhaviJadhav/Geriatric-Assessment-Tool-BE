import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { localStrategy } from './strategy/local.strategy';
import { JwtStrategy } from './strategy/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from 'src/doctor/entities/doctor.entity';
import { DoctorController } from 'src/doctor/doctor.controller';
import { DoctorService } from 'src/doctor/doctor.service';

@Module({
  imports:[TypeOrmModule.forFeature([Doctor]),
    PassportModule,
    JwtModule.register({
      secret:"madhavi",
      signOptions:{
        expiresIn:"2m"
      },
    })
  ],
  controllers: [AuthController,DoctorController],
  providers: [AuthService,localStrategy, JwtStrategy,DoctorService],
})
export class AuthModule {}
