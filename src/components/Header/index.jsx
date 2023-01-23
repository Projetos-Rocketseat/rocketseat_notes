import { Container, Profile } from "./styles";

export function Header(){
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/rafmob.png"
          alt="Foto do usuário"  
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Rafael Mendes</strong>
        </div>
      </Profile>
    </Container>
  )
}