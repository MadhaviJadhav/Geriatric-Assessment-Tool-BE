import { Body, Controller, Get, HttpException, Param, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthPayloadDto } from './dto/create-auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from './guards/local.guard';
import { JwtAuthGuard } from './guards/jwt.guard';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Login')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalGuard)
  login(@Body() authPayloadDto:AuthPayloadDto,)
  {
     const doctor =  this.authService.validateDoctor(authPayloadDto);
     console.log('doctor',doctor)
     if(!doctor) {
      console.log("Hii");
      
     }
     return doctor;
  }

  @Get('status')
  @UseGuards(JwtAuthGuard)
  status(@Request() req)
  {
    console.log("Inside Authcon status method");
    console.log(req.doctor)
    return req.doctor;
    
  }
}
