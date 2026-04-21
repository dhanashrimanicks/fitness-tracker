const BASE_URL = "https://t4e-testserver.onrender.com/api";

export const getToken = async () => {
  try {
    const res = await fetch(`${BASE_URL}/public/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        studentId: "E0123023", 
        password: "950167"
      })
    });

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("TOKEN ERROR:", err);
    return {};
  }
};

export const getData = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/private/data`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("DATA ERROR:", err);
    return { data: [] };
  }
};