# Project_I

## Технологии:

    - Webpack
    - React
    - React Router v6
    - TypeScript
    - Feature-Slice Design
    - i18n
    - babel
    - ESlint
    - Jest
    - React Testing Library

## Реализовано:

    - Настройка Webpack:
        - webpack.config на TS
        - Подключение лоадеров, плагинов, импортов
        - dev-server
        - CSS-modules
        - Декомпозиция конфига
    - Создание структуры проекта согласно Feature-Slice Design
    - Организация стилей
        - scss
        - module
    - Роутер:
        - Конфиг роутера
    - Cветлая и темная тема:
        - Сохранение в LocalStorage
        - Глобальное состояние CreateContext для доступа компонентов
        - Кастмный хук useThem для упрощения доступа
    - Интернализация
        - i18n
    - Подгрузка компонентов:
        - Code spliting, Lazy load, Suspense
    - Линтер:
        - Настройка ESlint
        - Stylelint
        - Интеграция с Prettier
    - Тестирование:
        - unit:
            - Jest
            - React Testing Library
    - Обработка ошибок:
        - ErrorBoundary
