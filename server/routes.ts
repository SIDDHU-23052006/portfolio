import type { Express } from "express";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<void> {

  app.post(api.contactMessages.create.path, async (req, res) => {
    try {
      const input = api.contactMessages.create.input.parse(req.body);

      const message = await storage.createContactMessage(input);

      res.status(201).json(message);

    } catch (err) {

      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join("."),
        });
      }

      return res.status(500).json({
        message: "Internal server error",
      });

    }
  });

}