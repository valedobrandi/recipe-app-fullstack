export async function getAudioTranslated(Bearer: Headers, taskId: string) {
  const getAudioText = await fetch(`http://techhk.aoscdn.com/api/tasks/audio/recognition/${taskId}`, {
    method: 'GET',
    headers: Bearer,
  });
  const { data } = await getAudioText.json();
  return data;
}

export async function getAudioFile(audioFile) {
  const headers = new Headers();
  headers.append('X-API-KEY', '');

  const requestOptions: RequestInit = {
    method: 'POST',
    headers,
    body: audioFile,
    redirect: 'follow',
  };

  const sendAudioFile = await fetch('http://techhk.aoscdn.com/api/tasks/audio/recognition', requestOptions);
  const response = await sendAudioFile.json();
  console.log(response);

  // const response = await getAudioTranslated(token, data.task_id);
  // return response;
}

export default getAudioFile;
