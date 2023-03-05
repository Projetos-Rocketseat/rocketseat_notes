import { Container } from "./styles";
import { HowToReg } from "@mui/icons-material";

export function DescriptionAlerts() {
  return (
    <Container>
      <section className="info">
        <div className="icon">
          <HowToReg />
        </div>
        <div className="text">
          <h5>Teste</h5>
          <p>Todos os campos devem ser preenchidos</p>
        </div>
      </section>
    </Container>
  );
}
