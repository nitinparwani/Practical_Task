import api from './api';

export const getJsonData = data => {
  try {
    return new Promise((resolve, reject) => {
      api
        .get('practical-api.json')
        .then(response => {
          if (response.body.IsSuccess) {
            resolve(response.body);
          } else {
            resolve(response.body);
          }
        })
        .catch(reject);
    });
  } catch (error) {
    reject(error);
  }
};
