export const fetchApi = async (url: string, options?: object) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/${url}`,
      options
    );
    // if (!res.ok) {
    //   throw new Error("Data Not Found In This Url");
    // }
    const data = await res.json();
    return data;
  } catch (e: unknown) {
    console.error(e);
    if (e instanceof Error) {
      throw new Error(e.name);
    } else {
      throw new Error("Unknown Error occurred");
    }
  }
};
