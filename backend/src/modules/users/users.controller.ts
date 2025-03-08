import { Body, Controller, Get, Post, Query, Res, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import User from './user.entity';
import { UsersService } from './users.service';
import { SignInDto } from './dto/sign-in.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GetUser } from 'src/auth/get-user.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<{ message: string }> {
    return this.usersService.createUser(createUserDto);
  }

  @Get('verify-email')
  async verifyEmail(@Query('token') token: string, @Res() res) {
    return this.usersService.verifyEmail(token, res);
  }

  @Post('google-signup')
  async googleSignup(@Body('token') token: string) {
    return this.usersService.googleSignup(token);
  }

  @Post('signin')
  async signIn(
    @Body() signInDto: SignInDto,
  ): Promise<{ accessToken: string; expiresIn: number }> {
    return this.usersService.signIn(signInDto);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@GetUser() user: User) {
    return this.usersService.getProfile(user.userId);
  }
}
