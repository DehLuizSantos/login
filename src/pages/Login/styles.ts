import styled, { css } from "styled-components";
import fundo from "../../assets/imagens/novos-icones/STI_logo_Cor.svg";

export const LoginPageWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${theme.colors.blackSti};
    position: relative;
    z-index: 2;

    .login-image {
      background-image: url(${fundo});
      background-repeat: no-repeat;
      background-position: calc(60% - 60px) -60px;
      background-blend-mode: exclusion;
      position: absolute;
      height: 90vh;
      width: 50%;
      right: 0;
      z-index: -1;
    }
  `}
`;