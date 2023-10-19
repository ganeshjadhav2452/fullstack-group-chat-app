import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './VoiceToTextConverter.css'
import { useDispatch } from 'react-redux';
import { setTranscript } from '../../reduxStore/slices/transcriptSlice';
const VoiceToTextConverter = () => {
    const dispatch = useDispatch()
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
const transcriptChangeHandler = (transcript)=>{
    dispatch(setTranscript(transcript))
    console.log('dispatcch is being ccallec')
}
  return (
    <div className='voice-parent'>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
     <p style={{display:'none'}} onChange={transcriptChangeHandler(transcript)}>Converted Text: {transcript}</p>
    </div>
  );
};
export default VoiceToTextConverter;