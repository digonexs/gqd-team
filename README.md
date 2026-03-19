# GQD Team — Landing Page

Landing page de mentoria de alta performance para o **Gabriel Quintério Dilella**, especialista em treinamento de força e fundador do GQD Team.

## Visão Geral

Site estático desenvolvido em HTML, CSS e JavaScript puro, sem dependências de framework ou build tool. O objetivo é apresentar os serviços de mentoria online do GQD Team e converter visitantes em alunos via WhatsApp.

## Estrutura do Projeto

```
gqd-team/
├── index.html        # Estrutura e conteúdo da página
├── style.css         # Design system completo (mobile-first)
├── script.js         # Interações e animações
└── assets/
    ├── logo.svg      # Logotipo GQD Team
    ├── perfil-gqd.jpg  # Foto do mentor
    └── ebook-gqd.webp  # Capa do ebook
```

## Seções

| Seção | Descrição |
|---|---|
| **Hero** | Apresentação principal com foto, headline e CTAs |
| **Ticker** | Faixa animada com destaques do perfil |
| **Sobre Mim** | Bio, formação acadêmica e redes sociais |
| **Método GQD** | Os 5 pilares do método de treinamento |
| **Planos** | Prata (1 mês), Ouro (3 meses) e Platina (6 meses) |
| **Ebook** | Produto digital à venda na Hotmart |
| **CTA** | Chamada final para contato via WhatsApp |

## Design

**Apex Luxe** — Verde escuro × Teal × Creme

- **Fontes:** [Syne](https://fonts.google.com/specimen/Syne) (display) + [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (body)
- **Paleta principal:** `#07100f` (fundo) · `#26787b` (verde acento) · `#17494b` (verde escuro) · `#f5f2eb` (creme)
- **Ícones:** [Font Awesome 6](https://fontawesome.com/)
- Seções com alternância dark/cream para ritmo visual
- Textura grain via SVG (`position: fixed`) para sensação premium sem custo de repaint

## Funcionalidades

- Layout 100% responsivo e **mobile-first**
- Animações de entrada via `IntersectionObserver` com stagger delay
- Header com backdrop-blur ao scrollar
- Ticker com marquee CSS performático (`will-change: transform`)
- Menu hambúrguer com fechamento por Escape e click fora
- Navegação suave com link ativo rastreado por scroll
- CTAs de planos com mensagem pré-preenchida no WhatsApp

## Como Rodar

Por ser um projeto estático, basta abrir o `index.html` no navegador ou usar qualquer servidor local:

```bash
# Com Python
python3 -m http.server 3000

# Com Node.js (npx)
npx serve .

# Com VS Code
# Instale a extensão Live Server e clique em "Go Live"
```

## Links

- **Instagram:** [@gqd.team](https://www.instagram.com/gqd.team/)
- **YouTube:** [@gabrieldilella7229](https://www.youtube.com/@gabrieldilella7229)
- **WhatsApp:** [+55 16 99633-2689](https://wa.me/+5516996332689)
- **Ebook (Hotmart):** [A Base da Força](https://pay.hotmart.com/M87193733A)

---

Desenvolvido por [Rodrigo de Barros](https://www.linkedin.com/in/rodrigocavalcantedebarros/)
