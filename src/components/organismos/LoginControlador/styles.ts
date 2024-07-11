import styled, { css } from "styled-components";

export const LoginControlerWrapper = styled.div`
  ${({ theme }) => css`
    width: 320px;
    height: 600px;
    text-align: center;
    background-color: ${theme.colors.white};
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    .dialogo {
      margin: 15px 0;

      h2 {
        font-size: ${theme.sizes.meddium};
        font-weight: 700;
        color: ${theme.colors.blackWca};
        margin: 15px 0;
      }

      p {
        font-size: ${theme.sizes.small};
        font-weight: 300;
        color: ${theme.colors.blackSti};
        text-wrap: nowrap;
      }
    }
  `}
`;

export const LoginControlerContainer = styled.div`
  ${() => css`
    padding: 30px;
  `}
`;

export const LoginControladorInputs = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 30px;

    a {
      font-family: "Ubunto", monospace;
      font-size: ${theme.sizes.xSmall};
      color: ${theme.colors.gray["700"]};
      font-weight: 400;
      text-decoration: underline;
      text-wrap: nowrap;
    }
  `}
`;

export const LoginControladorFooter = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 0 50px 48px 50px;
    border-radius: 0 0 8px 8px;
    background-color: ${theme.colors.gray["300"]};
  `}
`;
