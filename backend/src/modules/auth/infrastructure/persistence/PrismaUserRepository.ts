import { UserRepository } from "@modules/auth/domain/UserRepository";
import { User } from "@modules/auth/domain/User";
import { prisma } from "@config/db";

export class PrismaUserRepository implements UserRepository {
    async create(user: User): Promise<void> {
           
    }

    async findById(id: string): Promise<User | null> {
        
    }

    async findByEmail(email: string): Promise<User | null> {
        
    }
}