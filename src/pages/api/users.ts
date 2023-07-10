import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { ApiResponseBase } from "types";
import { usersApiShema } from "schemas";
import { z } from "zod";
import { users } from "data";

export interface UsersRequest extends NextApiRequest {
  query: { data: string };
}

export interface UsersResponse {
  message: string;
  users?: {
    leaderOfStat: string | undefined;
    username: string;
    leadingStatNumber: number;
    score: number;
    matches: number;
    rank: number;
  }[];
  pages?: number[];
}

const handler = nc<UsersRequest, NextApiResponse<ApiResponseBase<UsersResponse>>>({
  onError: (err, req, res, next) => {
    console.log(err.message);
    res.status(err.statusCode || 500).json({ error: err.message });
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page not found");
  }
})
  .post(async (req, res) => {
    try {
      return res.status(200).json({ message: `working ` });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessage = error.errors.map(err => err.message).join(", ");
        return res.status(400).json({ error: errorMessage });
      }
      return res.status(500).json({ error: "Internal server error" });
    }
  })
  .get(async (req, res) => {
    try {
      const validatedQuery = usersApiShema.parse(req.query);
      const pages: number[] = [];
      for (let i = 1; i <= Math.ceil(users.length / 10); i++) {
        pages.push(i);
      }

      const { data } = validatedQuery;

      const page = Number(data);
      const usersToReturn = users.slice(page * 10 - 10, page * 10);

      return res
        .status(200)
        .json({ message: `working ${data}!`, users: usersToReturn, pages: pages });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessage = error.errors.map(err => err.message).join(", ");
        return res.status(400).json({ error: errorMessage });
      }

      return res.status(500).json({ error: "Internal server error" });
    }
  });

export default handler;
