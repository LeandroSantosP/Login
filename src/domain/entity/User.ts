import { randomUUID } from "crypto";
import { Password } from "./Password";

export class User {
    private constructor(
        readonly id: string,
        readonly name: string,
        readonly email: string,
        readonly password: Password,
        readonly age: number
    ) {
        if (age < 18) throw new Error("User must be greater than 18 year old!");
        if (name.split(" ").length < 2) throw new Error("Name must contais at least 2 words");
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) throw new Error("Email is not valid");
    }

    static async create(name: string, email: string, password: string, age: number, id: string = randomUUID()) {
        return new User(id, name, email, await Password.create(password), age);
    }
}
