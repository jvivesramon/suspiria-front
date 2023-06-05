import { ActionMessageProps, FeedbackMessagesProps } from "./types";

export const feedbackMessages: FeedbackMessagesProps = {
  isOk: "Your new story has been succesfully ",
  isNotOk: "Your story couldn't been ",
  isLogged: "Succesfully logged in",
  errorLoggin: "Username or password don't match",
  loggedOut: "¡You've been logged out! See you soon",
};

export const actionMessage: ActionMessageProps = {
  created: "created",
  updated: "updated",
  deleted: "deleted",
};
