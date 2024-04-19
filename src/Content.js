import React from "react";
import { Question } from "./Question";
import "./Content.css";
export function Content() {
  function getResults(event) {
    event.preventDefault();
    let marks = 0;
    const form = event.target;
    const checkAnswer = (qname, correctans) => {
      const selectedAnswer = form.querySelector(
        `input[name="${qname}"]:checked`
      ).value;
      if (selectedAnswer === correctans) {
        marks++;
      }
    };
    checkAnswer("question1", "OOPS");
    checkAnswer("question2", "query language");
    checkAnswer("question3", "6");
    checkAnswer("question4", "h6");
    checkAnswer("question5", "color");

    alert(marks);
  }
  return (
    <form onSubmit={getResults}>
      <div>
        <Question
          q1="1. What is Java?"
          name="question1"
          op1="OOPS"
          op2="SQL"
          op3="OIPS"
          op4="ORPS"
        />
        <Question
          q1="2.What is SQL?"
          name="question2"
          op1="scripting language"
          op2="programming language"
          op3="framework"
          op4="query language"
        />
        <Question
          q1="3. How many sizes of headers are available in HTML by default?"
          name="question3"
          op1="5"
          op2="1"
          op3="3"
          op4="6"
        />
        <Question
          q1="4.What is the smallest header in HTML by default?"
          name="question4"
          op1="h1"
          op2="h2"
          op3="h6"
          op4="h4"
        />
        <Question
          q1="5.Which property is used to set colors in HTML?"
          name="question5"
          op1="color"
          op2="background-color"
          op3="font-color"
          op4="text-color"
        />
      </div>
      <br />
      <div class="submit">
        <input type="submit"></input>
      </div>
    </form>
  );
}
