import { Container } from "./styles";

export function Button(props){
  return (
    <Container type="button">
      {props.title}
    </Container>
  ) 
}

export function Button2({title, loading = false, ...rest}){
  return (
    <Container
      type="button"
      disabled={loading}
      {...rest}
    >
      {loading ? 'Carregando...' : title}
    </Container>
  ) 
}