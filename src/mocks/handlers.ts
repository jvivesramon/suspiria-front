import { rest } from "msw";
import { tokenMock } from "./mocks/userMocks";
import path from "../routers/paths/paths";
import { picturesMock } from "./mocks/picturesMock";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.post(`${apiUrl}${path.user}${path.login}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(tokenMock));
  }),

  rest.get(`${apiUrl}${path.pictures}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(picturesMock));
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}${path.user}${path.login}`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.get(`${apiUrl}${path.pictures}`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),
];
