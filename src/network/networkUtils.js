import axios from "axios";

class NetworkUtils {
  constructor(options) {
    this.baseUrl = options.baseUrl;
  }

  get(endpoint) {
    console.log(this.baseUrl + "" + endpoint);
    return this.requestHttpJSON("GET", this.baseUrl + endpoint, null);
  }

  //Content-Type: application/json
  async requestHttpJSON(method, url, params) {
    return new Promise((resolve, reject) => {
      var options = {
        method,
        url,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      if (params) {
        options.data = params;
      }

      axios(options)
        .then((response) => {
          resolve({ statusCode: response.status, body: response.data });
        })
        .catch((error) => {
          console.log("Api_error: " + JSON.stringify(error));
          if (error.status == null) {
            resolve({
              statusCode: error.status,
              body: error.message,
            });
          } else {
            reject(__.t("Can not connect to server"));
          }
        });
    });
  }
}

export default NetworkUtils;
