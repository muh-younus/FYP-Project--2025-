import React, { useState } from "react";

function Chatbot() {
  const [question, setQuestion] = useState();
  const askquestion = () => {
    console.log(question);
  };
  return (
    <>
      <main className="grid grid grid-cols-5 h-screen bg-black text-center text-white">
        <div className="col-span-1 bg-zinc-800 ">
          <h1>Hello</h1>
        </div>

        <div className="col-span-4">
          <div className="container h-[410px]"></div>

          <div className="bg-zinc-800 w-1/2 pr-5 p-1 h-[56px] text-white m-auto flex rounded-3xl border border-zinc-400">
            <input
              className="bg-zinc-800 w-full h-full rounded-3xl outline-none p-3"
              type="text"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask me anything"
            />
            <button onClick={askquestion} className="">
              Ask
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Chatbot;
