"use server";

import { revalidateTag } from "next/cache";
import { ENDPOINT } from "./ENDPOINT";
import { handleDeleteData, handlePostData } from "./fetches";

export const handlePostDataAction = async (id: string) => {
  const data = await handlePostData(id);
  revalidateTag("fetch-data");
  return data;
};

export const handleDeleteDataAction = async (id: string) => {
  const data = await handleDeleteData(id);
  revalidateTag("fetch-data");
  return data;
};
