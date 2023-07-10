import { User } from "@/domain/entity/User";

export type Payload = {
    email: string;
    id: string;
    name: string;
};

export interface IGenerateTokenAuth {
    generate(user: User, issueDate: Date, expiresIn?: string): { token: string };
    verify(token: string): Payload;
}
