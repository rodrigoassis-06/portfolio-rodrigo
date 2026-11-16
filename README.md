# 🚀 Portfólio Profissional Web - Rodrigo Assis

> Projeto desenvolvido para a **Agenda 10 - Desenvolvimento de Sistemas I**  
> Curso Técnico em Desenvolvimento de Sistemas — **Centro Paula Souza (EAD TEC)**

---

## 👤 Identificação do Aluno
* **Nome do Aluno:** Rodrigo Assis
* **E-mail de Contato:** [rodrigolucianoo14@gmail.com](mailto:rodrigolucianoo14@gmail.com)
* **Curso:** Técnico em Desenvolvimento de Sistemas
* **Instituição:** Centro Paula Souza (CPS) / EAD TEC
* **Componente Curricular:** Desenvolvimento de Sistemas I — Agenda 10 (Apresentação do Portfólio)

---

## 🌐 Links do Projeto
* 🔗 **Link do Repositório no GitHub:** [https://github.com/rodrigoassis-06/portfolio-rodrigo](https://github.com/rodrigoassis-06/portfolio-rodrigo)
* 🚀 **Link do Site Publicado (GitHub Pages):** [https://rodrigoassis-06.github.io/portfolio-rodrigo](https://rodrigoassis-06.github.io/portfolio-rodrigo)
* 💼 **Perfil GitHub:** [https://github.com/rodrigoassis-06](https://github.com/rodrigoassis-06)

---

## 📖 Descrição do Portfólio
O presente projeto consiste em uma página web responsiva de apresentação profissional e portfólio pessoal. Ele foi desenvolvido com foco em demonstrar as competências adquiridas ao longo da disciplina, servindo como uma vitrine de projetos, habilidades técnicas, formação acadêmica e canais diretos para contato profissional.

A interface foi projetada com design moderno, acessível e totalmente responsivo para celulares, tablets e desktops, contando com a fotografia oficial do perfil profissional do aluno.

---

## 🛠️ Tecnologias Utilizadas
* **HTML5:** Estruturação semântica de marcação (`<nav>`, `<section>`, `<header>`, `<footer>`, `<article>`).
* **CSS3:** Folha de estilos personalizada com variáveis CSS (`:root`), Flexbox, CSS Grid e microinterações de animação.
* **Bootstrap 5.3:** Framework CSS moderno para grid responsivo, componentes nativos (Navbar colapsável, Modais, Cards, Progress Bars e Alertas).
* **Bootstrap Icons (v1.11):** Pacote de ícones vetoriais integrados.
* **JavaScript (ES6+):** Manipulação dinâmica da árvore DOM, controle de temas e validações de eventos.
* **Git & GitHub Pages:** Controle de versionamento distribuído e deploy estático automatizado.

---

## ⚙️ Explicação do Funcionamento do Projeto
A página organiza-se em uma arquitetura de *Single Page Application* (SPA) com navegação fluida por âncoras e *ScrollSpy* ativo:

1. **Menu de Navegação Superior (Navbar):** Fixado no topo com efeito *glassmorphism*, colapsável em dispositivos móveis e com realce automático da seção ativa conforme a rolagem.
2. **Seção de Apresentação (Hero Section):** Destaque inicial com a foto de perfil profissional de Rodrigo, saudação, status de disponibilidade e botões de chamada para ação (CTA).
3. **Seção de Perfil / Sobre Mim:** Apresentação da trajetória profissional, foco acadêmico e diferenciais de atuação.
4. **Seção de Habilidades (Skills):** Exibição quantitativa e qualitativa das competências em Front-End, Back-End e ferramentas essenciais.
5. **Seção de Formação:** Linha do tempo estruturada contendo a formação técnica no CPS e certificações complementares.
6. **Seção de Projetos:** Galeria de cards com tags de tecnologias, botão para acesso ao repositório e acionamento de **Janelas Modais do Bootstrap** com os detalhes aprofundados de cada aplicação.
7. **Seção de Contato:** Formulário com validação em tempo real e cartões de contato direto (E-mail `rodrigolucianoo14@gmail.com`, WhatsApp, LinkedIn e GitHub `rodrigoassis-06`).
8. **Rodapé (Footer):** Informações de direitos autorais, links para redes sociais e especificações da disciplina.

---

## ✨ Recursos Novos Adicionados (Além da Aula)

Para atender ao critério de evolução do projeto com recursos extras, foram adicionados:

### 1. Alternador de Modo Escuro / Claro (Dark & Light Mode)
* **Descrição:** Permite ao visitante alternar visualmente entre o tema claro e o tema escuro com um único clique. A escolha do usuário é gravada no navegador (`LocalStorage`), mantendo a preferência salva mesmo após recarregar a página.
* **Como foi implementado:**
  * No `index.html`: Criado um botão na barra de navegação com identificador `#theme-toggle` e ícones dinâmicos do Bootstrap Icons.
  * No `style.css`: Utilizados seletores de atributo `[data-bs-theme="dark"]` e cores dinâmicas integradas às variáveis do Bootstrap 5.
  * No `script.js`: Implementado ouvinte de evento `click` que lê e comuta o atributo `data-bs-theme` do elemento raiz `<html>`, alternando os ícones de sol e lua e persistindo a chave `'portfolio-theme'` via `localStorage.setItem()`.

### 2. Seção Nova: Habilidades Técnicas com Barras de Progresso
* **Descrição:** Exibição gráfica e categorizada das competências com barras de progresso animadas (`.progress-bar`) e porcentagens de proficiência.
* **Como foi implementado:**
  * Uso dos componentes de progresso do Bootstrap 5 (`.progress` e `.progress-bar`), estilizados com cantos arredondados (`rounded-pill`) e paleta de cores harmonizada.

### 3. Modais de Detalhes para Projetos
* **Descrição:** Em vez de links estáticos simples, cada card possui um botão interativo que abre uma janela modal (`modal-dialog-centered`) com a ficha técnica do projeto.
* **Como foi implementado:**
  * Componente nativo `modal` do Bootstrap 5 acionado via atributos `data-bs-toggle="modal"` e `data-bs-target="#projectModal"`.

### 4. Botão Flutuante Dinâmico "Voltar ao Topo"
* **Descrição:** Botão que surge de forma suave no canto inferior direito somente após o usuário rolar mais de 300px da página, retornando ao topo com rolagem suave ao ser clicado.
* **Como foi implementado:**
  * Monitoramento do evento de rolagem `window.addEventListener('scroll')` no JavaScript, alternando o estilo de exibição e invocando `window.scrollTo({ top: 0, behavior: 'smooth' })`.

---

## 🚀 Como Executar Localmente
1. Clone o repositório:
   ```bash
   git clone https://github.com/rodrigoassis-06/portfolio-rodrigo.git
   ```
2. Abra a pasta do projeto no VS Code ou no seu editor preferido.
3. Dê dois cliques no arquivo `index.html` ou abra com a extensão *Live Server*.
