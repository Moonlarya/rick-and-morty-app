import ApiService from "./ApiService";

class CharacterService extends ApiService {
  private category = "characters";

  public async getById(id: number | string) {
    const response = await this.request({
      url: `${this.category}/${id}`,
    });

    return response.data;
  }
}

export default new CharacterService();
