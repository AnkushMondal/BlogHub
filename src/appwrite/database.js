import config from "../config/config";
import { Client, ID, TablesDB, Query } from "appwrite";

export class DatabaseService {
  client = new Client();
  database;


  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.database = new TablesDB(this.client);
  }

  async createPost(post) {
    try {
     
      const rowId = post.slug || post.$id || ID.unique();

      const payload = {
        title: post.title,
        content: post.content,
        featuredImage: post.featuredImage,
        status: post.status,
        userId: post.userId,
        category: post.category, // new field
      };

      return await this.database.createRow(
        config.appwriteDatabaseId,
        config.appwriteTablesId,
        rowId,
        payload,
      );
    } catch (error) {
      console.log("Create Post Error:", error);
      throw error;
    }
  }

  async updatePost(rowId, post) {
  try {
    const payload = {
      title: post.title,
      content: post.content,
      featuredImage: post.featuredImage,
      status: post.status,
      category: post.category,
    };

    return await this.database.updateRow(
      config.appwriteDatabaseId,
      config.appwriteTablesId,
      rowId,
      payload
    );
  } catch (error) {
    console.log("Update Post Error:", error);
    throw error;
  }
}

  async deletePost(rowId) {
    try {
      await this.database.deleteRow(
        config.appwriteDatabaseId,
        config.appwriteTablesId,
        rowId
      );
      return true;
    } catch (error) {
      console.log("Delete Post Error:", error);
      throw error;
    }
  }

  async getPost(rowId) {
    try {
      return await this.database.getRow(
        config.appwriteDatabaseId,
        config.appwriteTablesId,
        rowId,
      );
    } catch (error) {
      console.log("Get Post Error:", error);
      throw error;
    }
  }
  // list rows from table; caller may pass filtering queries
  // default empty array returns all documents (no status filtering)
  async getPosts(queries = []) {
    try {
      return await this.database.listRows(
        config.appwriteDatabaseId,
        config.appwriteTablesId,
        queries,
      );
    } catch (error) {
      console.log("Get Posts Error:", error);
      throw error;
    }
  }
}

  const databaseService = new DatabaseService();

  export default databaseService;


