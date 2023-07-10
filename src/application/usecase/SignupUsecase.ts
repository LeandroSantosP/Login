import { User } from "@/domain/entity/User";
import { IUserRepository } from "../repository/IUserRepository";

export class SignupUsecase {
    constructor(private readonly userRepository: IUserRepository) {}

    async execute(input: Input): Promise<void> {
        const userAlreadyExits = await this.userRepository.getByEmail(input.email);
        if (userAlreadyExits) throw new Error("User already exists!");
        const user = await User.create(input.name, input.email, input.password, input.age);
        await this.userRepository.save(user);
    }
}

type Input = {
    name: string;
    email: string;
    password: string;
    age: number;
};
