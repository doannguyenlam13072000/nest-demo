import { CreateUserDto } from "../dto/create-user.dto.js";
import { User } from "./user.js"

export const USER_REPOSITORY = Symbol('USER_REPOSITORY')

export interface UserRepository {
    create(user: CreateUserDto): Promise<User>;

    findAll(): Promise<User[]>;

    findById(id: string): Promise<User | null>;

    findByEmail(email: string): Promise<User | null>;

    update(user: User): Promise<User>;

    delete(id: string): Promise<void>;
}