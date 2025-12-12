import React, { useState } from "react";
import {URL} from "../../constant.js"

function Chatbot() {
  const [question, setQuestion] = useState();
  const payload = {
    "contents": [
      {
        "parts": [
          {
            "text": "Explain how AI works in a few words"
          }
        ]
      }
    ]
  }
  const askquestion = async  () => {
    let response = await fetch(URL,{
      method: "POST",
      body:JSON.stringify(payload),
    })
    response = await response.json()
    console.log(response)
  };
  return (
    <>
      <main className="grid  grid-cols-5 h-screen bg-black text-center text-white">
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
