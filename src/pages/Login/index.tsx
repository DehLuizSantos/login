import LoginControlador from "../../components/organismos/LoginControlador";
import * as S from "./styles";

export const LoginPage = () => {
  return (
    <S.LoginPageWrapper>
      <div className="login-image"></div>
      <LoginControlador />
    </S.LoginPageWrapper>
  );
};
