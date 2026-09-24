import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({
    example: '68d3c8...',
  })
  id: string;

  @ApiProperty({
    example: 'john@example.com',
  })
  email: string;

  @ApiProperty({
    example: 'John Doe',
  })
  name: string;

  @ApiProperty({
    example: '2026-09-24'
  })
  createdAt: Date

  @ApiProperty({
    example: '2026-09-24'
  })
  updatedAt: Date
}