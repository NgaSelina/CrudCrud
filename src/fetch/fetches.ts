import { ENDPOINT } from "./ENDPOINT";

export const fetchData = async () => {
  console.log("555");
  try {
    const response = await fetch(ENDPOINT, { next: { tags: ["fetch-data"] } });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log("2222", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const handlePostData = async (value: string) => {
  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value }),
    }).then((resp) => resp.json());

    if (!response.ok) {
      throw new Error("Failed to post data");
    }
  } catch (error) {
    console.error("Error posting data:", error);
  }
};

export const handleDeleteData = async (id: string) => {
  try {
    const response = await fetch(`${ENDPOINT}/${id}`, {
      method: "DELETE",
    }).then((resp) => resp.json());

    if (!response.ok) {
      throw new Error("Failed to delete item");
    }
    return response;
  } catch (error) {
    console.error("Error deleting item:", error);
  }
};
