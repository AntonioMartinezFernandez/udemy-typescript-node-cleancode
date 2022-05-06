import IFood from '../../domain/interfaces/IFood';
import { IHttpRequest, IHttpResponse } from '../../domain/interfaces/IHttp';

export class Food {
  constructor(private readonly food: IHttpRequest) {}

  getName(food: IFood = this.food.body): IHttpResponse {
    const response = {
      statusCode: 200,
      body: {
        name: food.name,
      },
    };
    return response;
  }

  getDescription(food: IFood = this.food.body): IHttpResponse {
    const response = {
      statusCode: 200,
      body: {
        description: food.description,
      },
    };
    return response;
  }

  getFood(food: IFood = this.food.body) {
    return food;
  }
}
