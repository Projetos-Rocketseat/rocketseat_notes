import { Container } from "./styles";

export function Button({ title, onClick }) {
  return (
    <Container type="button" onClick={onClick}>
      {title}
    </Container>
  );
}

export function Button2({ title, loading = false, onClick, ...rest }) {
  return (
    <Container type="button" onClick={onClick} disabled={loading} {...rest}>
      {loading ? "Carregando..." : title}
    </Container>
  );
}
