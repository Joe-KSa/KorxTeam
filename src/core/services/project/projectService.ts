import { environment } from "@/environments/environment.prod";
import type { getProjectProps, postProjectProps, apiResponse } from "@/core/types";
import { DataService } from "../dataService";

export class ProjectService extends DataService {
  private token?: string;

  constructor(token?: string) {
    super(environment.backEnd.baseUrl + "/project");
    this.token = token;
  }

  async getProjects(): Promise<getProjectProps[]> {
    try {
      const response = await fetch(`${this.url}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
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

  async createProject(
      project: postProjectProps
    ): Promise<apiResponse> {
      try {
        const response = await fetch(`${this.url}`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${this.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(project),
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
  
    async updateProject(
      id: number,
      project: postProjectProps
    ): Promise<apiResponse> {
      try {
        const response = await fetch(`${this.url}/${id}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${this.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(project),
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
  
    async deleteProject(id: number): Promise<apiResponse> {
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
