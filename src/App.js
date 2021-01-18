import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  const [questions] = useState(data);

  return (
    <>
      <main>
        <div className="container">
          <h3>Questions and answers about login</h3>

          <section className="info">
            {questions.map((question) => {
              return <SingleQuestion key={question.id} data={question} />;
            })}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
