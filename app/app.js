// FILE: app.js
// app.js — redesign mobile UX (enterprise polished), logic preserved
// Critical: STEPS structure/data preserved; renderStep remains central; localStorage checklists preserved.

const STEPS = {"P0.01": {"title": "Запрос получен", "matrix_stage": "Назначение ГИПов/ответственных по подсистемам", "assign": "", "inputs": "1. Запрос/проект зафиксирован;\n2. Понятен тип объекта", "outputs": "1. Назначен технический владелец проекта и ответственные по ключевыми подсистемам", "notify": "1. ГИП", "raci": {"Тех Дир": "R/A", "ГИП": "I", "Старший инженер проектировщик": "I", "Менеджер по работе с партнерами": "I", "Старший инженер": "I", "Старший менеджер по закупкам": "I", "Средний срок выполнения (часов)": "188.88"}, "checklist": ["назначен ГИП", "определены ответственные по ключевым подсистемам (если требуется)", "зафиксированы зоны ответственности", "понятен маршрут эскалации", "информация доведена до участников проекта"]}, "P0.02": {"title": "Зафиксировать запрос", "matrix_stage": "Назначение ГИПов/ответственных по подсистемам", "assign": "", "inputs": "1. Поступили вводные от заказчика;\n2. Определен контакт заказчика", "outputs": "1. Запрос зарегистрирован, создана карточка проекта", "notify": "1. ГИП\n2. Менеджер по работе с партнерами", "raci": {"Тех Дир": "A", "ГИП": "R", "Старший инженер проектировщик": "I", "Менеджер по работе с партнерами": "C", "Старший инженер": "I", "Старший менеджер по закупкам": "I", "Средний срок выполнения (часов)": "188.88"}, "checklist": ["запрос внесен в систему (CRM/таблица)", "присвоен ID/номер", "определен контакт заказчика", "зафиксированы сроки/ожидания", "определен формат дальнейшей коммуникации"]}, "P0.03": {"title": "Подготовить вводные", "matrix_stage": "Назначение ГИПов/ответственных по подсистемам", "assign": "", "inputs": "1. Есть исходные данные;\n2. Есть чертежи/планы (если есть)", "outputs": "1. Сформирован пакет вводных для старта пресейла", "notify": "1. ГИП\n2. Старший инженер проектировщик", "raci": {"Тех Дир": "A", "ГИП": "R", "Старший инженер проектировщик": "C", "Менеджер по работе с партнерами": "I", "Старший инженер": "C", "Старший менеджер по закупкам": "I", "Средний срок выполнения (часов)": "188.88"}, "checklist": ["собраны исходные данные", "получены планы/чертежи (если применимо)", "зафиксированы ограничения площадки", "сформированы вопросы к заказчику", "пакет вводных передан команде"]}, "P0.04": {"title": "Встреча с заказчиком", "matrix_stage": "Назначение ГИПов/ответственных по подсистемам", "assign": "", "inputs": "1. Назначена встреча;\n2. Подготовлены вопросы", "outputs": "1. Прояснены требования и ожидания", "notify": "1. ГИП\n2. Менеджер по работе с партнерами", "raci": {"Тех Дир": "I", "ГИП": "R/A", "Старший инженер проектировщик": "C", "Менеджер по работе с партнерами": "R", "Старший инженер": "C", "Старший менеджер по закупкам": "I", "Средний срок выполнения (часов)": "188.88"}, "checklist": ["встреча проведена", "требования уточнены", "зафиксированы критерии успеха", "согласованы сроки и коммуникация", "протокол/итоги разосланы"]}, "P0.05": {"title": "Первичное ТЗ", "matrix_stage": "Назначение ГИПов/ответственных по подсистемам", "assign": "", "inputs": "1. Итоги встречи;\n2. Исходные данные", "outputs": "1. Сформировано первичное ТЗ для расчёта", "notify": "1. ГИП\n2. Старший инженер проектировщик", "raci": {"Тех Дир": "I", "ГИП": "R", "Старший инженер проектировщик": "R/A", "Менеджер по работе с партнерами": "I", "Старший инженер": "C", "Старший менеджер по закупкам": "C", "Средний срок выполнения (часов)": "188.88"}, "checklist": ["ТЗ сформировано", "ТЗ согласовано внутри команды", "зафиксированы допущения", "определены риски/ограничения", "ТЗ готово для расчёта"]}, "P1.01": {"title": "Пресейл старт", "matrix_stage": "Назначение ГИПов/ответственных по подсистемам", "assign": "", "inputs": "1. Есть запрос;\n2. Есть первичное ТЗ", "outputs": "1. Запущен пресейл, назначены ответственные", "notify": "1. ГИП\n2. Менеджер по работе с партнерами", "raci": {"Тех Дир": "I", "ГИП": "R/A", "Старший инженер проектировщик": "C", "Менеджер по работе с партнерами": "R", "Старший инженер": "C", "Старший менеджер по закупкам": "I", "Средний срок выполнения (часов)": "79.2"}, "checklist": ["определены цели пресейла", "назначены ответственные", "определен дедлайн КП", "согласован формат КП", "зафиксированы допущения"]}, "P1.02": {"title": "Оценка реализуемости", "matrix_stage": "Назначение ГИПов/ответственных по подсистемам", "assign": "", "inputs": "1. Первичное ТЗ;\n2. Ограничения объекта", "outputs": "1. Принято решение о реализуемости/вариантах", "notify": "1. ГИП\n2. Старший инженер проектировщик\n3. Тех Дир", "raci": {"Тех Дир": "A", "ГИП": "R", "Старший инженер проектировщик": "R", "Менеджер по работе с партнерами": "I", "Старший инженер": "C", "Старший менеджер по закупкам": "C", "Средний срок выполнения (часов)": "79.2"}, "checklist": ["проведен быстрый анализ требований", "зафиксированы варианты решений", "оценены риски", "зафиксированы допущения", "принято решение о продолжении"]}, "P1.03": {"title": "Состав КП", "matrix_stage": "Формирование КП", "assign": "", "inputs": "1. Принято решение о реализуемости;\n2. Есть вводные данные", "outputs": "1. Сформировано КП", "notify": "1. Заказчик\n2. ГИП\n3. Менеджер по работе с партнерами", "raci": {"Тех Дир": "I", "ГИП": "R", "Старший инженер проектировщик": "C", "Менеджер по работе с партнерами": "A", "Старший инженер": "C", "Старший менеджер по закупкам": "R", "Средний срок выполнения (часов)": "79.2"}, "checklist": ["КП оформлено", "включены объемы/сроки", "учтены допущения", "проверены цены/маржа", "готово к отправке"]}, "P1.04": {"title": "Согласование КП", "matrix_stage": "Формирование КП", "assign": "", "inputs": "1. КП сформировано", "outputs": "1. КП отправлено заказчику, получена обратная связь", "notify": "1. Заказчик\n2. ГИП\n3. Менеджер по работе с партнерами", "raci": {"Тех Дир": "I", "ГИП": "C", "Старший инженер проектировщик": "I", "Менеджер по работе с партнерами": "R/A", "Старший инженер": "I", "Старший менеджер по закупкам": "C", "Средний срок выполнения (часов)": "79.2"}, "checklist": ["КП отправлено", "получена обратная связь", "зафиксированы правки", "согласована финальная версия", "согласованы условия"]}, "P2.01": {"title": "Старт ПРД", "matrix_stage": "Разработка ПРД", "assign": "", "inputs": "1. Договор/КП согласованы", "outputs": "1. Запущена разработка ПРД", "notify": "1. ГИП\n2. Старший инженер проектировщик", "raci": {"Тех Дир": "I", "ГИП": "R/A", "Старший инженер проектировщик": "R", "Менеджер по работе с партнерами": "I", "Старший инженер": "C", "Старший менеджер по закупкам": "I", "Средний срок выполнения (часов)": "244.8"}, "checklist": ["назначен ответственный за ПРД", "согласован формат документа", "собраны исходные данные", "определены контрольные точки", "открыт трек задач"]}, "P2.02": {"title": "Сбор исходных данных", "matrix_stage": "Разработка ПРД", "assign": "", "inputs": "1. Требования;\n2. Доступы/контакты", "outputs": "1. Полный набор данных для ПРД", "notify": "1. ГИП\n2. Старший инженер проектировщик", "raci": {"Тех Дир": "I", "ГИП": "R", "Старший инженер проектировщик": "R/A", "Менеджер по работе с партнерами": "C", "Старший инженер": "C", "Старший менеджер по закупкам": "I", "Средний срок выполнения (часов)": "244.8"}, "checklist": ["собраны планы/чертежи", "получены схемы/данные площадки", "зафиксированы требования ИБ/ИТ", "согласованы окна работ", "данные актуализированы"]}, "P2.03": {"title": "Разработка ПРД", "matrix_stage": "Разработка ПРД", "assign": "", "inputs": "1. Исходные данные", "outputs": "1. Черновик ПРД", "notify": "1. ГИП\n2. Заказчик", "raci": {"Тех Дир": "I", "ГИП": "C", "Старший инженер проектировщик": "R/A", "Менеджер по работе с партнерами": "I", "Старший инженер": "R", "Старший менеджер по закупкам": "C", "Средний срок выполнения (часов)": "244.8"}, "checklist": ["описана архитектура", "подготовлены спецификации", "описаны интерфейсы/интеграции", "описаны требования к монтажу", "подготовлен черновик"]}, "P2.04": {"title": "Согласование ПРД", "matrix_stage": "Разработка ПРД", "assign": "", "inputs": "1. Черновик ПРД", "outputs": "1. Утвержденный ПРД", "notify": "1. Заказчик\n2. ГИП", "raci": {"Тех Дир": "I", "ГИП": "R", "Старший инженер проектировщик": "A", "Менеджер по работе с партнерами": "C", "Старший инженер": "C", "Старший менеджер по закупкам": "I", "Средний срок выполнения (часов)": "244.8"}, "checklist": ["ПРД отправлен", "получены замечания", "внесены правки", "ПРД утвержден", "зафиксирована версия"]}, "P3.01": {"title": "Подготовить спецификацию", "matrix_stage": "Подготовка Спецификации и РКД", "assign": "", "inputs": "1. Утвержденный ПРД", "outputs": "1. Спецификация оборудования/материалов", "notify": "1. ГИП\n2. Закупки", "raci": {"Тех Дир": "I", "ГИП": "R", "Старший инженер проектировщик": "A", "Менеджер по работе с партнерами": "I", "Старший инженер": "C", "Старший менеджер по закупкам": "R", "Средний срок выполнения (часов)": "288.0"}, "checklist": ["сформирована спецификация", "проверены количества", "учтены аналоги", "учтены сроки поставки", "утверждено внутри"]}, "P3.02": {"title": "Запрос цен", "matrix_stage": "Подготовка Спецификации и РКД", "assign": "", "inputs": "1. Спецификация", "outputs": "1. Получены коммерческие предложения от поставщиков", "notify": "1. Закупки\n2. ГИП", "raci": {"Тех Дир": "I", "ГИП": "C", "Старший инженер проектировщик": "I", "Менеджер по работе с партнерами": "I", "Старший инженер": "C", "Старший менеджер по закупкам": "R/A", "Средний срок выполнения (часов)": "288.0"}, "checklist": ["отправлены запросы", "получены ответы", "собран сравнительный анализ", "выбран поставщик", "согласованы условия"]}, "P3.03": {"title": "Заключение договоров", "matrix_stage": "Подготовка Спецификации и РКД", "assign": "", "inputs": "1. Выбран поставщик;\n2. Условия согласованы", "outputs": "1. Заключены договоры, размещены заказы", "notify": "1. Закупки\n2. Финансы\n3. ГИП", "raci": {"Тех Дир": "I", "ГИП": "C", "Старший инженер проектировщик": "I", "Менеджер по работе с партнерами": "C", "Старший инженер": "I", "Старший менеджер по закупкам": "R/A", "Средний срок выполнения (часов)": "288.0"}, "checklist": ["договор согласован", "подписан", "размещен заказ", "получено подтверждение", "зафиксированы сроки"]}, "P3.04": {"title": "Поставка", "matrix_stage": "Подготовка Спецификации и РКД", "assign": "", "inputs": "1. Заказы размещены", "outputs": "1. Оборудование/материалы поставлены на объект/склад", "notify": "1. ГИП\n2. Монтаж", "raci": {"Тех Дир": "I", "ГИП": "R", "Старший инженер проектировщик": "I", "Менеджер по работе с партнерами": "I", "Старший инженер": "C", "Старший менеджер по закупкам": "A", "Средний срок выполнения (часов)": "288.0"}, "checklist": ["согласована логистика", "поставка получена", "проверена комплектность", "зафиксированы серийники", "передано монтажу"]}, "P4.01": {"title": "Подготовка площадки", "matrix_stage": "Инженерные изыскания", "assign": "", "inputs": "1. ПРД утвержден;\n2. План работ", "outputs": "1. Площадка готова к монтажу", "notify": "1. ГИП\n2. Монтаж", "raci": {"Тех Дир": "I", "ГИП": "R", "Старший инженер проектировщик": "C", "Менеджер по работе с партнерами": "I", "Старший инженер": "A", "Старший менеджер по закупкам": "I", "Средний срок выполнения (часов)": "256.0"}, "checklist": ["проверены условия на площадке", "подготовлены трассы/места", "согласованы допуски", "зафиксированы ограничения", "площадка готова"]}, "P4.02": {"title": "Монтаж", "matrix_stage": "Строительно-монтажные работы", "assign": "", "inputs": "1. Площадка готова;\n2. Поставка на объекте", "outputs": "1. Оборудование установлено", "notify": "1. ГИП\n2. Старший инженер", "raci": {"Тех Дир": "I", "ГИП": "C", "Старший инженер проектировщик": "I", "Менеджер по работе с партнерами": "I", "Старший инженер": "R/A", "Старший менеджер по закупкам": "I", "Средний срок выполнения (часов)": "256.0"}, "checklist": ["монтаж выполнен", "кабельные линии проложены", "маркировка выполнена", "фотофиксация сделана", "подготовлено к проверке"]}, "P4.03": {"title": "Подключения", "matrix_stage": "Строительно-монтажные работы", "assign": "", "inputs": "1. Монтаж выполнен", "outputs": "1. Подключены интерфейсы/питание/сеть", "notify": "1. ГИП\n2. Старший инженер", "raci": {"Тех Дир": "I", "ГИП": "C", "Старший инженер проектировщик": "I", "Менеджер по работе с партнерами": "I", "Старший инженер": "R/A", "Старший менеджер по закупкам": "I", "Средний срок выполнения (часов)": "256.0"}, "checklist": ["подключено питание", "подключена сеть", "подключены интерфейсы", "проверены соединения", "устранены замечания"]}, "P4.04": {"title": "Проверка монтажа", "matrix_stage": "Строительно-монтажные работы", "assign": "", "inputs": "1. Подключения выполнены", "outputs": "1. Монтаж принят, замечания устранены", "notify": "1. ГИП\n2. Старший инженер", "raci": {"Тех Дир": "I", "ГИП": "R", "Старший инженер проектировщик": "C", "Менеджер по работе с партнерами": "I", "Старший инженер": "A", "Старший менеджер по закупкам": "I", "Средний срок выполнения (часов)": "256.0"}, "checklist": ["проведена проверка", "замечания зафиксированы", "замечания устранены", "акт готовности подписан", "переход к ПНР"]}, "P4.05": {"title": "Готовность к ПНР", "matrix_stage": "Пуско-наладочные работы", "assign": "", "inputs": "1. Монтаж принят", "outputs": "1. Разрешение на старт ПНР", "notify": "1. ГИП\n2. Инженеры ПНР", "raci": {"Тех Дир": "I", "ГИП": "R/A", "Старший инженер проектировщик": "C", "Менеджер по работе с партнерами": "I", "Старший инженер": "R", "Старший менеджер по закупкам": "I", "Средний срок выполнения (часов)": "96.0"}, "checklist": ["подготовлен план ПНР", "проверены доступы", "готовы конфигурации", "согласовано окно работ", "дан старт ПНР"]}, "P5.01": {"title": "Старт ПНР", "matrix_stage": "Пуско-наладочные работы", "assign": "", "inputs": "1. Готовность к ПНР", "outputs": "1. ПНР начаты", "notify": "1. ГИП\n2. Заказчик", "raci": {"Тех Дир": "I", "ГИП": "A", "Старший инженер проектировщик": "C", "Менеджер по работе с партнерами": "I", "Старший инженер": "R", "Старший менеджер по закупкам": "I", "Средний срок выполнения (часов)": "192.0"}, "checklist": ["подняты сервисы/ПО", "проверены версии", "настроены параметры", "выполнен smoke-test", "согласован план тестов"]}, "P5.02": {"title": "Изменения", "matrix_stage": "Работа с изменениями", "assign": "", "inputs": "1. Результаты ПНР;\n2. Замечания", "outputs": "1. Изменения внедрены и согласованы", "notify": "1. ГИП\n2. Заказчик", "raci": {"Тех Дир": "I", "ГИП": "R", "Старший инженер проектировщик": "A", "Менеджер по работе с партнерами": "C", "Старший инженер": "R", "Старший менеджер по закупкам": "C", "Средний срок выполнения (часов)": "192.0"}, "checklist": ["замечания зафиксированы", "оценен impact", "внесены изменения", "проведена проверка", "изменения согласованы"]}, "P5.03": {"title": "Завершение ПНР", "matrix_stage": "Пуско-наладочные работы", "assign": "", "inputs": "1. ПНР выполнены;\n2. Изменения внедрены", "outputs": "1. ПНР завершены, система готова к испытаниям", "notify": "1. ГИП\n2. Заказчик", "raci": {"Тех Дир": "I", "ГИП": "A", "Старший инженер проектировщик": "C", "Менеджер по работе с партнерами": "I", "Старший инженер": "R", "Старший менеджер по закупкам": "I", "Средний срок выполнения (часов)": "192.0"}, "checklist": ["пройден чек-лист ПНР", "собраны логи/результаты", "система стабильна", "готовность подтверждена", "назначены испытания"]}, "P6.01": {"title": "Испытания", "matrix_stage": "Тестирование и приемка", "assign": "", "inputs": "1. Система готова", "outputs": "1. Испытания проведены", "notify": "1. Заказчик\n2. ГИП", "raci": {"Тех Дир": "I", "ГИП": "A", "Старший инженер проектировщик": "C", "Менеджер по работе с партнерами": "I", "Старший инженер": "R", "Старший менеджер по закупкам": "I", "Средний срок выполнения (часов)": "112.0"}, "checklist": ["подготовлен протокол испытаний", "испытания проведены", "замечания зафиксированы", "замечания устранены", "подписан протокол"]}, "P6.02": {"title": "Приёмка", "matrix_stage": "Тестирование и приемка", "assign": "", "inputs": "1. Протокол испытаний;\n2. Устранение замечаний", "outputs": "1. Система принята заказчиком", "notify": "1. Заказчик\n2. ГИП", "raci": {"Тех Дир": "I", "ГИП": "A", "Старший инженер проектировщик": "C", "Менеджер по работе с партнерами": "R", "Старший инженер": "R", "Старший менеджер по закупкам": "I", "Средний срок выполнения (часов)": "112.0"}, "checklist": ["акт приемки подготовлен", "акт подписан", "зафиксированы условия гарантии", "переданы инструкции", "согласовано закрытие"]}, "P6.03": {"title": "Закрытие", "matrix_stage": "Завершение", "assign": "", "inputs": "1. Приёмка завершена", "outputs": "1. Проект закрыт внутри", "notify": "1. ГИП\n2. Тех Дир", "raci": {"Тех Дир": "A", "ГИП": "R", "Старший инженер проектировщик": "I", "Менеджер по работе с партнерами": "C", "Старший инженер": "I", "Старший менеджер по закупкам": "I", "Средний срок выполнения (часов)": "64.0"}, "checklist": ["финальный отчет сформирован", "долги/задачи закрыты", "архив собран", "пост-мортем проведен", "проект закрыт"]}, "P7.01": {"title": "Исполнительная", "matrix_stage": "Исполнительная документация", "assign": "", "inputs": "1. Монтаж/ПНР завершены", "outputs": "1. Исполнительная документация собрана", "notify": "1. ГИП\n2. Заказчик", "raci": {"Тех Дир": "I", "ГИП": "R", "Старший инженер проектировщик": "A", "Менеджер по работе с партнерами": "C", "Старший инженер": "C", "Старший менеджер по закупкам": "I", "Средний срок выполнения (часов)": "80.0"}, "checklist": ["собраны схемы as-built", "собраны паспорта/сертификаты", "собраны фото", "подготовлены инструкции", "пакет готов"]}, "P7.02": {"title": "Сдача документов", "matrix_stage": "Исполнительная документация", "assign": "", "inputs": "1. Пакет исполнительной готов", "outputs": "1. Документы переданы заказчику", "notify": "1. Заказчик\n2. ГИП", "raci": {"Тех Дир": "I", "ГИП": "A", "Старший инженер проектировщик": "R", "Менеджер по работе с партнерами": "R", "Старший инженер": "C", "Старший менеджер по закупкам": "I", "Средний срок выполнения (часов)": "80.0"}, "checklist": ["пакет передан", "получено подтверждение", "зафиксированы замечания", "замечания устранены", "финальная версия принята"]}, "P7.03": {"title": "Акты/закрытие", "matrix_stage": "Исполнительная документация", "assign": "", "inputs": "1. Документы сданы", "outputs": "1. Акты закрытия подготовлены", "notify": "1. Заказчик\n2. Финансы\n3. ГИП", "raci": {"Тех Дир": "I", "ГИП": "C", "Старший инженер проектировщик": "I", "Менеджер по работе с партнерами": "R/A", "Старший инженер": "I", "Старший менеджер по закупкам": "I", "Средний срок выполнения (часов)": "80.0"}, "checklist": ["акты подготовлены", "акты подписаны", "закрыт документооборот", "передано в финансы", "проект закрыт у заказчика"]}, "P7.04": {"title": "Передача проекта", "matrix_stage": "Завершение", "assign": "", "inputs": "1. Акты подписаны", "outputs": "1. Проект передан в эксплуатацию", "notify": "1. Заказчик\n2. Эксплуатация\n3. ГИП", "raci": {"Тех Дир": "I", "ГИП": "A", "Старший инженер проектировщик": "C", "Менеджер по работе с партнерами": "R", "Старший инженер": "R", "Старший менеджер по закупкам": "I", "Средний срок выполнения (часов)": "80.0"}, "checklist": ["проведен инструктаж", "переданы доступы", "переданы регламенты", "контакты поддержки переданы", "передача подтверждена"]}, "P7.05": {"title": "Финализация", "matrix_stage": "Завершение", "assign": "", "inputs": "1. Проект передан", "outputs": "1. Финальные действия завершены", "notify": "1. ГИП\n2. Руководство", "raci": {"Тех Дир": "A", "ГИП": "R", "Старший инженер проектировщик": "I", "Менеджер по работе с партнерами": "C", "Старший инженер": "I", "Старший менеджер по закупкам": "I", "Средний срок выполнения (часов)": "80.0"}, "checklist": ["собран финальный архив", "закрыты финансовые вопросы", "проведен итоговый созвон", "зафиксированы уроки", "команда освобождена"]}, "P7.06": {"title": "Передача и закрытие проекта", "matrix_stage": "Завершение", "assign": "", "inputs": "1. Финализация завершена", "outputs": "1. Проект закрыт", "notify": "1. Все участники", "raci": {"Тех Дир": "A", "ГИП": "R", "Старший инженер проектировщик": "I", "Менеджер по работе с партнерами": "I", "Старший инженер": "I", "Старший менеджер по закупкам": "I", "Средний срок выполнения (часов)": "80.0"}, "checklist": ["проект закрыт в системе", "архив размещен на объекте", "пакет передан ответственным"]}};

