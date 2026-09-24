import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "@/modules/user/domain/user.js";
import { UserRepository } from "../domain/user.repo.js";
import { CreateUserDto } from "../dto/create-user.dto.js";
import { UpdateUserDto } from "../dto/update-user.dto.js";
import { UserDocument, UserSchema } from "./user.schema.js";
import { UserResponseDto } from "../dto/user-res.dto.js";

@Injectable()
export class UserRepo implements UserRepository {
    constructor(
        @InjectModel(UserSchema.name)
        private readonly userModel: Model<UserDocument>
    ) { }

    async create(user: CreateUserDto): Promise<User> {
        const res = await this.userModel.create(user);

        return this.toDomain(res)
    }

    async findAll(): Promise<User[]> {
        const res = await this.userModel.find().exec();

        return res.map(item => this.toDomain(item));
    }

    async findById(id: string): Promise<User | null> {
        const res = await this.userModel.findById(id).exec();

        if (!res) return null

        return this.toDomain(res);
    }

    async findByEmail(email: string): Promise<User | null> {
        const res = await this.userModel.findOne({
            email: email
        }).exec()

        if (!res) return null

        return this.toDomain(res);
    }

    async update(user: UpdateUserDto): Promise<User> {
        const res = await this.userModel.findByIdAndUpdate(
            user.id,
            {
                name: user.name
            },
            {
                new: true,
                runValidators: true
            }
        ).exec()

        if (!res) {
            throw new Error(`User ${user.id} not found`);
        }

        return this.toDomain(res);
    }

    async delete(id: string): Promise<void> {
        await this.userModel
            .findByIdAndDelete(id)
            .exec();
    }

    private toDomain(document: UserDocument): UserResponseDto {
        return {
            id: document._id.toString(),
            name: document.name,
            email: document.email,
            createdAt: document.createdAt,
            updatedAt: document.updatedAt
        };
    }
}