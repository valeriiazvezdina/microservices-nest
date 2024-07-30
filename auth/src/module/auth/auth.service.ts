import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InternalAccountService } from 'src/internal/account/account.service';
import { JwtDto, RefreshJwtDto } from './dto/jwt.dto';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly internalAccountService: InternalAccountService,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) {}

  async login(params: SignInDto): Promise<JwtDto> {
    const isPasswordCorrect =
      await this.internalAccountService.verification(params);

    if (!isPasswordCorrect) throw new UnauthorizedException();

    const users = await this.internalAccountService.getUsersByFilter({
      login: params.login,
    });

    const payload = { login: params.login, userId: users.items[0].userId };

    const access = this.jwtService.sign(payload, {
      secret: this.config.get('JWT_ACCESS_SECRET'),
      algorithm: this.config.get('JWT_ALG'),
      expiresIn: this.config.get('JWT_ACCESS_EXP'),
    });

    const refresh = this.jwtService.sign(payload, {
      secret: this.config.get('JWT_REFRESH_SECRET'),
      algorithm: this.config.get('JWT_ALG'),
      expiresIn: this.config.get('JWT_REFRESH_EXP'),
    });

    return {
      access,
      refresh,
    };
  }

  async refreshToken(params: RefreshJwtDto): Promise<JwtDto> {
    let jwtPayload: {
      userId: string;
      login: string;
    };

    try {
      jwtPayload = this.jwtService.verify(params.refresh, {
        secret: this.config.get('JWT_REFRESH_SECRET'),
        algorithms: this.config.get('JWT_ALG'),
      });
    } catch (err: unknown) {
      throw new UnauthorizedException();
    }

    const { items: users } = await this.internalAccountService.getUsersByFilter(
      {
        userIds: [jwtPayload.userId],
      },
    );

    if (users.length) throw new NotFoundException('User not found');

    const payload = { login: users[0].login, userId: users[0].userId };

    const access = this.jwtService.sign(payload, {
      secret: this.config.get('JWT_ACCESS_SECRET'),
      algorithm: this.config.get('JWT_ALG'),
      expiresIn: this.config.get('JWT_ACCESS_EXP'),
    });

    const refresh = this.jwtService.sign(payload, {
      secret: this.config.get('JWT_REFRESH_SECRET'),
      algorithm: this.config.get('JWT_ALG'),
      expiresIn: this.config.get('JWT_REFRESH_EXP'),
    });

    return {
      access,
      refresh,
    };
  }
}