const RACILABEL = { R:"Исполнитель", A:"Ответственный", C:"Консультирует", I:"Информируется" };
function escapeHtml(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));}
function linesToUl(text){
  const t=String(text??"").trim();
  if(!t) return '<div class="muted">—</div>';
  const items=t.split(/\n+/).map(x=>x.trim()).filter(Boolean);
  return '<ul style="margin:6px 0 0 18px;">'+items.map(i=>'<li>'+escapeHtml(i)+'</li>').join('')+'</ul>';
}
function raciToWords(val){
  const v=String(val??"").trim();
  if(!v) return "—";
  return v.split("/").map(x=>x.trim()).filter(Boolean).map(k=>RACILABEL[k]||k).join(" / ");
}
function checklistKey(id){return "checks:"+id;}
function loadChecks(id){try{return JSON.parse(localStorage.getItem(checklistKey(id))||"[]");}catch{return[];}}
function saveChecks(id,arr){try{localStorage.setItem(checklistKey(id),JSON.stringify(arr));}catch{}}

function renderStep(id){
  const panel=document.getElementById("panel");
  const s=STEPS[id]||{};
  const raciEntries=s.raci?Object.entries(s.raci):[];
  const rolePairs=raciEntries.filter(([k,_])=>!/Средний срок/.test(k));
  const duration=raciEntries.find(([k,_])=>/Средний срок/.test(k))?.[1]||"";
  const checks=loadChecks(id);
  const checklist=Array.isArray(s.checklist)?s.checklist:[];
  panel.innerHTML=`
    <div class="panelCard">
      <h2 class="hTitle">${escapeHtml(id)} — ${escapeHtml(s.title||"")}</h2>
      <div class="hSub">
        <span class="badge"><b>Этап</b> <span>${escapeHtml(s.matrix_stage||"—")}</span></span>
        ${duration?`<span class="badge"><b>Срок</b> <span>${escapeHtml(duration)} ч.</span></span>`:""}
      </div>

      <details class="section" open>
        <summary>Назначение / описание</summary>
        <div class="content">
          ${linesToUl(s.assign)}
        </div>
      </details>

      <details class="section" open>
        <summary>Входы</summary>
        <div class="content">
          ${linesToUl(s.inputs)}
        </div>
      </details>

      <details class="section" open>
        <summary>Выходы</summary>
        <div class="content">
          ${linesToUl(s.outputs)}
        </div>
      </details>

      <details class="section">
        <summary>Кого оповестить</summary>
        <div class="content">
          ${linesToUl(s.notify)}
        </div>
      </details>

      <details class="section">
        <summary>RACI</summary>
        <div class="content">
          <div class="pillRow">
            ${rolePairs.map(([role,code])=>`
              <span class="pill"><span class="k">${escapeHtml(role)}</span><span class="v">${escapeHtml(raciToWords(code))}</span></span>
            `).join("")}
          </div>
        </div>
      </details>

      <details class="section" open>
        <summary>Чек‑лист</summary>
        <div class="content">
          ${checklist.length?checklist.map((t,i)=>`
            <label class="checkItem">
              <input type="checkbox" data-ck="${i}" ${checks.includes(i)?"checked":""}/>
              <span>${escapeHtml(t)}</span>
            </label>
          `).join(""):`<div class="muted">—</div>`}

          ${checklist.length?`<div style="margin-top:10px;"><button class="btnSmall" id="resetChecks">Сбросить чек‑лист</button></div>`:""}
        </div>
      </details>
    </div>
  `;

  const resetBtn=document.getElementById("resetChecks");
  if(resetBtn){
    resetBtn.addEventListener("click",()=>{
      saveChecks(id,[]);renderStep(id);updateProgressUI();
      const pref=id.split(".")[0];highlightGroup(pref);syncNavActive(pref);
    });
  }

  panel.querySelectorAll('input[type="checkbox"][data-ck]').forEach(cb=>{
    cb.addEventListener("change",()=>{
      const idx=parseInt(cb.getAttribute("data-ck"),10);
      const now=new Set(loadChecks(id));
      cb.checked?now.add(idx):now.delete(idx);
      saveChecks(id,[...now].sort((a,b)=>a-b));updateProgressUI();
    });
  });
}

