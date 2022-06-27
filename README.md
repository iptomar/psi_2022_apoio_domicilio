# psi_2022_apoio_domicilio

Este projeto fullstack foi desenvolvido no âmbito da unidade curricular de 3º ano, Projeto de Sistemas de Informação, do curso de Enegenharia Informática do instituto Politécnico de Tomar - Portugal.
Na vertente backend foi utilizada a framework ExpressJS baseada em NodeJS. Para a manipulação da base de dados em NodeJs foi utilizado o módulo Sequelize, que é baseado em TypeScript.
Na vertente frontend foi utilizada a framework Cordova, baseada em javascript, html e CSS.
Para melhoria do visual da aplicação são utilizados componentes livres da biblioteca de bootstrap.
Foi utilizado um servidor local, criado com recurso ao XAMPP.

Foram aplicados neste projeto os conceitos lecionados na UC, referentes ao modelo Agile, tendo o trabalho decorrido ao longo de duas sprints, no entanto não nos foi possível completar todos os objetivos da segunda sprint.


Endpoints

Utilizadores
GET:
http://localhost:8080/api/users/allUsers - Consulta todos os utilizadores e todos os seus atributos;
http://localhost:8080/api/users/:id - Consulta o utilizador com determinado ID e todos os seus atributos;
http://localhost:8080/api/users/name/:username - Consulta o utilizador com determinado username e todos os seus atributos;

POST:
http://localhost:8080/api/users/addUser - Adiciona utilizador à base de dados

PUT:
http://localhost:8080/api/users/:id - Atualiza utilizador da base de dados;

DELETE:
http://localhost:8080/api/users/:id - Elimina utilizador da base de dados;

Medicamentos
GET:
http://localhost:8080/api/medicamentos/allMed - Consulta todos os medicamento e todos os seus atributos;
http://localhost:8080/api/medicamentos/:id - Consulta o medicamento com determinado ID e todos os seus atributos;

POST:
http://localhost:8080/api/medicamentos/addMed - Adiciona medicamento à base de dados

PUT:
http://localhost:8080/api/medicamentos/:id - Atualiza medicamento da base de dados;

DELETE:
http://localhost:8080/api/medicamentos/:id - Elimina medicamento da base de dados;


Utentes
GET:
http://localhost:8080/api/utentes/allUtentes - Consulta todos os utente e todos os seus atributos;
http://localhost:8080/api/utentes/:id - Consulta o utente com determinado ID e todos os seus atributos;

POST:
http://localhost:8080/api/utentes/addUtente - Adiciona utente à base de dados

PUT:
http://localhost:8080/api/utentes/:id - Atualiza utente da base de dados;

DELETE:
http://localhost:8080/api/utentes/:id - Elimina utente da base de dados;

Página principal


![image](https://user-images.githubusercontent.com/48334715/176009830-7b70b34e-465c-49f6-b82c-7aeba1033093.png)



Login


![image](https://user-images.githubusercontent.com/48334715/176009951-a6f82f5f-c771-484c-9f3b-ba3209fea9fd.png)


Lista de utilizadores


![image](https://user-images.githubusercontent.com/48334715/176010039-afd7d947-b5d9-4080-ae90-5dcf5bfd8282.png)

Lista de utentes


![image](https://user-images.githubusercontent.com/48334715/176010106-7fadf2ea-802d-4aa5-bcea-2e8593a22146.png)

Lista de medicamentos


![image](https://user-images.githubusercontent.com/48334715/176010167-39e82cde-bcc5-4f1f-a6bb-b56f8c5816f0.png)


Criar utilizadores


![image](https://user-images.githubusercontent.com/48334715/176010250-b680e4f4-ff8a-45fc-80da-d5b395aa2772.png)

Criar utentes


![image](https://user-images.githubusercontent.com/48334715/176010523-936ad328-a2e1-4041-ad9e-92584565f6d5.png)

Criar medicamentos


![image](https://user-images.githubusercontent.com/48334715/176010432-9a522361-027a-4f5b-8adf-40ad5a206201.png)






