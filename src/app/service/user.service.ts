import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modele/user';

type LoginResult = {
  success: boolean,
  id: number | null | undefined
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private host = 'http://localhost:3000/users/';
  constructor(private httpClient: HttpClient) {}

  async login(body: { fullname: string; password: string }): Promise<LoginResult> {
    const loginresult = await this.httpClient.get<User[]>(this.host).toPromise<User[]>().then((data) => {
      const user = data.find((d) => d.fullname === body.fullname);
      return {success : user.password === body.password, id: user.password === body.password ? user.id : null};
    });
    return loginresult
  }
}
