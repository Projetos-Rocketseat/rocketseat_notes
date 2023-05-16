import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  section {
    display: flex;
    align-items: center;
    padding: 0.8rem;
    border-radius: 1rem;
  }

  .text {
    display: flex;
    padding-left: 1rem;
    flex-direction: column;
    -webkit-box-pack: center;
    align-items: flex-start;
  }

  h5 {
    font-size: 2rem;
  }

  > .success {
    background-color: ${({ theme }) => theme.alert.success.main};
    color: ${({ theme }) => theme.fontColor.success.main};
    border-left: solid 5px ${({ theme }) => theme.fontColor.success.main};
  }
  > .info {
    background-color: ${({ theme }) => theme.alert.info.main};
    color: ${({ theme }) => theme.fontColor.info.main};
    border-left: solid 5px ${({ theme }) => theme.fontColor.info.main};
    border-radius: 1rem;
  }

  > .warning {
    background-color: ${({ theme }) => theme.alert.warning.main};
    color: ${({ theme }) => theme.fontColor.warning.main};
    border-left: solid 5px ${({ theme }) => theme.fontColor.warning.main};
  }
  > .danger {
    background-color: ${({ theme }) => theme.alert.danger.main};
    color: ${({ theme }) => theme.fontColor.white.main};
    border-left: solid 5px ${({ theme }) => theme.fontColor.danger.main};
  }

  > .icon {
    margin-right: 0.8rem;
  }

  svg {
    font-size: 3rem;
  }
`;
