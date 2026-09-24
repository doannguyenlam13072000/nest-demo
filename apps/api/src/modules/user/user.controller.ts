import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from "./application/user.service.js";
import { CreateUserDto } from "./dto/create-user.dto.js";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserResponseDto } from "./dto/user-res.dto.js";

@ApiTags('users')
@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }

    @Post()
    @ApiOperation({
        summary: 'Create new user'
    })
    @ApiResponse({
        type: UserResponseDto
    })
    create(@Body() body: CreateUserDto): Promise<CreateUserDto> {
        return this.userService.create(body);
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.userService.findById(id);
    }

    @Get()
    findAll() {
        return this.userService.findAll();
    }
}