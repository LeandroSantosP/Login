import { IGenerateTokenAuth } from "@/infra/interfaces/IGenerateTokenAuth";
import { IUserRepository } from "../repository/IUserRepository";

export class LoginUsecase {
    constructor(
        private readonly userRepository: IUserRepository,
        private readonly generateTokenAuth: IGenerateTokenAuth
    ) {}

    async execute(input: Input): Promise<Output> {
        const user = await this.userRepository.getByEmail(input.email);
        if (!user) throw new Error("Authentication failed");

        const validPassword = await user.password.verify(input.password);
        if (!validPassword) throw new Error("Authentication failed");

        const { token } = this.generateTokenAuth.generate(user, new Date());

        return {
            name: user.name,
            token,
        };
    }
}

type Input = {
    email: string;
    password: string;
};

type Output = {
    token: string;
    name: string;
};
