"use client";

import { handleDeleteDataAction } from "@/fetch/actions";

const ButtonDelete = ({ id, value} : {id?: string; value?: string}) => {
  return (
    <div className="py-[4px] flex-row w-[400px]">
      <span>{value}</span>
      <button
        className="ml-4 bg-red-300 px-2 rounded-xl"
        onClick={() => {
          (async () => {
            await handleDeleteDataAction(id);
          })();
        }}
      >
        x
      </button>
    </div>
  );
};

export default ButtonDelete;
