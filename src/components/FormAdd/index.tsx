"use client";

import { handlePostDataAction } from "@/fetch/actions";
import React from "react";
import { useState } from "react";

const Input = () => {
  const [id, setId] = useState("");
  const [apiData, setApiData] = useState([]);

  return (
    <div>
      <input
        value={id}
        className="border-2 border-red-300 rounded-md w-[150px] text-[16px] text-black p-[10px]"
        type="text"
        onChange={(e) => setId(e.target.value)}
      />

      <div className="mt-[50px]">
        <button
          type="button"
          className="mr-[20px] text-[24px] bg-green-500 rounded-md w-[100px] "
          onClick={() => {
            (async () => {
              await handlePostDataAction(id);
              setId('')
            })()
          }}
        >
          POST
        </button>
      </div>
    </div>
  );
};

export default Input;
