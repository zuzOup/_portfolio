const auth = {
  headers: {
    // authorization: `token ${import.meta.env.VITE_TOKEN}`,
  },
};



export async function fetchDataMD(url, setter, conditions) {
  fetch(url, auth)
    .then((response) => response.json())
    .then((data) => {
      const content = atob(data.content);

      // console.log(conditions(content));
      setter(conditions(content));
    })
    .catch((error) => console.log(error));
}
