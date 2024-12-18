import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";

const GET_URL = BASE_URL + "todos";
const POST_URL = BASE_URL + "todos";
const DELETE_URL = BASE_URL + "todos/";
const UPDATE_URL = (id) => BASE_URL + "todos/" + id + "/update_completed";

export const create_todo = async ({ todo_name }) => {
  const response = await axios.post(POST_URL, {
    todo_name: todo_name,
    completed: false,
  });

  return response.data;
};

export const get_todos = async () => {
  const response = await axios.get(GET_URL);
  return response.data;
};

export const update_todo = async ({ id, completed }) => {
  console.log(id);
  const response = await axios.patch(UPDATE_URL(id.toString()), {
    completed: completed,
  });
  return response.data;
};

export const delete_todo = async ({ id }) => {
  const response = await axios.delete(DELETE_URL + id.toString());
  return response.data;
};
