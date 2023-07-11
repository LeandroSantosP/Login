import { IGenerateTokenAuth } from "@/infra/interfaces/IGenerateTokenAuth";

export class CheckSessionUsecase {
    constructor(private readonly generateTokenAuth: IGenerateTokenAuth) {}

    async execute(token: string): Promise<Output> {
        const payload = this.generateTokenAuth.verify(token);

        return {
            ...payload,
        };
    }
}

type Output = {
    email: string;
    id: string;
    name: string;
};
