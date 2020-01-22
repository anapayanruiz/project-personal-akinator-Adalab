const QUESTIONS = './data/data.json';

const getDataFromServer = () => fetch(QUESTIONS).then(response => response.json());

export {getDataFromServer};