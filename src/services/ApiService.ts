import axios, { AxiosRequestConfig } from "axios";

abstract class ApiService {
  private instance = axios.create({
    baseURL: "https://rickandmortyapi.com/api/",
  });

  protected async request(config: AxiosRequestConfig) {
    try {
      return await this.instance(config);
    } catch (err) {
      console.error(err);

      throw err;
    }
  }
}

export default ApiService;