// -------------------- State & utilities --------------------

const GROUP_FALLBACK = ["P0","P1","P2","P3","P4","P5","P6","P7"];

let isMobile = false;
let zoom = 1;

let activeGroup = null;
let lastSelectedStepId = null;

const VISITED_KEY = "visitedSteps:v1";
const LAST_GROUP_KEY = "lastGroup:v1";

function cssEscape(val){
  if (window.CSS && typeof window.CSS.escape === "function") return window.CSS.escape(val);
  return String(val ?? "").replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
}

function loadVisitedSet(){
  try{
    const arr = JSON.parse(localStorage.getItem(VISITED_KEY) || "[]");
    if (Array.isArray(arr)) return new Set(arr.map(String));
  }catch{}
  return new Set();
}

function saveVisitedSet(set){
  try{
    localStorage.setItem(VISITED_KEY, JSON.stringify(Array.from(set)));
  }catch{}
}

let visited = loadVisitedSet();

function markVisited(id){
  if (!id) return;
  visited.add(String(id));
  saveVisitedSet(visited);
}

function getGroupMetaFromNav(){
  const items = Array.from(document.querySelectorAll(".navItem[data-group]"));
  const meta = items.map(el => {
    const prefix = (el.getAttribute("data-group") || "").trim();
    const label = (el.textContent || prefix).trim();
    return { prefix, label };
  }).filter(x => x.prefix);

  if (meta.length) return meta;

  // fallback if nav is missing
  return GROUP_FALLBACK.map(p => ({ prefix: p, label: p }));
}

