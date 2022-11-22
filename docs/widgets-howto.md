# Как использовать [страницу виджетов](http://kiacode.space/widgets)
Здесь объясню, как пользоваться этой утилитой.
Общая документация [здесь](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/widget/basics)

## Оглавление
1. [Подготовка](https://github.com/KiaCode97/site/blob/main/docs/widgets-howto.md#подготовка)
    - [Импорт коллекции в Insomnia](https://github.com/KiaCode97/site/blob/main/docs/widgets-howto.md#импорт-коллекции-в-insomnia)
2. [Получаем токен для инициализации](https://github.com/KiaCode97/site/blob/main/docs/widgets-howto.md#получаем-токен-для-инициализации)
3. [Вставляем токен](https://github.com/KiaCode97/site/blob/main/docs/widgets-howto.md#вставляем-токен)
    - [Настраиваем виджет](https://github.com/KiaCode97/site/blob/main/docs/widgets-howto.md#настраиваем-виджет-при-необходимости) (при необходимости)
4. [Отрисовываем виджет](https://github.com/KiaCode97/site/blob/main/docs/widgets-howto.md#отрисовываем-виджет)
    - [Скачать HTML](https://github.com/KiaCode97/site/blob/main/docs/widgets-howto.md#скачать-html)
____
## Подготовка
Для того, чтобы отправить запрос к API ЮKassa нам потребуется любой REST клиент.
Подойдет, например, [Insomnia](https://insomnia.rest/).
Скачайте [коллекцию запросов](https://github.com/KiaCode97/site/raw/main/docs/Insomnia_Yookassa.zip) и [импортируйте](https://github.com/KiaCode97/site/blob/main/docs/widgets-howto.md#импорт-коллекции-в-insomnia) в клиент.

[:arrow_up:Оглавление](#Оглавление)

### Импорт коллекции в Insomnia
Позже...

[:arrow_up:Оглавление](#Оглавление)
____
## Получаем токен для инициализации
Судя по документации можно понять, что для запроса используется тип подтверждения `embedded`, поэтому берем из списка прод магазин и запрос с припиской `(embedded)`.
![embedded-req](https://github.com/KiaCode97/site/blob/main/docs/embedded-request.png?raw=true "Тип подтверждения embedded")

Далее нажимаем на кнопку `Send` и в ответ от ЮKassa получаем токен, который необходимо вставить в самой утилите.
![send-request](https://github.com/KiaCode97/site/blob/main/docs/send-request.png?raw=true "Отправка запроса")

[:arrow_up:Оглавление](#Оглавление)
____
## Вставляем токен
Полученный на предыдущем этапе токен вставляем в форму
![utility-token](https://github.com/KiaCode97/site/blob/main/docs/utility-token.png?raw=true "Confirmation token")

[:arrow_up:Оглавление](#Оглавление)
____
### Настраиваем виджет (при необходимости)
![settings](https://github.com/KiaCode97/site/blob/main/docs/settings.png?raw=true "Настройки виджета")
- Если хотите, чтобы виджет отрисовался в модальном окне, переведите тумблер с буквой М в зеленое положение.
- Если необходимо настроить цветовую схему виджета, используйте блок с настройками цвета. Все цвета передаются в HEX формате.
    - [Онлайн палитра](https://csscolor.ru/)
- Если необходимо отрисовать виджет с конкретным способом, то нажмите на нужный вам способ из доступных.

[:arrow_up:Оглавление](#Оглавление)
____
## Отрисовываем виджет
Нажимаем на кнопку `Отрисовать` и в правом блоке получаем виджет. Если выбрано модальное окно, то виджет всплывёт поверх страницы
![render](https://github.com/KiaCode97/site/blob/main/docs/render-button.png?raw=true "Отрисовать")

[:arrow_up:Оглавление](#Оглавление)

### Скачать HTML
Если необходимо сохранить готовую страницу с сохранением `Confirmation Token`, нажимаем на соответствующую кнопку. Скачается HTML файл. Выглядит он следующим образом
![saved-html](https://github.com/KiaCode97/site/blob/main/docs/saved-html.png?raw=true "Сохраненный HTML")

[:arrow_up:Оглавление](#Оглавление)
