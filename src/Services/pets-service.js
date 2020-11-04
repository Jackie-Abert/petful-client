import config from "./config";

const petsApiService = {
  getPets() {
    return fetch(`${config.API_ENDPOINT}/pets`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  deletePets(pet) {
    return fetch(`${config.API_ENDPOINT}/pets`, {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With",
        "content-type": "application/json",
      },
      body: JSON.stringify({ type: pet }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : Promise.resolve("")
    );
  },
};

export default petsApiService;
