var questions = [{
    text: "Pobjednik SP u fudbalu 1998.godine je",
    answers: [
        {
            text: "Brazil",
            isTrue: false
        },
        {
            text: "Francuska",
            isTrue: true
        },
        {
            text: "Jugoslavija",
            isTrue: false
        },

    ]

},
{
    text: "Glavni grad Etiopije je",
    answers: [
        {
            text: "Ngorongoro",
            isTrue: false
        },
        {
            text: "Adis Abeba",
            isTrue: true
        },
        {
            text: "Brazavil",
            isTrue: false
        },

    ]

},
{
    text: "Glava se na latinskom kaze:",
    answers: [
        {
            text: "Kaput",
            isTrue: true
        },
        {
            text: "Jakna",
            isTrue: false
        },
        {
            text: "Kapa",
            isTrue: false
        },

    ]

},
{
    text: "Najvisa planina u Republici Srpskoj je:",
    answers: [
        {
            text: "Zelengora",
            isTrue: false
        },
        {
            text: "Maglic",
            isTrue: true
        },
        {
            text: "Jahorina",
            isTrue: false
        },

    ]

},
{
    text: "Koji je glavni grad Paragvaja?",
    answers: [
        {
            text: "Asunsion",
            isTrue: true
        },
        {
            text: "Bogota",
            isTrue: false
        },
        {
            text: "Montevideo",
            isTrue: false
        },

    ]

},
{
    text: "Glavni grad Japana je:",
    answers: [
        {
            text: "Peking",
            isTrue: false
        },
        {
            text: "Tokio",
            isTrue: true
        },
        {
            text: "Sana",
            isTrue: false
        },

    ]

},
// {
//     text: "Od koga je Srbija ispala na SP u kosarci 2019.godine?",
//     answers: [
//         {
//             text: "SAD",
//             isTrue: false
//         },
//         {
//             text: "Spanija",
//             isTrue: false
//         },
//         {
//             text: "Argentina",
//             isTrue: true
//         },

//     ]

// },
// {
//     text: "Ko je najbolji strijelac SP u kosarci 2019.godine?",
//     answers: [
//         {
//             text: "Bogdanovic",
//             isTrue: true
//         },
//         {
//             text: "Gasol",
//             isTrue: false
//         },
//         {
//             text: "Scola",
//             isTrue: false
//         },

//     ]

// },
// {
//     text: "Koji je bio prvak svijeta u fudbalu 1998.godine?",
//     answers: [
//         {
//             text: "Brazil",
//             isTrue: false
//         },
//         {
//             text: "Francuska",
//             isTrue: true
//         },
//         {
//             text: "Jugoslavija",
//             isTrue: false
//         },

//     ]

// },
// {
//     text: "Koja je najmnogoljudnija zemljana svijetu?",
//     answers: [
//         {
//             text: "Kina",
//             isTrue: true
//         },
//         {
//             text: "Indija",
//             isTrue: false
//         },
//         {
//             text: "SAD",
//             isTrue: false
//         },

//     ]

// }
]



var counter = 0;
var indeks = 0;
var q;
var question = document.getElementById("question");
question.innerHTML = questions[indeks].text;

var ans1 = document.getElementById("answer1");
ans1.innerHTML = questions[indeks].answers[0].text;

var ans2 = document.getElementById("answer2");
ans2.innerHTML = questions[indeks].answers[1].text;

var ans3 = document.getElementById("answer3");
ans3.innerHTML = questions[indeks].answers[2].text;


const generateQuestion = () => {
    indeks = (Math.floor(Math.random() * (questions.length - 1)));
    q = questions[indeks];
    question.innerHTML = q.text;
    ans1.innerHTML = q.answers[0].text;
    ans2.innerHTML = q.answers[1].text;
    ans3.innerHTML = q.answers[2].text;
    questions.splice(indeks, 1);

}
generateQuestion();
const next = (answer) => {
    let condition;

    q.answers.forEach(element => {

        if (element.text == answer.innerHTML) {

            condition = element.isTrue;
        }
    });
    if(condition){
        counter++;
        if(counter==5){
            document.getElementById("question-frame").style.display="none";
            document.getElementById("end").style.display="block";
            document.getElementById("button-frame").style.display="none";
        }
        else{
            generateQuestion();
        }

    }
    else{
        document.getElementById("question-frame").style.display="none";
        document.getElementById("error-frame").style.display="block";
        document.getElementById("button-frame").style.display="none";
        q.answers.forEach(element => {
            if(element.isTrue){
                document.getElementById("tacno").innerHTML="Tacan odgovor je: "+element.text;
            }
        });
    
    }


}

ans1.onclick = () => {
    ans1.style.display="block";
    ans2.style.display="block";
    next(ans1);
};
ans2.onclick = () => {
    ans1.style.display="block";
    ans2.style.display="block";
    next(ans2);
};
ans3.onclick = () => {
    ans1.style.display="block";
    ans2.style.display="block";
    next(ans3);
};

document.getElementById("novi").onclick=()=>{
    ans1.style.display="block";
    ans2.style.display="block";
    generateQuestion();
    document.getElementById("novi").style.display="none";
}
document.getElementById("pomoc").onclick=()=>{

    if(q.answers[0].isTrue){
        ans2.style.display="none";
    }
    else{
        ans1.style.display="none";
    }

    document.getElementById("pomoc").style.display="none";

}
const ponovo=()=>{
    location="index.html"
}
document.getElementById("novi-k").onclick=()=>{
    ponovo();
}
