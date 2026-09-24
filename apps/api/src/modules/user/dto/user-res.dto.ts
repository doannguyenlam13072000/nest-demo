import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({
    example: '68d3c8...',
    type: String
  })
  id: string;

  @ApiProperty({
    example: 'john@example.com',
    type: String
  })
  email: string;

  @ApiProperty({
    example: 'John Doe',
    type: String
  })
  name: string;

  @ApiProperty({
    example: '2026-09-24',
    type: Date
  })
  createdAt: Date

  @ApiProperty({
    example: '2026-09-24',
    type: Date
  })
  updatedAt: Date
}