function getGroupOrder(){
  const meta = getGroupMetaFromNav();
  const order = meta.map(m => m.prefix);
  return order.length ? order : GROUP_FALLBACK.slice();
}

function getGroupLabel(prefix){
  const meta = getGroupMetaFromNav().find(m => m.prefix === prefix);
  return meta ? meta.label : prefix;
}

function stepOrder(id){
  const parts = String(id || "").split(".");
  const raw = parts[1] || "";
  const n = parseInt(raw, 10);
  return Number.isFinite(n) ? n : 999;
}

function getStepsByGroup(prefix){
  const ids = Object.keys(STEPS).filter(id => id.startsWith(prefix + "."));
  ids.sort((a,b) => stepOrder(a) - stepOrder(b));
  return ids;
}

function getStepStats(id){
  const s = STEPS[id] || {};
  const total = Array.isArray(s.checklist) ? s.checklist.length : 0;
  const checked = total ? Math.min(loadChecks(id).length, total) : 0;

  const isVisited = visited.has(String(id));

  // Completion heuristic (UI only):
  // - if checklist exists → done when all checked
  // - if no checklist → done when visited at least once
  const done = total ? (checked >= total) : isVisited;

  return { total, checked, done, isVisited };
}

function getGroupStats(prefix){
  const ids = getStepsByGroup(prefix);
  const stepCount = ids.length;

  let doneSteps = 0;
  let visitedSteps = 0;

  ids.forEach(id => {
    const st = getStepStats(id);
    if (st.isVisited) visitedSteps++;
    if (st.done) doneSteps++;
  });

  const ratio = stepCount ? (doneSteps / stepCount) : 0;
  return { stepCount, doneSteps, visitedSteps, ratio };
}

