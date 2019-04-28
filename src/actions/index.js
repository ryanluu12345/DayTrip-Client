export function addArticle(payload) {
  return { type: 'ADD_ARTICLE', payload };
};

export function getPlaces(payload) {
  return { type: 'GET_PLACES', payload }
};

export function getHello(parameters) {
  console.log("helloget");
  return (dispatch) => {
    fetch('http://0e615581.ngrok.io', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parameters)
    })
    .then(res => res.json())
    .then(resJson => dispatch(getPlaces(resJson)))
    .catch(err => console.log(err));
  }
};

export function addChosenPlace(payload) {
  return { type: 'ADD_CHOSEN_PLACE', payload}
};