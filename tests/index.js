const axios = require("axios");

const fetchTasks = async () => {
  try {
    const response = await axios.get("http://192.168.1.191:1337/api/tasks");
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

fetchTasks();
