import { Request, Response } from "express";
import prisma from "../config/prisma";

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, priority, status, dueDate } = req.body;

    const task = await prisma.task.create({
      data: {
        title,
        description,
        priority,
        status,
        dueDate: new Date(dueDate),
      },
    });

    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to create task",
    });
  }
};

export const getTasks = async (req: Request, res: Response) => {
  try {
    const { search, status, priority, sort } = req.query;

    const tasks = await prisma.task.findMany({
      where: {
        title: search
          ? {
              contains: String(search),
              mode: "insensitive",
            }
          : undefined,

        status: status ? String(status) : undefined,

        priority: priority ? String(priority) : undefined,
      },

      orderBy: {
        dueDate: sort === "dueDate" ? "asc" : "desc",
      },
    });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch tasks",
    });
  }
};

export const getTaskById = async (req: Request, res: Response) => {
  try {
    const task = await prisma.task.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch task",
    });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const task = await prisma.task.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });

    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update task",
    });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    await prisma.task.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete task",
    });
  }
};