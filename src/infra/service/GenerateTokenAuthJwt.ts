import { User } from "@/domain/entity/User";
import { sign, verify } from "jsonwebtoken";
import { IGenerateTokenAuth, Payload } from "../interfaces/IGenerateTokenAuth";

export class GenerateTokenAuthJwt implements IGenerateTokenAuth {
    key = "mySecretKey";
    constructor() {}
    verify(token: string): Payload {
        return verify(token, this.key) as Payload;
    }

    generate(user: User, issueDate: Date, expiresIn: string = "1h"): { token: string } {
        const token = sign({ name: user.name, email: user.email, id: user.id, iat: issueDate.getTime() }, this.key, {
            expiresIn,
        });
        return {
            token,
        };
    }
}
