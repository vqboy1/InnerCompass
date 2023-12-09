function check() {
    var a=0;
    var b=0;
    var c=0;
    var d=0;
    var q1=document.quiz.question1.value; /* берется значение из ABCD*/
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var q6=document.quiz.question6.value;
    var q7=document.quiz.question7.value;
    var q8=document.quiz.question8.value;
    var q9=document.quiz.question9.value;
    var q10=document.quiz.question10.value;
    var q11=document.quiz.question11.value;
    var q12=document.quiz.question12.value;
    var q13=document.quiz.question13.value;
    var q14=document.quiz.question14.value;
    var q15=document.quiz.question15.value;
    result=document.getElementById(`result`);
    quiz=document.getElementById(`quiz`);
    result.innerHTML = ''
    /* Вопрос 1*/
    if (q1=='a') {
        a ++;
    } else if (q1=='b') {
        b ++;
    } else if (q1=='c') {
        c ++;
    } else if (q1=='d') {
        d ++;
    }
    /* Вопрос 2*/
    if (q2=='a') {
        a ++;
    } else if (q2=='b') {
        b ++;
    } else if (q2=='c') {
        c ++;
    } else if (q2=='d') {
        d ++;
    }
    /* Вопрос 3*/
    if (q3=='a') {
        a ++;
    } else if (q3=='b') {
        b ++;
    } else if (q3=='c') {
        c ++;
    } else if (q3=='d') {
        d ++;
    }
    /* Вопрос 4*/
    if (q4=='a') {
        a ++;
    } else if (q4=='b') {
        b ++;
    } else if (q4=='c') {
        c ++;
    } else if (q4=='d') {
        d ++;
    }
    /* Вопрос 5*/
    if (q5=='a') {
        a ++;
    } else if (q5=='b') {
        b ++;
    } else if (q5=='c') {
        c ++;
    } else if (q5=='d') {
        d ++;
    }
    /* Вопрос 6*/
    if (q6=='a') {
        a ++;
    } else if (q6=='b') {
        b ++;
    } else if (q6=='c') {
        c ++;
    } else if (q6=='d') {
        d ++;
    }
    /* Вопрос 7*/
    if (q7=='a') {
        a ++;
    } else if (q7=='b') {
        b ++;
    } else if (q7=='c') {
        c ++;
    } else if (q7=='d') {
        d ++;
    }
    /* Вопрос 8*/
    if (q8=='a') {
        a ++;
    } else if (q8=='b') {
        b ++;
    } else if (q8=='c') {
        c ++;
    } else if (q8=='d') {
        d ++;
    }
    /* Вопрос 9*/
    if (q9=='a') {
        a ++;
    } else if (q9=='b') {
        b ++;
    } else if (q9=='c') {
        c ++;
    } else if (q9=='d') {
        d ++;
    }
    /* Вопрос 10*/
    if (q10=='a') {
        a ++;
    } else if (q10=='b') {
        b ++;
    } else if (q10=='c') {
        c ++;
    } else if (q10=='d') {
        d ++;
    }
    /* Вопрос 11*/
    if (q11=='a') {
        a ++;
    } else if (q11=='b') {
        b ++;
    } else if (q11=='c') {
        c ++;
    } else if (q11=='d') {
        d ++;
    }
    /* Вопрос 12*/
    if (q12=='a') {
        a ++;
    } else if (q12=='b') {
        b ++;
    } else if (q12=='c') {
        c ++;
    } else if (q12=='d') {
        d ++;
    }
    /* Вопрос 13*/
    if (q13=='a') {
        a ++;
    } else if (q13=='b') {
        b ++;
    } else if (q13=='c') {
        c ++;
    } else if (q13=='d') {
        d ++;
    }  
    /* Вопрос 14*/
    if (q14=='a') {
        a ++;
    } else if (q14=='b') {
        b ++;
    } else if (q14=='c') {
        c ++;
    } else if (q14=='d') {
        d ++;
    }  
    /* Вопрос 15*/
    if (q15=='a') {
        a ++;
    } 
    else if (q15=='b') {
        b ++;
    } else if (q15=='c') {
        c ++;
    } else if (q15=='d') {
        d ++;
    }
    quiz.style.display="none";

    /* Вывод данных по условиям */
    if (a > b && a > c && a > d) {
        result.innerHTML += "Вы - холерик!";
    } else if (b > a && b > c && b > d) {
        result.innerHTML += "Вы - сангвиник!";
    } else if (c > a && c > b && c > d) {
        result.innerHTML += "Вы - флегматик!"
    } else if (d > a && d > b && d > c) {
        result.innerHTML += "Вы - меланхолик!"
    } else {
        result.innerHTML += "У вас не преобладает ни один темперамент."
    }
    result.innerHTML += '<br>' + "тип холерика - " + a + " баллов" + '<br>' +
    "тип сангвиника -  " + b + " баллов" + "<br>" +
    "тип флегматика - " + c + " баллов" + "<br>" + 
    "тип меланхолика - " + d + " баллов" + "<br>"
    const button = document.getElementById('button2'); // прячет кнопку
    button.style.visibility = 'hidden';
}