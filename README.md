# 🧪 HW 49 - Тестування асинхронної логіки React-компонента — UserProfile

Цей проєкт демонструє роботу з асинхронними запитами в React та тестування таких сценаріїв за допомогою **Vitest** та **React Testing Library**.

Компонент **UserProfile** виконує GET-запит до API  
`https://jsonplaceholder.typicode.com/users/1`  
та відображає 3 стани:

- ⏳ індикатор завантаження
- 👤 дані користувача після успішного запиту
- ❌ повідомлення про помилку у випадку невдачі

Тести покривають усі ці сценарії та використовують мокування `fetch`, щоб ізолювати логіку від зовнішнього сервісу.

## 🧪 Запуск тестів

Інтерактивний режим
```npm run test```

Одноразовий прогін (CI)
```npm run test -- --run```

## 📁 Структура проєкту
```
my-react-app/
├── src/
│ ├── components/
│ │ ├── UserProfile.jsx
│ │ └── UserProfile.test.jsx
│ ├── App.jsx
│ ├── setupTests.js
│ ├── main.jsx
│ └── index.css
├── vitest.config.js
├── package.json
└── README.md
```
## 🧩 Технології

- React 19

- Vite

- Vitest

- React Testing Library

- JSDOM

- Мокування fetch() для ізольованих тестів
