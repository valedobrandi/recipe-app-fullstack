export default function AddRecipe() {

let myHeaders = new Headers();
myHeaders.append("X-API-KEY", import.meta.env.VITE_SPEECH_API);

let formdata = new FormData();
formdata.append("file", "file");

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("http://techhk.aoscdn.com/api/tasks/audio/recognition", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    return (

    )
}