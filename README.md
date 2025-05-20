# Sistema de Gestão de Pacientes, Consultas e Prontuários

Este projeto é composto por três microserviços distintos, cada um responsável por uma funcionalidade do sistema:

- **Paciente**: gerenciamento dos dados dos pacientes.
- **Consulta**: gerenciamento das consultas médicas vinculadas aos pacientes.
- **Prontuário**: gerenciamento dos prontuários médicos relacionados às consultas.

Cada microserviço roda em seu próprio container Docker, permitindo escalabilidade e independência entre os serviços.

---

## Tecnologias Utilizadas

- Node.js com TypeScript  
- Prisma ORM para interação com banco MySQL  
- MySQL como banco de dados relacional  
- Docker para containerização  
- Docker Compose para orquestração dos containers  

---

## Estrutura do Projeto

- **Paciente Service**: realiza operações CRUD de pacientes, incluindo cadastro e listagem com suas consultas associadas.  
- **Consulta Service**: realiza operações CRUD de consultas, vinculando-as aos pacientes existentes.  
- **Prontuário Service**: realiza operações CRUD dos prontuários médicos relacionados às consultas.  

---

## Docker

Cada serviço possui seu próprio container Docker. Um container adicional executa o banco de dados MySQL.  

A orquestração pode ser feita utilizando Docker Compose, que inicia os três serviços e o banco de dados simultaneamente.

---

## Como Executar

1. Tenha Docker e Docker Compose instalados.  
2. Execute `docker-compose up --build` na raiz do projeto para subir todos os containers.  
3. Acesse as APIs via portas configuradas (exemplo: 3001 para Paciente, 3002 para Consulta, 3003 para Prontuário).

---

## Observações

- Os microserviços compartilham o banco de dados MySQL, mas cada um manipula seu próprio conjunto de tabelas e responsabilidades.  
- É possível expandir o sistema para incluir autenticação, comunicação entre microserviços e outros recursos conforme necessário.

---

Qualquer dúvida ou sugestão, fique à vontade para abrir uma issue ou entrar em contato.

