import { User } from "@/domain/entity/User";

export interface IUserRepository {
    save(user: User): Promise<void>;
    getByEmail(email: string): Promise<User | undefined>;
}
