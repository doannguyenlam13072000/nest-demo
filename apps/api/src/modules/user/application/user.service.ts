import { Inject, Injectable } from '@nestjs/common';


import { USER_REPOSITORY, UserRepository } from '../domain/user.repo.js';
import { User } from '../domain/user.js';
import { CreateUserDto } from '../dto/create-user.dto.js';
import { UserResponseDto } from '../dto/user-res.dto.js';

@Injectable()
export class UserService {
    constructor(
        @Inject(USER_REPOSITORY)
        private readonly userRepository: UserRepository,
    ) { }

    async create(body: CreateUserDto): Promise<UserResponseDto> {
        const existing = await this.userRepository.findByEmail(body.email);
        console.log('Testt');
        
        debugger

        if (existing) {
            throw new Error('User already exists!');
        }

        return this.userRepository.create(body);
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.findAll();
    }

    async findById(id: string): Promise<User | null> {
        return this.userRepository.findById(id);
    }

    async update(
        id: string,
        input: {
            name: string;
        },
    ): Promise<User | null> {
        const user = await this.userRepository.findById(id);

        if (!user) {
            return null;
        }

        const updatedUser: User = {
            ...user,
            name: input.name,
            updatedAt: new Date(),
        };

        return this.userRepository.update(updatedUser);
    }

    async delete(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}