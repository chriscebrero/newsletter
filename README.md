# Email Signup Project

## Back-End

The back-end server is built with Node.js and Express. It provides REST API endpoints to handle email sign-up subscription and unsubscription requests. The server also includes:

- **Rate Limiting**: Limits the number of requests an IP can make within a specified time frame to prevent abuse.
- **In-Memory Cache**: Caches the results of risk assessments to avoid repeated evaluations and unnecessary API calls.
- **Debounce Mechanism**: Prevents rapid repeated requests for the same email address.

### Endpoints

- `POST /signup`: Accepts an email address for sign-up.
- `DELETE /signup`: Accepts an email address for unsubscription.

## Front-End

The front-end application is built using React. Users can enter their email addresses and subscribe or unsubscribe from the newsletter.

### Features

- **Debounced Input**: Prevents multiple rapid submissions from the UI.
- **Clear Feedback**: Provides users with feedback messages based on their actions. Handles cases such as invalid format, invalid emails, etc.

## Efficiency/Optimization Task

For the optimization task, the following measures were implemented:

1. **Rate Limiting**: Used `express-rate-limit` to limit the number of requests from a single IP address.
2. **In-Memory Cache**: Cached risk assessment results to prevent repeated evaluations and API calls for the same email.
3. **Debounce Mechanism**: Added a debounce mechanism on both the server and client sides to handle rapid repeated requests gracefully.

## Conversations with LLM

Here are the shareable links to the conversations had with the LLM during the development process:

- [Conversation 1](https://chatgpt.com/c/7bb72f67-4eec-4ebd-ad85-999eff156aa8)
