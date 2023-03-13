import { Container } from "./styles";
import { HowToReg } from "@mui/icons-material";

export function DescriptionAlerts({ title, text }) {
  return (
    <Container>
      <section className="info">
        <div className="icon">
          <HowToReg />
        </div>
        <div className="text">
          <h5>{title}</h5>
          <p>{text}</p>
        </div>
      </section>
    </Container>
  );
}
