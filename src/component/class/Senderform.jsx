import axios from 'axios'
const Senderform = async (props) => {
  const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content
  const postData = new FormData();
  postData.append('nama', props.nama);
  postData.append('email', props.email);
  postData.append('gender', props.gender);
  postData.append('nohp', props.value);
  postData.append('date', props.tgl);
  postData.append('key',"adexganteng");
  try {
    // Make the POST request using Axios
    const response = await axios.post(process.env.REACT_APP_API_URL+"apilib/apimember/reg-create",
      postData,{
      headers: csrfToken,
    }
    );
    return response.data; // Return the response data
  } catch (error) {
    throw error; // Throw the error to be caught and handled in js1.js
  }
}

export {Senderform}