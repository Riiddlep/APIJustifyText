## APIJustifyText

Here is an API that allows to justify a text.

## Description

This API allows you to justify a text, using a unique token obtained by sending a valid email.
This token allows the user to justify up to 80 000 words per day

## Installation

You can clone the repository, once done, with your terminal at the root of the project, you type:

```
npm install
```

You must create an .env file at the root of the project and fill it as for the .envexample

Once done, you can type in the terminal:

```
npm run dev
```

## Usage

You will see a text like "Justify API is listening on port 3000".

Your API will be accessible on http://localhost:3000/api
The path http://localhost:3000/api/auth to log in
or http://localhost:3000/api/justify to justify the text
