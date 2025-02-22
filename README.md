# Ловец Событий

Проект "Ловец Событий" — это интерактивная демонстрация работы событий в JavaScript, их всплытия, а также механизма Event Loop. Проект создан для изучения и понимания основных концепций работы с событиями и асинхронным кодом.

## Функциональность

1. **Работа с событиями и всплытием:**

   - При клике на вложенные элементы (кнопка, блоки) отображается информация о событии, включая `this` и `e.target`.
   - Используется `e.stopPropagation()` для остановки всплытия событий.

2. **Демонстрация Event Loop:**

   - При нажатии на кнопку "Запустить асинхронный код" выполняется асинхронный код с использованием `setTimeout` и `Promise`.
   - Порядок выполнения кода демонстрирует приоритет микрозадач (Promise) перед макрозадачами (setTimeout).

3. **Динамическое создание элементов:**
   - Сообщения о выполнении кода динамически добавляются на страницу и автоматически удаляются через 3 секунды.

