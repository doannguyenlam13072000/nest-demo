import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({
        example: 'example@gmail.com',
        type: String
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        example: 'John Doe',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    name: string;
}