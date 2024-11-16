import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtDto, RefreshJwtDto } from './dto/jwt.dto';
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() dto: SignInDto): Promise<JwtDto> {
    return this.authService.login(dto);
  }

  @Post('refresh/token')
  refreshToken(@Body() dto: RefreshJwtDto): Promise<RefreshJwtDto> {
    return this.authService.refreshToken(dto);
  }
}
