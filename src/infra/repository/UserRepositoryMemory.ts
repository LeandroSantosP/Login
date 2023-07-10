import { IUserRepository } from "@/application/repository/IUserRepository";
import { User } from "@/domain/entity/User";

export class UserRepositoryMemory implements IUserRepository {
    users: User[] = [];
    async save(user: User): Promise<void> {
        this.users.push(user);
    }
    async getByEmail(email: string): Promise<User | undefined> {
        return this.users.find((user) => user.email === email);
    }
}
