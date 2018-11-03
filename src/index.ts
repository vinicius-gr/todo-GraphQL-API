import app from "./app";

const port = process.env.PORT || 3000;

app.listen(port, err => {
  if (err) {
    return console.log(err);
  }
  return console.log(
    `The server is listening on http://localhost:${port} \n \n Query the tasks in http://localhost:${port}/tasks`
  );
});
