import { rest } from "msw";
import { tokenMock } from "./mocks/userMocks";
import path from "../routers/paths/paths";
import { pictureTotalData, picturesMock } from "./mocks/picturesMock";
import {
  actionMessage,
  feedbackMessages,
} from "../utils/feedbackMessages/feedbackMessages";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.post(`${apiUrl}${path.user}${path.login}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(tokenMock));
  }),

  rest.get(`${apiUrl}${path.pictures}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(pictureTotalData));
  }),

  rest.delete(`${apiUrl}${path.pictures}/:id`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(`${feedbackMessages.isOk} ${actionMessage.deleted}`)
    );
  }),

  rest.post(`${apiUrl}${path.pictures}`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ picture: picturesMock.pictures[0] })
    );
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}${path.user}${path.login}`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.get(`${apiUrl}${path.pictures}`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.delete(`${apiUrl}${path.pictures}/:id`, (_req, res, ctx) => {
    return res(
      ctx.status(404),
      ctx.json(`${feedbackMessages.isNotOk} ${actionMessage.deleted}`)
    );
  }),

  rest.post(`${apiUrl}${path.pictures}`, (_req, res, ctx) => {
    return res(ctx.status(404));
  }),
];
