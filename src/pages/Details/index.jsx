import { Container, Links, Content } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota" />

          <h1>Introdução ao ReactJS</h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
            eaque nihil eveniet nulla similique ut iure repellendus modi
            voluptatum, voluptatibus, sed quo quisquam culpa! Maxime itaque
            aspernatur corrupti vitae deleniti beatae inventore fugiat.
            Recusandae delectus pariatur est molestias natus aperiam magnam,
            facere fugiat distinctio, quaerat laudantium cum? Placeat, voluptate
            vero cupiditate. Quod eveniet maxime suscipit aspernatur, officiis
            pariatur fugiat dolorem itaque iusto! Est, quam.
          </p>

          <Section title="Links Úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="NodeJs" />
            <Tag title="JavaScript" />
            <Tag title="NodeJS" />
            <Tag title="PHP" />
            <Tag title="MySQL" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
