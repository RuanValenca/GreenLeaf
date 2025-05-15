# GreenLeaf

Projeto fullstack com React + TypeScript no frontend e Laravel no backend.

## Tecnologias usadas

- React 18 + TypeScript
- Laravel 10 (PHP 8)
- MySQL (ou outro banco de dados)

## Estrutura do projeto

GreenLeaf/
├── frontend/ # Aplicação React + TS
├── backend/ # API Laravel
└── README.md # Documentação do projeto

## Como rodar o projeto localmente

### Frontend

```bash
cd frontend
npm install
PORT=4000 npm start


### Backend
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan serve --port=8081


O frontend estará disponível em [http://localhost:4000](http://localhost:4000).

O backend estará disponível em [http://localhost:8081](http://localhost:8081).
```
