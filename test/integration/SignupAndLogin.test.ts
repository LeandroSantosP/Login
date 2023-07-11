import { LoginUsecase } from "@/application/usecase/LoginUsecase";
import { SignupUsecase } from "@/application/usecase/SignupUsecase";
import { UserRepositoryMemory } from "@/infra/repository/UserRepositoryMemory";
import { GenerateTokenAuthJwt } from "@/infra/service/GenerateTokenAuthJwt";

test("Deve ser possível efetuar um signup e login!", async function () {
    const userRepository = new UserRepositoryMemory();
    const signup = new SignupUsecase(userRepository);
    const generateToken = new GenerateTokenAuthJwt();

    const inputSingUp = {
        name: "John Doe",
        email: "john.doe@gmail.com",
        password: "senha123",
        age: 20,
    };
    await signup.execute(inputSingUp);

    const login = new LoginUsecase(userRepository, generateToken);

    const inputLogin = {
        email: "john.doe@gmail.com",
        password: "senha123",
    };

    const output = await login.execute(inputLogin);

    expect(output.name).toBe("John Doe");
    expect(output.token).toBeDefined();
});
