import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../hook/authHook";
import { IErrorResponse, IUser } from "../../interfaces/user.interface";
import { AxiosError } from "axios";
import * as S from "./style"

export function Login() {
    const navigate = useNavigate();
    const { signIn } = useAuth()
    const [formData, setFormData] = useState<IUser>({
        email: '',
        password: '',
    })
    async function handleChange(e: IUser) {
        setFormData((state: IUser | undefined) => ({ ...state, ...e }))
    }
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        try {
            const { email, password } = formData
            await signIn({
                email: String(email),
                password: String(password),
            })
            toast.success("Login realizado com sucesso!");
            navigate('/adm')
        } catch (error) {
            const err = error as AxiosError<IErrorResponse>
            toast.error(String(err.response?.data))
        }
    }

    return (
        <S.Section>
            <form method="post" onSubmit={handleSubmit}>
                <h1>Login</h1>

                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="E-mail"
                        onChange={(e) => handleChange({ email: e.target.value })}
                        value={formData?.email}
                    />
                </div>

                <div>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="senha" id="senha" placeholder="Senha"
                        onChange={(e) => handleChange({ password: e.target.value })}
                        value={formData?.password}
                    />
                </div>

                <div className="botao">
                    <button type="submit">Entrar</button>
                </div>
                <a className="home" href="Cadastro">Cadastrar</a>
            </form>

        </S.Section>
    );
};
