import { useState } from "react";
import { FiLogIn, FiMail, FiLock, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, Background } from "./styles";
import { DescriptionAlerts } from "../../components/Alert";

export function SignUp() {
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertMessage, setAlertMessage] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    // if (!name || !email || !password) {
    //   setAlertMessage(true);
    //   return alert("Todos os campos devem ser preenchidos");
    // }

    api
      .post("/users", { name, email, password })
      .then((res) => {
        console.log(res);
        if (res.data) {
          setAlertSuccess(true);
        }
      })
      .catch((error) => {
        if (error.response) {
          setAlertMessage(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }

  return (
    <Container>
      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta!</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <span className="button">
          <Button title={"Cadastrar"} onClick={handleSignUp} />
        </span>

        {alertMessage && (
          <DescriptionAlerts title={"Atenção!"} text={alertMessage} />
        )}

        {alertSuccess && (
          <DescriptionAlerts title={"Parabéns!"} text={alertSuccess} />
        )}

        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  );
}
