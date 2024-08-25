import { useEffect, useState } from "react";
import "../style/agents.css";
export default function Agents() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch("https://valorant-api.com/v1/agents");
        const data = await response.json();
        setAgents(data.data);
        console.log(data);
      } catch (erro) {
        console.log(erro);
      }
    };
    fetchAgents();
  }, []);
  return (
    <>
      <center>
        <h1>Informações Dos Agentes</h1>
      </center>
      <div className="Agentecontainer">
        {agents.map((Agente) => (
          <div className="Blocos" key={Agents.id}>
            <h3>{Agente.displayName}</h3>
            <h4>
              Classe: {Agente.role ? Agente.role.displayName : "Desconhecida"}
            </h4>
            <p>Descrição: {Agente.description}</p>
            <img src={Agente.displayIcon} alt="" className="imagens" />
          </div>
        ))}
      </div>
    </>
  );
}
