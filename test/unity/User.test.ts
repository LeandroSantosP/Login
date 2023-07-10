import { User } from "@/domain/entity/User";

test("deve ser possível criar um usuário valido", async function () {
    const user = await User.create("Erick Silva", "erick.123@gmail.com", "senha123", 21);
    expect(user).toBeDefined();
});

test("nao deve ser possível criar um usuário com email invalido", async function () {
    await expect(() => User.create("Erick Silva", "erick.123mail.com", "senha123", 21)).rejects.toThrow(
        new Error("Email is not valid")
    );
});

test("nao deve ser possível criar um usuário com menos de 18 anos", async function () {
    await expect(() => User.create("Erick Silva", "erick.123@mail.com", "senha123", 10)).rejects.toThrow(
        new Error("User must be greater than 18 year old!")
    );
});
