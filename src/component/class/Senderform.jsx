import axios from 'axios'
const Senderform = async (props) => {
  const postData = new FormData();
  postData.append('nama', props.nama);
  postData.append('email', props.email);
  try {
    // Make the POST request using Axios
    const response = await axios.post(process.env.REACT_APP_API_URL+"daftarmember",
      postData
    );
    return response.data; // Return the response data
  } catch (error) {
    throw error; // Throw the error to be caught and handled in js1.js
  }
}

export {Senderform}