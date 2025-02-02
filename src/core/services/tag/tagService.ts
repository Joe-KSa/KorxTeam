import { environment } from "@/client/environments/environment.prod";
import type { tagProps } from "@/client/core/types";
import { DataService } from "../dataService";

export class TagService extends DataService {
  constructor() {
    super(environment.backEnd.baseUrl + "/tag");
  }

  async getTags(): Promise<tagProps[]> {
    try {
      const response = await fetch(`${this.url}/route`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: tagProps[] = await response.json();
      return data;
    } catch (error) {
      this.handleError(error);
      return [];
    }
  }
}