function fmtCount(done, total){
  return `${done}/${total}`;
}

// -------------------- Shared SVG interactions (logic preserved) --------------------

function selectStepGroup(g){
  document.querySelectorAll("g.step.selected").forEach(x=>x.classList.remove("selected"));
  g.classList.add("selected");
}

function highlightGroup(prefix){
  const steps = Array.from(document.querySelectorAll('g.step[data-id]'));
  const inGroup = steps.filter(g => (g.getAttribute("data-id")||"").startsWith(prefix));
  if (!steps.length) return; // no SVG mounted
  if (!inGroup.length) {
    // if prefix not found, clear dimming
    steps.forEach(g => g.classList.remove("dim","group"));
    return;
  }

  steps.forEach(g => { g.classList.remove("dim","group"); });
  steps.forEach(g => g.classList.add("dim"));
  inGroup.forEach(g => { g.classList.remove("dim"); g.classList.add("group"); });
}

function clearGroupHighlight(){
  document.querySelectorAll('g.step[data-id]').forEach(g => g.classList.remove("dim","group"));
}

// -------------------- Desktop diagram controls --------------------

function mountDesktopSvg(){
  const wrap = document.getElementById("svgWrap");
  const tpl = document.getElementById("desktopSvgTemplate");
  if (!wrap || !tpl) return;
  wrap.innerHTML = "";
  wrap.appendChild(tpl.content.cloneNode(true));
}

function setZoom(p){
  p = Math.max(60, Math.min(220, parseInt(p, 10) || 70));
  zoom = p / 100;

  const zr = document.getElementById("zoomRange");
  const zl = document.getElementById("zoomLabel");
  if (zr) zr.value = String(p);
  if (zl) zl.textContent = p + "%";

  const wrap = document.getElementById("svgWrap");
  const svg = wrap ? wrap.querySelector("svg") : null;
  if (!svg) return;

  const vb = svg.viewBox && svg.viewBox.baseVal ? svg.viewBox.baseVal : null;
  if (!vb) return;

  svg.style.width = Math.round(vb.width * zoom) + "px";
  svg.style.height = Math.round(vb.height * zoom) + "px";
}

function initPan(){
  const viewport = document.getElementById("viewport");
  if (!viewport) return;

  let dragging=false,sx=0,sy=0,sl=0,st=0;

  viewport.addEventListener("mousedown",(e)=>{
    if (e.target.closest && e.target.closest("g.step")) return;
    dragging=true; viewport.classList.add("dragging");
    sx=e.clientX; sy=e.clientY; sl=viewport.scrollLeft; st=viewport.scrollTop;
  });

  window.addEventListener("mousemove",(e)=>{
    if(!dragging) return;
    viewport.scrollLeft = sl - (e.clientX - sx);
    viewport.scrollTop  = st - (e.clientY - sy);
  });

  window.addEventListener("mouseup",()=>{
    dragging=false; viewport.classList.remove("dragging");
  });
}

