import { Button } from "@material-tailwind/react";
import { useRef, useState } from "react";
import { AudioRecorder } from "react-audio-voice-recorder";

export default function AddRecipe() {
  const [recipeText, setRecipeText] = useState('')
  const [disabled, setDisabled] = useState(true)
  const recordedBlob = useRef<Blob>()
  

  function getAudio(audio: Blob) {
    console.log(audio);
    
    const audioFileMeta = new File([audio], "recording.wav", {
      type: audio.type,
      lastModified: Date.now(),
    });
    recordedBlob.current = audioFileMeta
    setDisabled(false)
    console.log(audioFileMeta); 
  }

async function fetchAudioToText() {
  if (!recordedBlob.current ||  !import.meta.env.VITE_SPEECH_API) return;
  const body = new FormData();
  body.append('file', recordedBlob.current);

  const sendAudioFile = await fetch(`http://localhost:3001/meals/uploads/audio`, {
    method: 'POST',
    body,
  });

  console.log(sendAudioFile);

  
}


  return (
    <div>
      <h1>New Recipe</h1>
      <div className="flex flex-col items-center justify-center gap-8">
        <h4>Record</h4>
        <AudioRecorder
          onRecordingComplete={getAudio}
          audioTrackConstraints={{
            noiseSuppression: true,
            echoCancellation: true,
          }}
        />
        <Button
          size="lg"
          loading={false}
          disabled={disabled}
          onClick={() => fetchAudioToText()} color="green">
          add recipe
        </Button>
      </div>
    </div>
  )
}