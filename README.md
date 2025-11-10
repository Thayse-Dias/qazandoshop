# QazandoShop - Automação E2E com Cypress

https://img.shields.io/badge/Cypress-15.6.0-green?logo=cypress
https://img.shields.io/badge/Node.js-v22.12.0-green?logo=node.js
https://img.shields.io/badge/Mochawesome-7.1.4-blue
https://img.shields.io/badge/Lighthouse-Performance%252037-red
https://img.shields.io/badge/tests-8%2520passing-brightgreen
https://github.com/Thayse-Dias/qazandoshop/actions/workflows/cypress.yml/badge.svg

> **Projeto de automação E2E com testes de UI, API, Performance, relatórios profissionais e CI/CD.**  
> **Autora**: **Thayse Maria Dias Fonseca** — *QA em formação*

---

## Índice

- [Descrição do Projeto](#descrição-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Execução dos Testes](#execução-dos-testes)
- [Relatórios](#relatórios)
- [Lighthouse (Performance)](#lighthouse-performance)
- [Custom Commands](#custom-commands)
- [CI/CD](#cicd)
- [Estratégia de Testes](#estrategia-de-testes)
- [Autora](#autora)
- [Licença](#licença)

---

## Descrição do Projeto

Este projeto realiza **testes automatizados ponta a ponta** no site **[Automation Practice](https://www.automationpratice.com.br/)** utilizando **Cypress v15.6.0**.

### Fluxos Testados:
| Tipo | Fluxo | Status | Cobertura 
|------|------|--------|--------|
| UI | Cadastro de usuário | PASSOU | Funcionalidade completa |
| UI | Login com popup | PASSOU | Autenticação de usuário |
| UI | Adicionar aos favoritos | PASSOU | Interação com produtos |
| API | Authentication (JWT) | **4 PASSING** | Endpoints de autenticação |
| Performance | Lighthouse Audit | **37/100** (real) | Métricas de performance |

> **Total: 8 testes PASSING | 100% de sucesso funcional**

---

## Funcionalidades

✅ Testes de UI com seletores robustos e estratégia de localização eficiente

🔗 Testes de API com cy.request() e validação de Bearer Token

⚡ Lighthouse integrado para auditoria de Performance, Acessibilidade, SEO e Boas Práticas

🛠 Custom Commands reutilizáveis para ações comuns

📊 Relatórios Mochawesome profissionais com:

- Informações da QA executora

- Gráficos e estatísticas detalhadas

- Código dos testes

- Scores do Lighthouse integrados

🔄 CI/CD com GitHub Actions para execução automatizada

🌐 Execução em Chrome headless para ambientes CI

🎯 Configuração modular e fácil manutenção

---
## Tecnologias Utilizadas

|Tecnologia |	Versão | Finalidade |
|------|------|--------|
|Cypress |	15.6.0 |	Framework de automação E2E |
|Node.js |	22.12.0	| Ambiente de execução |
|Mochawesome |	7.1.4	| Geração de relatórios |
|Lighthouse |	9.6.8	| Auditoria de performance |
|GitHub Actions|	-	 | CI/CD Pipeline |
|Chrome |	Latest |	Browser para execução |

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) `v22.12.0` ou superior
- `npm` (incluído com Node.js)
- Git

```bash
node --version
npm --version
git --version
```

---

## Instalação

```bash
git clone https://github.com/Thayse-Dias/qazandoshop.git
cd qazandoshop
npm install
npx cypress open
```

---

## Estrutura do Projeto

```text

qazandoshop/
├── .github/
│   └── workflows/
│       └── cypress.yml           # Pipeline CI/CD
├── cypress/
│   ├── e2e/
│   │   ├── testedeAPI/
│   │   │   └── auth.cy.js        # 4 testes de API (JWT)
│   │   ├── cadastro.cy.js        # Fluxo de cadastro
│   │   ├── login.cy.js           # Fluxo de login
│   │   ├── main.cy.js            # Testes principais
│   │   └── lighthouse.cy.js      # Auditoria de performance
│   ├── fixtures/                 # Dados de teste
│   ├── reports/                  # Relatórios Mochawesome + Lighthouse
│   ├── screenshots/              # Capturas de tela em falhas
│   ├── support/
│   │   ├── commands.js           # Custom commands
│   │   └── e2e.js                # Configurações globais
│   └── videos/                   # Gravações de execução
├── cypress.config.js             # Configuração principal
├── package.json                  # Dependências e scripts
└── README.md                     # Documentação
```

---

## Execução dos Testes

🎯 Comandos Disponíveis

|Comando | Descrição | Ambiente |
|npm run test | Todos os testes (headless) | CI/Local |
|npm run open | Modo interativo | Local |
|npm run report:full |	Executa testes e gera relatório completo |	Local |
|npm run lighthouse	| Executa apenas testes de performance |	Local |

🚀 Execução Completa

```bash
# Executar todos os testes
npm run test

# Ou execute diretamente com o Cypress
npx cypress run --browser chrome
```

---

## Relatórios

## Relatório Mochawesome (HTML + Gráficos)
```bash
npm run report:full
```
---

## Lighthouse (Performance)

```js
cy.lighthouse({
  performance: 30,
  accessibility: 80,
  'best-practices': 80,
  seo: 80,
});
```

📈 Métricas Monitoradas

|Métrica |	Score | Atual	Meta |
|Performance |	37 |	≥ 30 |
|Accessibility |	88 |	≥ 80 |
|Best Practices |	87 |	≥ 80 |
|SEO |	98 | ≥ 80 |
Nota: O score de performance (37) reflete condições reais do ambiente de teste.

---

## Custom Commands

🔧 Comandos Personalizados Implementados
```javascript
// Comando para login via API
Cypress.Commands.add('loginViaAPI', (email, password) => {
  cy.request({
    method: 'POST',
    url: '/api/auth',
    body: { email, password }
  }).then((response) => {
    expect(response.status).to.eq(200);
    window.localStorage.setItem('token', response.body.token);
  });
});

// Comando para capturar screenshot com nome descritivo
Cypress.Commands.add('takeScreenshot', (name) => {
  cy.screenshot(name, { capture: 'runner' });
});
```

---

## CI/CD

📦 Pipeline GitHub Actions

Arquivo: .github/workflows/cypress.yml

Funcionalidades:

✅ Execução automática em pushes para main

✅ Cache de dependências para performance

✅ Upload de artifacts (vídeos, screenshots, relatórios)

✅ Status checks no GitHub

Trigger: Push para branch main ou Pull Requests

---

##  Estratégia de Testes

📋 Abordagem de Teste
1. Testes de UI (Ponta a Ponta)

- Fluxos críticos do usuário

- Interações com interface

- Validações de estado

2. Testes de API

- Contract testing

- Validação de status codes

- Estrutura de responses

3.Testes de Performance

- Métricas Core Web Vitals

- Auditoria contínua

- Monitoramento de regressões

🎨 Padrões de Desenvolvimento
- Page Objects: Organização por funcionalidade

- Custom Commands: Reutilização de código

- Data-Driven: Testes parametrizados

- Assertivas: Validações claras e específicas

---

## Autora

👩💻 Thayse Maria Dias Fonseca
QA Sênior | Automação com Cypress | Performance Testing | DevOps
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Thayse_Dias-blue?logo=linkedin)](https://www.linkedin.com/in/thaysedias2526/)
[![GitHub](https://img.shields.io/badge/GitHub-Thayse--Dias-black?logo=github)](https://github.com/Thayse-Dias)

> **"Nunca desisti. Transformei cada erro em um teste automatizado."**

---

## Licença
Este projeto está sob a licença ISC. Veja o arquivo LICENSE para mais detalhes.
