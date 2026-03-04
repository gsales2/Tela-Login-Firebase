# Autenticação Front-end com Firebase

Este projeto implementa um sistema de controle de acesso completo utilizando Firebase Authentication. O objetivo foi desenvolver uma interface de login e cadastro funcional, integrada a um provedor de identidade real, garantindo a proteção de rotas no lado do cliente.

## Funcionalidades
* **Cadastro de Usuários:** Validação de e-mail e requisitos de senha (mínimo de 6 caracteres).
* **Login de Usuários:** Autenticação via E-mail/Senha com persistência de sessão.
* **Proteção de Rotas:** Script de monitoramento que redireciona usuários não autenticados que tentam acessar páginas privadas.
* **Tratamento de Erros:** Feedback visual para credenciais inválidas, e-mails já cadastrados ou erros de configuração.
* **Encerramento de Sessão:** Função de logout com limpeza de estado e redirecionamento.

## Tecnologias Utilizadas
* **HTML5 / CSS3:** Estrutura e estilização com foco em responsividade.
* **JavaScript (ES6+):** Lógica assíncrona utilizando Módulos para organização do código.
* **Firebase 10 (Auth):** SDK para gerenciamento de usuários e segurança de back-end.

## Arquitetura e Segurança
O projeto utiliza uma estrutura modular para separar as chaves de configuração da lógica de negócio:

* **firebase-config.js:** Centraliza as credenciais do projeto (gerenciado via `.gitignore` para proteção de chaves em ambiente de desenvolvimento).
* **auth-guard.js:** Atua como um observer (`onAuthStateChanged`) para validar a identidade do usuário antes de renderizar o conteúdo protegido.

## Como Executar Localmente
1. Clone o repositório.
2. Crie um arquivo firebase-config.js na raiz seguindo o modelo das suas credenciais do Firebase Console.
3. Utilize um servidor local (como o Live Server do VS Code) para evitar erros de política de CORS ao carregar os módulos JavaScript.