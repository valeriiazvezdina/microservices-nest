import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InternalAccountService } from 'src/internal/account/account.service';
import { JwtDto } from './dto/jwt.dto';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly internalAccountService: InternalAccountService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async login(params: SignInDto): Promise<JwtDto> {
    const isPasswordCorrect =
      await this.internalAccountService.verification(params);
    if (!isPasswordCorrect) throw new UnauthorizedException();
  }
}
