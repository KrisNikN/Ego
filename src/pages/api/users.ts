import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { ApiResponseBase } from "types";

export interface UsersRequest extends NextApiRequest {
  body: { action: string };
}

export interface UsersResponse {
  message: `working  ${string}!`;
}

const handler = nc<UsersRequest, NextApiResponse<ApiResponseBase<UsersResponse>>>({
  onError: (err, req, res, next) => {
    console.log(err.message);

    res.status(err.statusCode || 500).json({ error: err.message });
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page not found");
  }
}).post(async (req, res) => {
  const { action } = req.body;

  return res.status(200).json({ message: `working  ${action}!` });
});

export default handler;
