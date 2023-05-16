import styled from "styled-components";
import backgroundImg from "../../assets/image.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 13.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .button {
    width: 100%;
    margin-bottom: 2rem;
  }

  > h1 {
    font-size: 2.8rem;
    color: ${({ theme }) => theme.COLORS.GREEN};
  }

  > h2 {
    font-size: 1.8rem;
    margin: 2rem 0 3rem;
  }

  > p {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 2rem;
    color: ${({ theme }) => theme.COLORS.GREEN};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
