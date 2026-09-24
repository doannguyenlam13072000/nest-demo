import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from "./application/user.service.js";
import { CreateUserDto } from "./dto/create-user.dto.js";

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }

    @Post()
    create(@Body() body: CreateUserDto) {
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