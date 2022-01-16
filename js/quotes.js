const quotes =[
    {
        quote :  "지금 공부 안 하면 더울 때 더운 데서 일하고 추울 때 추운 데서 일한다.",
        author : "Park Myung Soo"
    },
    {
        quote :  "늦었다고 생각할 때가 늦었다.",
        author : "Park Myung Soo"
    },
    {
        quote :  "“내 너 그럴 줄 알았다” 알았으면 제발 미리 말 해줘라.",
        author : "Park Myung Soo"
    },
    {
        quote :  "어려운 길은 길이 아니다.",
        author : "Park Myung Soo"
    },
    {
        quote :  "즐길 수 없으면 피하라.",
        author : "Park Myung Soo"
    },
    {
        quote :  "성공은 1% 재능과 99%의 빽",
        author : "Park Myung Soo"
    },
    {
        quote :  "내일도 할 수 있는 일을 굳이 오늘 할 필요 없다.",
        author : "Park Myung Soo"
    },
    {
        quote :  "가는 말이 고우면 얕본다.",
        author : "Park Myung Soo"
    },
    {
        quote :  "고생 끝에 골병 난다.",
        author : "Park Myung Soo"
    },
    {
        quote :  "참을 인 세 번이면 호구",
        author : "Park Myung Soo"
    },
    {
        quote :  "티끌 모아 티끌",
        author : "Park Myung Soo"
    },
    {
        quote :  "원수는 회사에서 만난다.",
        author : "Park Myung Soo"
    },
    {
        quote :  "헌신하면 헌신 짝 된다.",
        author : "Park Myung Soo"
    },
    {
        quote :  "죽음과 결혼은 뒤로 미룰수록 좋다.",
        author : "Park Myung Soo"
    },
    {
        quote :  "한 번 누우면 끝. 지금 많이 사랑하라.",
        author : "Park Myung Soo"
    },
    {
        quote :  "대문으로 가난이 찾아오면 사랑은 창문으로 도망간다.",
        author : "Park Myung Soo"
    },
    {
        quote :  "결혼은 좋은 짝을 만나는 게 아니라 좋은 짝이 되어주는 거다.",
        author : "Park Myung Soo"
    },


]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;