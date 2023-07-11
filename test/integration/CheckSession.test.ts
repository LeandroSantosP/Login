import { CheckSessionUsecase } from "@/application/usecase/CheckSessionUsecase";
import { GenerateTokenAuthJwt } from "@/infra/service/GenerateTokenAuthJwt";

test("Deve checar o token de autenticação", async function () {
    const generateToken = new GenerateTokenAuthJwt();
    const checkSession = new CheckSessionUsecase(generateToken);

    /* Jwt will expire soon */

    const output = await checkSession.execute(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJlbWFpbCI6ImpvaG4uZG9lQGdtYWlsLmNvbSIsImlkIjoiYzY2NjY2ZDMtYTFjMS00OTZhLTgwYWYtZTIyNDc0NjE5Mjc0IiwiaWF0IjoxNjg5MDk1NzM2MTczLCJleHAiOjE2ODkwOTU3Mzk3NzN9.3iW5gXq4WgvlDMtWxHtEixnXMsgSg36kTTy_xfGm5dI"
    );

    expect(output.email).toBe("john.doe@gmail.com");
});
