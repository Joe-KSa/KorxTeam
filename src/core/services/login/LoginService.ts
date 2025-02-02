import { DataService } from "../dataService";
import { environment } from "@/environments/environment.prod";

export class LoginService extends DataService {
  constructor() {
    super(environment.backEnd.baseUrl + "/login");
  }

  async validateUser(username: string, password: string) {
    try {
      const response = await fetch(`${this.url}/route`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      console.log("Response status:", response.status);
      if (!response.ok) {
        throw new Error("Error en la autenticación");
      }
      const data = await response.json();
      return data.token;
    } catch (error) {
      this.handleError(error);
      return null;
    }
  }
}
