import { environment } from "@/environments/environment.prod"
import { DataService } from "../dataService";
import type { fileFromCloudProps } from "@/core/types";

export class CloudinaryService extends DataService {
  private token: string;

  constructor(token: string) {
    super(environment.backEnd.baseUrl + "/upload");
    this.token = token;
  }

  async uploadImage(image: File): Promise<fileFromCloudProps | undefined> {
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch(`${this.url}/route`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error uploading image: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      this.handleError(error);
      return undefined;
    }
  }

  async deleteImage(publicId: string) {
    try {
      const response = await fetch(`${this.url}/route`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
        body: JSON.stringify({ publicId }),
      });
      return response.json();
    } catch (error) {
      this.handleError(error);
      return undefined;
    }
  }
}
