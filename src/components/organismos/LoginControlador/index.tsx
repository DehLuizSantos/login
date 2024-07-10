import * as S from "./styles";
import LogoSalles from "../../../assets/imagens/WCA/Salestech-intelligence-new.png";
import InputDeTexto from "wca-designsystem/src/components/atomos/InputDeTexto";
import Botao from "wca-designsystem/src/components/atomos/Botao";
import { Link } from "react-router-dom";
import Versao from "wca-designsystem/src/components/atomos/Versao";
import AjudaIcone from "wca-designsystem/src/components/atomos/AjudaIcone";
import { useForm } from "@mantine/form";
import { useLogin } from "../../../hooks/login";
import { theme } from "wca-designsystem/src/styles/theme";

const LoginControlador = () => {
  const form = useForm({
    mode: "controlled",
    initialValues: {
      login: "",
      senha: ""
    },

    validate: {
      login: value => (/^\S+@\S+$/.test(value) ? null : "login invalido"),
      senha: value =>
        /^(?=.*[A-Z])(?=.*\W).{7,}$/.test(value)
          ? null
          : "Senha deve ter pelo menos 7 caracteres, com um especial e uma letra maiuscula"
    }
  });
  const { Login } = useLogin();

  return (
    <S.LoginControlerWrapper data-testid="login-controlador">
      <S.LoginControlerContainer>
        <img src={LogoSalles} alt={"salestech"} />
        <div className="dialogo">
          <h2>Bem-Vindo(a)!</h2>
          <p>Transforme dados em estratégias vencedoras.</p>
          <p>Faça o acesso e impulsione suas vendas agora!</p>
        </div>

        <S.LoginControladorInputs onSubmit={form.onSubmit(() => Login(form))}>
          <InputDeTexto
            tipo="login"
            key={form.key("login")}
            onChange={form.getInputProps("login").onChange}
            value={form.getInputProps("login").value}
            error={form.getInputProps("login").error}
          />
          <InputDeTexto
            tipo="password"
            onChange={form.getInputProps("senha").onChange}
            value={form.getInputProps("senha").value}
            error={form.getInputProps("senha").error}
            key={form.key("senha")}
          />
          <Botao
            tipo="default"
            color={theme.colors.blue}
            radius={8}
            type="submit"
            h="48px"
          >
            ACESSAR
          </Botao>

          <Link to="/">Esqueceu sua senha? Clique aqui para recuperar</Link>
        </S.LoginControladorInputs>
      </S.LoginControlerContainer>

      <S.LoginControladorFooter>
        <Versao
          isNavHover={true}
          ultimaAtt=" dez.2023"
          versao="versão 10.876.2"
        />

        <AjudaIcone tipo="login" isHover={true} />
      </S.LoginControladorFooter>
    </S.LoginControlerWrapper>
  );
};

export default LoginControlador;