function centerOnPrefix(prefix){
  const viewport = document.getElementById("viewport");
  if (!viewport) return;

  const nodes = Array.from(document.querySelectorAll('g.step[data-id]'))
    .filter(g => (g.getAttribute("data-id")||"").startsWith(prefix));

  if (!nodes.length) return;

  let minY=Infinity, minX=Infinity;
  nodes.forEach(g=>{
    try{
      const b=g.getBBox();
      if (b.y < minY) minY = b.y;
      if (b.x < minX) minX = b.x;
    }catch{}
  });

  const padX = 40, padY = 60;
  const targetLeft = Math.max(0, minX*zoom - padX);
  const targetTop  = Math.max(0, minY*zoom - padY);

  viewport.scrollTo({ left: targetLeft, top: targetTop, behavior: "auto" });
  requestAnimationFrame(()=>viewport.scrollTo({ left: targetLeft, top: targetTop, behavior: "auto" }));
  setTimeout(()=>viewport.scrollTo({ left: targetLeft, top: targetTop, behavior: "auto" }), 60);
}

// -------------------- Mobile UI: group chips + step list --------------------

function syncNavActive(prefix){
  // Desktop nav
  document.querySelectorAll(".navItem.active").forEach(x=>x.classList.remove("active"));
  const navEl = document.querySelector('.navItem[data-group="'+prefix+'"]');
  if (navEl) navEl.classList.add("active");

  // Mobile chips
  document.querySelectorAll(".chip.isActive").forEach(x=>x.classList.remove("isActive"));
  const chipEl = document.querySelector('.chip[data-group="'+prefix+'"]');
  if (chipEl) chipEl.classList.add("isActive");
}

function updateGroupHeader(){
  const titleEl = document.getElementById("groupTitle");
  const metaEl = document.getElementById("groupMeta");
  if (!titleEl || !metaEl) return;

  const label = getGroupLabel(activeGroup || "");
  const gs = activeGroup ? getGroupStats(activeGroup) : { stepCount:0, doneSteps:0, visitedSteps:0, ratio:0 };

  titleEl.textContent = label || "—";
  if (gs.stepCount){
    metaEl.textContent = `${gs.stepCount} шагов • завершено ${gs.doneSteps} • просмотрено ${gs.visitedSteps}`;
  } else {
    metaEl.textContent = "—";
  }
}

function renderGroupChips(){
  const host = document.getElementById("groupChips");
  if (!host) return;
  host.innerHTML = "";

  const meta = getGroupMetaFromNav();
  meta.forEach(m => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip";
    btn.setAttribute("data-group", m.prefix);

    const top = document.createElement("div");
    top.className = "chipTop";

    const code = document.createElement("div");
    code.className = "chipCode";
    code.textContent = m.prefix;

    const count = document.createElement("div");
    count.className = "chipCount";
    count.textContent = "—";

    top.appendChild(code);
    top.appendChild(count);

    const bar = document.createElement("div");
    bar.className = "chipBar";
    const fill = document.createElement("div");
    fill.className = "chipBarFill";
    bar.appendChild(fill);

    btn.appendChild(top);
    btn.appendChild(bar);

    btn.addEventListener("click", ()=>selectGroup(m.prefix, { from: "chip" }));

    host.appendChild(btn);
  });
}

function setSelectedStepCard(id){
  document.querySelectorAll('.stepCard.isSelected').forEach(x=>x.classList.remove("isSelected"));
  const el = document.querySelector('.stepCard[data-id="'+cssEscape(id)+'"]');
  if (el) el.classList.add("isSelected");
}

function renderStepList(){
  const host = document.getElementById("stepList");
  if (!host) return;

  const ids = activeGroup ? getStepsByGroup(activeGroup) : [];
  host.innerHTML = "";

  ids.forEach(id => {
    const s = STEPS[id] || {};
    const st = getStepStats(id);

    const card = document.createElement("button");
    card.type = "button";
    card.className = "stepCard";
    card.setAttribute("data-id", id);

    const main = document.createElement("div");
    main.className = "stepMain";

    const sid = document.createElement("div");
    sid.className = "stepId";
    sid.textContent = id;

    const title = document.createElement("div");
    title.className = "stepTitle";
    title.textContent = s.title || "—";

    main.appendChild(sid);
    main.appendChild(title);

    const meta = document.createElement("div");
    meta.className = "stepMeta";

    const dot = document.createElement("div");
    dot.className = "dot";
    meta.appendChild(dot);

    const pill = document.createElement("div");
    pill.className = "pill";
    if (st.total){
      pill.textContent = `${st.checked}/${st.total}`;
    } else {
      pill.textContent = st.isVisited ? "Просмотрено" : "Новое";
    }
    meta.appendChild(pill);

    card.appendChild(main);
    card.appendChild(meta);

    if (st.isVisited) card.classList.add("isVisited");
    if (st.done) card.classList.add("isDone");
    if (id === lastSelectedStepId) card.classList.add("isSelected");

    card.addEventListener("click", ()=>selectStepById(id, { from: "list" }));
    host.appendChild(card);
  });
}

function updateProgressUI(){
  // Update chips counts + bars
  document.querySelectorAll(".chip[data-group]").forEach(chip => {
    const p = chip.getAttribute("data-group");
    const gs = getGroupStats(p);

    const countEl = chip.querySelector(".chipCount");
    const fillEl = chip.querySelector(".chipBarFill");

    if (countEl) countEl.textContent = gs.stepCount ? fmtCount(gs.doneSteps, gs.stepCount) : "—";
    if (fillEl) fillEl.style.width = (gs.ratio * 100).toFixed(0) + "%";
  });

  updateGroupHeader();

  // Update step cards (if visible)
  document.querySelectorAll(".stepCard[data-id]").forEach(card => {
    const id = card.getAttribute("data-id");
    const st = getStepStats(id);
    const pill = card.querySelector(".pill");
    if (pill){
      if (st.total) pill.textContent = `${st.checked}/${st.total}`;
      else pill.textContent = st.isVisited ? "Просмотрено" : "Новое";
    }
    card.classList.toggle("isVisited", st.isVisited);
    card.classList.toggle("isDone", st.done);
  });
}

function selectGroup(prefix, opts={}){
  if (!prefix) return;
  activeGroup = prefix;
  try{ localStorage.setItem(LAST_GROUP_KEY, prefix); }catch{}

  syncNavActive(prefix);
  highlightGroup(prefix);

  if (!isMobile){
    centerOnPrefix(prefix);
  } else {
    // When switching groups on mobile, keep focus on list
    const flow = document.querySelector(".mobileFlow");
    if (flow) flow.scrollTo({ top: 0, behavior: "smooth" });
  }

  renderStepList();
  updateProgressUI();
}

function updateSheetHeader(id){
  const s = STEPS[id] || {};

  const idEl = document.getElementById("sheetStepId");
  const tEl = document.getElementById("sheetStepTitle");
  const stEl = document.getElementById("sheetStepStage");

  if (idEl) idEl.textContent = id || "Шаг";
  if (tEl) tEl.textContent = s.title || "—";
  if (stEl) stEl.textContent = s.matrix_stage ? `Этап: ${s.matrix_stage}` : "";
}

