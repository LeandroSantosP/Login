import { User } from "@/domain/entity/User";
import { GenerateTokenAuthJwt } from "@/infra/service/GenerateTokenAuthJwt";

test("Deve gerar um token para autenticação", async function () {
    const user = await User.create("Erick Silva", "erick.123@gmail.com", "senha123", 21);
    const John = new GenerateTokenAuthJwt();
    const { token } = John.generate(user, new Date("2023-06-12"));

    expect(token).not.toBeNull();
});

test("Deve validar um token existent", async function () {
    const user = await User.create("Erick Silva", "erick.123@gmail.com", "senha123", 21, "12345");
    const John = new GenerateTokenAuthJwt();
    const { token } = John.generate(user, new Date("2023-06-12"));
    const { email, id, name } = John.verify(token);

    expect(email).toBe("erick.123@gmail.com");
    expect(id).toBe("12345");
    expect(name).toBe("Erick Silva");
});
