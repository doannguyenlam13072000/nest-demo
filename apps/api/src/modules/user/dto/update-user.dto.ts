import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {
    @ApiProperty({
        example: 'b7c90531-9c47-4e8f-911e-2d6b9b85ef6c',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    id: string


    @ApiProperty({
        example: 'John Doe',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    name: string;
}