// -------------------- Bottom sheet snapping (mobile) --------------------

const SHEET_SNAPS = [0.30, 0.70, 0.95];
let sheetCurrent = "closed"; // "closed" or ratio
let sheetY = null; // px

function vh(){
  return Math.max(320, window.innerHeight || 0);
}

function translateForSnap(ratio){
  const h = vh();
  const visible = Math.max(0, Math.min(h, ratio * h));
  return Math.max(0, Math.min(h, h - visible));
}

function applySheetTranslate(px, animate=true){
  const sheet = document.getElementById("panelSheet");
  if (!sheet) return;

  const h = vh();
  const clamped = Math.max(0, Math.min(h, px));
  sheetY = clamped;

  sheet.classList.toggle("anim", !!animate);
  sheet.style.setProperty("--sheet-y", clamped + "px");

  // expose visible sheet height to mobile list padding
  try{
    const visible = Math.max(0, h - clamped);
    document.documentElement.style.setProperty("--sheet-visible", visible + "px");
  }catch{}

  // Overlay policy:
  // - show overlay only when sheet is >= ~70% open (i.e., translate <= 30% vh)
  const overlay = document.getElementById("sheetOverlay");
  if (overlay){
    const show = clamped <= translateForSnap(0.70) + 2;
    overlay.classList.toggle("show", show);
    overlay.hidden = !show;
  }
}

function setSheetSnap(target, animate=true){
  if (!isMobile) return;

  if (target === "closed"){
    sheetCurrent = "closed";
    applySheetTranslate(vh(), animate);
    return;
  }

  // normalize to nearest snap ratio
  const ratio = (typeof target === "number") ? target : 0.70;
  sheetCurrent = ratio;
  applySheetTranslate(translateForSnap(ratio), animate);
}

function openDetailsSheet(ratio=0.70){
  setSheetSnap(ratio, true);
}

function closeDetailsSheet(){
  setSheetSnap("closed", true);
}

function toggleDetailsSheet(){
  if (sheetCurrent === "closed"){
    openDetailsSheet(lastSelectedStepId ? 0.70 : 0.30);
  } else {
    closeDetailsSheet();
  }
}

function attachSheetDrag(){
  const sheet = document.getElementById("panelSheet");
  const header = document.getElementById("sheetHeader");
  if (!sheet || !header) return;

  let startY = 0;
  let startTranslate = 0;
  let lastY = 0;
  let lastTime = 0;
  let velocity = 0;

  function onDown(e){
    if (!isMobile) return;
    if (e.target && e.target.closest && e.target.closest("button")) return;

    sheet.classList.remove("anim");
    header.setPointerCapture(e.pointerId);

    startY = e.clientY;
    startTranslate = (typeof sheetY === "number") ? sheetY : vh();

    lastY = startY;
    lastTime = performance.now();
    velocity = 0;
  }

  function onMove(e){
    if (!isMobile) return;
    if (!header.hasPointerCapture(e.pointerId)) return;

    const dy = e.clientY - startY;
    const next = startTranslate + dy;
    applySheetTranslate(next, false);

    const now = performance.now();
    const dt = Math.max(8, now - lastTime);
    const dy2 = e.clientY - lastY;
    velocity = dy2 / dt; // px per ms

    lastY = e.clientY;
    lastTime = now;
  }

  function onUp(e){
    if (!isMobile) return;
    if (!header.hasPointerCapture(e.pointerId)) return;

    header.releasePointerCapture(e.pointerId);

    const h = vh();
    const current = (typeof sheetY === "number") ? sheetY : h;

    const candidates = [
      { key:"closed", y: h },
      ...SHEET_SNAPS.map(r => ({ key:r, y: translateForSnap(r) }))
    ];

    // If user flicks down fast → close
    if (velocity > 1.0) {
      setSheetSnap("closed", true);
      return;
    }
    // If user flicks up fast → expand
    if (velocity < -1.0) {
      setSheetSnap(0.95, true);
      return;
    }

    // Snap to nearest
    let best = candidates[0];
    candidates.forEach(c => {
      if (Math.abs(c.y - current) < Math.abs(best.y - current)) best = c;
    });

    setSheetSnap(best.key, true);
  }

  header.addEventListener("pointerdown", onDown);
  header.addEventListener("pointermove", onMove);
  header.addEventListener("pointerup", onUp);
  header.addEventListener("pointercancel", onUp);
}

// -------------------- Mobile diagram modal (optional context) --------------------

let diagramMounted = false;

