const token = window.localStorage.getItem("token");
async function postPledge(amount, comment, anonymous, projectid) {
  const url = `${import.meta.env.VITE_API_URL}/pledges/`;
  const response = await fetch(url, {
    method: "POST", // We need to tell the server that we are sending JSON data so we set the Content-Type header to application/json
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({
      amount: amount,
      comment: comment,
      anonymous: anonymous,
      project: projectid,
    }),
  });

  if (!response.ok) {
    const fallbackError = `Error trying to login`;

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await response.json();
}

export default postPledge;
