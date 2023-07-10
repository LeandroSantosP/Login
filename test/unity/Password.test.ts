import { Password } from "@/domain/entity/Password";

test("Deve ser possível criar um senha valida", async function () {
    const pass = await Password.create("senha123");

    expect(pass.getValue()).not.toBe("senha123");
});

test("nao deve ser possível criar um usuário com a senha menor de 8 caracteres", async function () {
    await expect(() => Password.create("senha12")).rejects.toThrow(
        new Error("Password must be at least 8 characters long")
    );
});

test("deve ser possível validar se uma senha esta correta!", async function () {
    const password = await Password.create("senha123");
    const ValidPass = await password.verify("senha123");
    const NotValidPass = await password.verify("senha123123");

    expect(ValidPass).toBeTruthy();
    expect(NotValidPass).toBeFalsy();
});
