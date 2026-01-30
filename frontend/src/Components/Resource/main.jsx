import React, { useState, useEffect, useRef } from "react";
import { RiGeminiLine } from "react-icons/ri";
import { FaLock } from "react-icons/fa6";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Grid } from 'react-loader-spinner'

const Main = ({ id }) => {
  let [input, setInput] = useState("");
  let [messages, setMessages] = useState([]);
let [loading,setLoading] = useState(false)
  const messagesEndRef = useRef(null);
 

 
  let RENDER_URI;
  let env = "production";
  if (env === "production") {
    RENDER_URI = import.meta.env.VITE_RENDER_URI;
  } else {
    RENDER_URI = `http://localhost:8080`;
  }


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  let handleInput = (event) => {
    setInput(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();

    if (!input.trim()) return;
setLoading(true);
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    try {
      let { data } = await axios.post(`${RENDER_URI}/chat/${id}`, {
        query: input,
      });

      setMessages((prev) => [...prev, { sender: "ai", text: data }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "⚠️ Error fetching response." },
      ]);
    }

    setInput("");
    setLoading(false);
  };

  return (
    
    <div className="flex flex-col min-h-screen  overflow-y-hidden w-full items-center text-white">


      <div className="flex-1 mt-20 sm:pb-26 pb-38 w-full overflow-y-auto rounded-2xl px-4">
        <div className="text-center text-xl">
        <RiGeminiLine className="inline mr-2 text-amber-300 text-xl animate-slow" />
        No Doubt is Dumb – Ask{" "}
        <span className="underline text-cyan-500">KLUE AI</span>.
      </div>
       <div className="text-white/50 text-center text-sm py-2">
            <FaLock className="inline text-amber-400 mb-1" /> No history. Just
            secure, real-time AI for clear concepts. Chat memory is limited due
            to no authentication.
          </div>

        <div className="w-full">
         {
           <div>{messages.map((el, i) => (
          <div
            key={i}
            className={`p-4 my-4 break-words tracking-wide rounded-xl ${
              el.sender === "user"
                ? "bg-[#121212] self-end ml-auto max-w-fit"
                : " text-[#E2E8F0]    [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:max-w-full [&_pre]:box-border [&_pre]:whitespace-pre-wrap [&_code]:break-wordswh"
            }`}
          >
            <ReactMarkdown>{el.text}</ReactMarkdown>
          </div>
        ))}</div>
        
         }
        {
          loading && <Grid
  visible={true}
  height="80"
  width="25"
  color="orange"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{}}
  wrapperClass="grid-wrapper"
  />
         }
      
        </div>
         
        <div ref={messagesEndRef} />
      </div>

      
      <div className="bottom-0 fixed z-20 border border-white/10 bg-white/10 backdrop-blur-2xl rounded-lg mb-2 sm:w-[75%] w-[90%] p-2">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <input
              type="text"
              className="w-full p-2 rounded-xl outline-none flex-grow ml-4 text-white resize-none mr-2 h-12"
              value={input}
              onChange={handleInput}
            />
            <button
              type="submit"
              className="flex justify-center hover:cursor-pointer rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 items-center px-4"
            >
              <RiGeminiLine className="text-center text-xl" />
            </button>
          </div>
         
        </form>
      </div>
    </div>
  );
};

export default Main;