import { ApiProperty } from '@nestjs/swagger';

export class SignUpBodyDto {
  @ApiProperty({
    example: 'test@mail.ru',
  })
  email: string;

  @ApiProperty({
    example: '1234',
  })
  password: string;
}

export class SignInBodyDto {
  @ApiProperty({
    example: 'test@mail.ru',
  })
  email: string;

  @ApiProperty({
    example: '1234',
  })
  password: string;
}

export class GetSessionInfoDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;
}
