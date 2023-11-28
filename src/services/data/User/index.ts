
import { IResponseUser, IUser } from "../../../interfaces/user.interface.ts";
import api
 from "../api";
class UserData {
  register(data: IUser) {
    return api.post<IResponseUser>('/Cadastro', data)
  }
  login(data: IUser) {
    return api.post<IResponseUser>('/Login', data)
  }
}

export default new UserData()