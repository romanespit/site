
let quotes = [
    { q: "&ldquo;Дружба между мужчинами - это просто секс, отложенный на потом.&rdquo;", p: "" },
    { q: "Пью черноголовку с остановками.", p: "" },
    { q: "Штурмовой подводный единорог большой грузоподъемности.", p: "" },
    { q: "Вы не можете спать, пока рядом враги.", p: "" },
    { q: "Сайт Чарльза Ксавьера для одарённых подростков.", p: "" },
    { q: "Астральный степ маленьких утят.", p: "" },
    { q: "Предлагаю нажраться пивом в знак протеста.", p: "" },
    { q: "А вы госдолг США видели?)))))))))", p: "" },
    { q: "&ldquo;Могу ли я считать себя богом, если в меня тоже не верят?&rdquo;", p: "" },
    { q: "Оторвись от отжиманий и сделай 20 компов.", p: "" },
    { q: "Оказавшись перед Путины, сколько вы хапните?", p: "" },
    { q: "&ldquo;Готов пройти проверку властью и деньгами.&rdquo;", p: "" },
    { q: "Дай бог каждому сочных чебуреков.", p: "" },
    { q: "Ищи себя в грязнокровках Хогвартса.", p: "" },
    { q: "&ldquo;Никогда не сдавайся. Позорься до конца.&rdquo;", p: "" },
    { q: "Ты на физику не смотри, у меня по рисованию 5.", p: "" },
    { q: "Криштиану Роналду взял 7-ой номер в честь 7-ого троллейбуса в Челябинске.", p: "" },
    { q: "Если у вас нет отца, то у кого-то их два.", p: "" },
    { q: "&ldquo;Вы имеете право, но не имеете лево.&rdquo;", p: "" },
    { q: "&ldquo;Эх, сынок, в твоём возрасте я уже был в ахуе.&rdquo;", p: "" },
    { q: "Игрокам в доту надо дать ремня.", p: "" },
    { q: "Бедро человека крепче, чем батон хлеба.", p: "" },
    { q: "Сколько бы лет ни прошло, а у апельсинового сока всё ещё стойкий запах и привкус водки.", p: "" },
    { q: "Я ценитель сосисок с мягкой пюрешечкой.", p: "" },
    { q: "Если в ЛГБТ сместить все буквы на одну назад, то получится КВАС.", p: "" },
    { q: "Обезьянье безумие! (вас обезьянит)", p: "" },
    { q: "Не изнасилование, а специальная романтическая операция.", p: "" },
    { q: "Голландия отозвала из России все штурвалы.", p: "" },
    { q: "Тебе вроде бы похуй, но где-то болит, да?", p: "" },
    { q: "Подумать дважды? Дружище, я не думаю даже единожды.", p: "" },
    { q: "Пионы отцветут, сезон черешни закончится, но пиво будет актуально всегда.", p: "" },
    { q: "Америка — это просто марионетка Узбекистана. Она делает то, что скажет Ташкент.", p: "" },
    { q: "У России два союзника: «как относишься» и «что думаешь».", p: "" }
]

document.addEventListener("DOMContentLoaded", () => {
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerHTML = quote.q;
    document.getElementById("person").innerHTML = `©️ ${quote.p}`;
})