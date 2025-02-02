import { environment } from "@/environments/environment.prod";
import { DataService } from "../dataService";
import type {
  getMemberProps,
  postMemberProps,
  apiResponse
} from "../../types";


export class MemberService extends DataService {
  private token?: string;

  constructor(token?: string) {
    super(environment.backEnd.baseUrl + "/member");
    this.token = token;
  }

  async getMembers(): Promise<getMemberProps[]> {
    try {
      const response = await fetch(`${this.url}`, {
        method: "GET",
        headers: { 
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      this.handleError(error);
      return [];
    }
  }

  async getMember(id: number): Promise<getMemberProps | undefined> {
    try {
      const response = await fetch(`${this.url}/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      this.handleError(error);
      return undefined;
    }
  }

  async createMember(
    member: postMemberProps
  ): Promise<apiResponse> {
    try {
      const response = await fetch(`${this.url}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(member),
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        return { success: false, message: errorMessage.error };
      }

      return { success: true };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  }

  async updateMember(
    id: number,
    member: postMemberProps
  ): Promise<apiResponse> {
    try {
      const response = await fetch(`${this.url}/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(member),
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        return { success: false, message: errorMessage.error };
      }

      return { success: true };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  }

  async deleteMember(id: number): Promise<apiResponse> {
    try {
      const response = await fetch(`${this.url}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        return { success: false, message: errorMessage.error };
      }

      return { success: true };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  }
}