function buildMobileDiagramSVG(){
  const meta = getGroupMetaFromNav();

  // Layout constants
  const W = 420;
  const pad = 16;
  const cardW = W - pad*2;
  const cardH = 84;
  const gap = 22;

  function splitTitle(t){
    const s = String(t||"").trim();
    if (!s) return ["—"];
    const max = 30;
    if (s.length <= max) return [s];
    const cut = s.lastIndexOf(" ", max);
    if (cut > 10){
      const a = s.slice(0, cut).trim();
      const b = s.slice(cut+1).trim();
      if (b.length > max) return [a, b.slice(0, max-1) + "…"];
      return [a, b];
    }
    return [s.slice(0, max-1).trim() + "…"];
  }

  let y = 18;
  const parts = [];

  parts.push(`<text x="${pad}" y="${y}" style="font-size:16px;font-weight:800;fill:rgba(12,16,24,0.84);">Общий контекст</text>`);
  y += 22;

  meta.forEach(m => {
    const prefix = m.prefix;
    const label = m.label || prefix;

    y += 10;
    parts.push(`<text x="${pad}" y="${y}" class="laneTitle">${escapeHtml(label)}</text>`);
    y += 14 + 10;

    const ids = getStepsByGroup(prefix);
    ids.forEach((id, i) => {
      const step = STEPS[id] || {};
      const lines = splitTitle(step.title);

      const x = pad;
      const textX = x + 14;

      parts.push(
        `<g class="step" data-id="${escapeHtml(id)}">` +
          `<rect class="hit" x="${x-8}" y="${y-8}" width="${cardW+16}" height="${cardH+16}" rx="18" fill="transparent"/>` +
          `<rect class="box" x="${x}" y="${y}" width="${cardW}" height="${cardH}" rx="18" fill="rgba(255,255,255,0.92)" stroke="rgba(12,16,24,0.14)" stroke-width="1.2"/>` +
          `<text x="${textX}" y="${y+26}" style="font-size:12px;font-weight:800;fill:rgba(12,16,24,0.55);">${escapeHtml(id)}</text>` +
          `<text x="${textX}" y="${y+52}" style="font-size:14px;font-weight:700;fill:rgba(12,16,24,0.90);">${escapeHtml(lines[0])}</text>` +
          (lines[1] ? `<text x="${textX}" y="${y+70}" style="font-size:14px;font-weight:700;fill:rgba(12,16,24,0.90);">${escapeHtml(lines[1])}</text>` : ``) +
        `</g>`
      );

      if (i < ids.length - 1){
        const cx = W/2;
        const y1 = y + cardH + 2;
        const y2 = y + cardH + gap - 6;
        parts.push(`<line x1="${cx}" y1="${y1}" x2="${cx}" y2="${y2}" stroke="rgba(12,16,24,0.24)" stroke-width="2" marker-end="url(#arrow)"/>`);
      }

      y += cardH + gap;
    });

    y += 10;
  });

  const H = Math.max(640, Math.ceil(y + 18));

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
      <path d="M0,0 L12,6 L0,12 z" fill="rgba(12,16,24,0.42)"></path>
    </marker>
    <style><![CDATA[
      .laneTitle{font-size:13px;font-weight:900;fill:rgba(12,16,24,0.84);}
      .step{cursor:pointer;}
      .step.selected .box{stroke:rgba(0,122,255,0.90);stroke-width:2.4;}
    ]]></style>
  </defs>
  <rect x="0" y="0" width="${W}" height="${H}" fill="white"></rect>
  ${parts.join("\n  ")}
</svg>
  `.trim();
}

function openDiagramModal(){
  if (!isMobile) return;
  const modal = document.getElementById("diagramModal");
  if (!modal) return;

  modal.hidden = false;

  const wrap = document.getElementById("diagramSvgWrap");
  if (wrap && !diagramMounted){
    wrap.innerHTML = buildMobileDiagramSVG();
    diagramMounted = true;
  }

  if (activeGroup) highlightGroup(activeGroup);
  if (lastSelectedStepId){
    const g = document.querySelector('#diagramSvgWrap g.step[data-id="'+cssEscape(lastSelectedStepId)+'"]');
    if (g) selectStepGroup(g);
  }
}

function closeDiagramModal(){
  const modal = document.getElementById("diagramModal");
  if (!modal) return;
  modal.hidden = true;
}

function initDiagramModal(){
  const openBtn = document.getElementById("openDiagram");
  const closeBtn = document.getElementById("diagramClose");
  if (openBtn) openBtn.addEventListener("click", openDiagramModal);
  if (closeBtn) closeBtn.addEventListener("click", closeDiagramModal);

  const wrap = document.getElementById("diagramSvgWrap");
  if (wrap){
    wrap.addEventListener("click", (e)=>{
      const g = e.target.closest && e.target.closest("g.step[data-id]");
      if (!g) return;
      const id = g.getAttribute("data-id");
      if (!id) return;
      selectStepById(id, { from:"diagram", closeDiagram:true });
    });
  }
}

// -------------------- Step selection (shared entry point) --------------------

function selectStepById(id, opts={}){
  if (!id) return;
  lastSelectedStepId = id;

  markVisited(id);

  const prefix = String(id).split(".")[0];
  if (prefix && prefix !== activeGroup){
    activeGroup = prefix;
    try{ localStorage.setItem(LAST_GROUP_KEY, prefix); }catch{}
    syncNavActive(prefix);
    renderStepList();
  }

  const gAny = document.querySelector('g.step[data-id="'+cssEscape(id)+'"]');
  if (gAny) selectStepGroup(gAny);

  highlightGroup(prefix);

  renderStep(id);
  updateSheetHeader(id);

  setSelectedStepCard(id);

  updateProgressUI();

  if (isMobile){
    openDetailsSheet(0.70);
    if (opts.closeDiagram) closeDiagramModal();
  }
}

// -------------------- App bootstrap --------------------

function activateMobileMode(){
  isMobile = true;
  document.body.classList.add("is-mobile");

  renderGroupChips();

  // Restore last group if any
  let pref = null;
  try{ pref = localStorage.getItem(LAST_GROUP_KEY); }catch{}
  const order = getGroupOrder();
  if (!pref || !order.includes(pref)) pref = order[0] || GROUP_FALLBACK[0];

  selectGroup(pref, { from:"init" });

  // Sheet initial state: closed
  setSheetSnap("closed", false);
  attachSheetDrag();
  initDiagramModal();

  // Buttons
  const openSheet = document.getElementById("openSheet");
  if (openSheet) openSheet.addEventListener("click", ()=>toggleDetailsSheet());

  const backBtn = document.getElementById("sheetBack");
  if (backBtn) backBtn.addEventListener("click", ()=>{
    if (sheetCurrent === "closed") return;
    if (typeof sheetCurrent === "number" && sheetCurrent > 0.30) setSheetSnap(0.30, true);
    else closeDetailsSheet();
  });

  const closeBtn = document.getElementById("sheetClose");
  if (closeBtn) closeBtn.addEventListener("click", closeDetailsSheet);

  const overlay = document.getElementById("sheetOverlay");
  if (overlay) overlay.addEventListener("click", closeDetailsSheet);

  // Keep snap positions correct on resize/orientation
  window.addEventListener("resize", ()=>{
    if (!isMobile) return;
    if (sheetCurrent === "closed") applySheetTranslate(vh(), false);
    else if (typeof sheetCurrent === "number") applySheetTranslate(translateForSnap(sheetCurrent), false);
  }, { passive:true });
}

function activateDesktopMode(){
  isMobile = false;
  document.body.classList.remove("is-mobile");

  mountDesktopSvg();

  // Initial zoom + pan
  setZoom(70);
  initPan();

  // Desktop zoom controls
  const zoomOut = document.getElementById("zoomOut");
  const zoomIn = document.getElementById("zoomIn");
  const zoomFit = document.getElementById("zoomFit");
  const zoomRange = document.getElementById("zoomRange");

  if (zoomOut) zoomOut.addEventListener("click", ()=>setZoom((parseInt(zoomRange.value,10)||70) - 10));
  if (zoomIn) zoomIn.addEventListener("click", ()=>setZoom((parseInt(zoomRange.value,10)||70) + 10));
  if (zoomFit) zoomFit.addEventListener("click", ()=>setZoom(100));
  if (zoomRange) zoomRange.addEventListener("input", (e)=>setZoom(e.target.value));

  // Desktop nav interactions
  document.querySelectorAll(".navItem[data-group]").forEach(el=>{
    el.addEventListener("click", ()=>{
      const g = el.getAttribute("data-group");
      selectGroup(g, { from:"nav" });
    });
  });

  // Desktop: step click from SVG
  const svgWrap = document.getElementById("svgWrap");
  if (svgWrap){
    svgWrap.addEventListener("click",(e)=>{
      const g = e.target.closest && e.target.closest("g.step[data-id]");
      if (!g) return;
      const id = g.getAttribute("data-id");
      if (!id) return;
      selectStepById(id, { from:"svg" });
    });
  }

  const order = getGroupOrder();
  selectGroup(order[0] || GROUP_FALLBACK[0], { from:"init" });
  updateProgressUI();
}

window.addEventListener("load", ()=>{
  if (window.innerWidth < 768) {
    activateMobileMode();
  } else {
    activateDesktopMode();
  }
  updateProgressUI();
});
