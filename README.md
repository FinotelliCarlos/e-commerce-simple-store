# E-commerce de periféricos 💻

## Tecnologias Utilizadas 🚀

- **React**: Uma biblioteca JavaScript popular para construir interfaces de usuário interativas.

- **Next.js 13**: Um framework React que oferece renderização do lado do servidor (SSR), geração estática (SSG), entre muitos outros recursos.

- **Next Auth**: Biblioteca para autenticação de usuários com OAuth.

- **Postgres**: Um sistema de gerenciamento de banco de dados relacional.

- **Prisma**: Um ORM (Object-Relational Mapping) para Node.js e TypeScript.

- **shadcn/ui**: Uma biblioteca de componentes de IU reutilizáveis e estilizáveis.

- **Tailwind CSS**: Um framework CSS que oferece várias classes para utilização já pré-estilizadas.

- **API do Stripe**: Uma API de pagamento popular para processar pagamentos online de forma segura.

## Funcionalidades 📦

- **Login com o Google**: Permitimos que os usuários façam login usando suas contas do Google para uma experiência de autenticação simplificada.

- **Navegação por Categorias**: Os usuários podem explorar produtos por categorias, facilitando a busca e a compra.

- **Descontos em Produtos**: Alguns produtos podem ter descontos especiais, permitindo aos usuários economizar em suas compras.

- **Gerenciamento do Carrinho de Compras**: Os usuários podem adicionar produtos ao seu carrinho de compras, remover produtos e também modificar a quantidade de um produto no carrinho de compras conforme necessário.

- **Pagamento do Pedido com a API do Stripe**: Oferecemos uma experiência segura de pagamento online com a integração da API do Stripe, incluindo o uso de webhooks para processar eventos relacionados ao pagamento. Os usuários podem concluir seus pedidos com facilidade e segurança.

  ⌨ <strong>#Como executar o projeto</strong>



<br>

```bash
# Clonar o repositório
git clone https://github.com/FinotelliCarlos/e-commerce-simple-store

# Entrar no diretório
cd e-commerce-simple-store

# Baixar as dependências
npm install | yarn

# Executar o servidor
npm run dev | yarn dev

# Este passo necessita que você tenha o docker rodando em sua maquina e tenha a imagem postgress instalada
# Também pode ser utilizado algum provedor online como foi feito neste projeto e inserir o link de conecção a .env DATABASE_URL
# Executar seed ao banco de dados
npx prisma db seed

```
