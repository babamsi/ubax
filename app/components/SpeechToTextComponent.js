import React, { useState, useEffect, useRef } from "react";
import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import { IconButton } from "./button";
import SendWhiteIcon from "../icons/send-white.svg";
import styles from "./chat.module.scss";

const SPEECH_KEY = "dbe673c6063847ca9f3ff1fcb8961429";
const SPEECH_REGION = "eastus";

export function SpeechToTextComponent({ parentCallback }) {
  const [isListening, setIsListening] = useState(false);
  const [trig, setTrig] = useState(false);
  const speechConfig = useRef(null);
  const audioConfig = useRef(null);
  const recognizer = useRef(null);

  const [myTranscript, setMyTranscript] = useState("");
  const [recognizingTranscript, setRecTranscript] = useState("");

  useEffect(() => {
    speechConfig.current = sdk.SpeechConfig.fromSubscription(
      SPEECH_KEY,
      SPEECH_REGION,
    );
    speechConfig.current.speechRecognitionLanguage = "so-SO";

    audioConfig.current = sdk.AudioConfig.fromDefaultMicrophoneInput();
    recognizer.current = new sdk.SpeechRecognizer(
      speechConfig.current,
      audioConfig.current,
    );

    const processRecognizedTranscript = (event) => {
      const result = event.result;
      console.log("Recognition result:", result);

      if (result.reason === sdk.ResultReason.RecognizedSpeech) {
        const transcript = result.text;
        console.log("Transcript: -->", transcript);
        sessionStorage.setItem("transcript", transcript);

        // Call a function to process the transcript as needed

        setMyTranscript(transcript);
      }
    };

    const processRecognizingTranscript = (event) => {
      const result = event.result;
      console.log("Recognition result:", result);
      if (result.reason === sdk.ResultReason.RecognizingSpeech) {
        const transcript = result.text;
        console.log("Transcript: -->", transcript);
        // Call a function to process the transcript as needed
        onRecognised(transcript);
        setRecTranscript(transcript);
      }
    };

    recognizer.current.recognized = (s, ev) => processRecognizedTranscript(ev);
    recognizer.current.recognizing = (s, ev) =>
      processRecognizingTranscript(ev);

    // recognizer.current.startContinuousRecognitionAsync(() => {
    //   console.log('Speech recognition started.');
    //   setIsListening(true);
    // });

    return () => {
      recognizer.current.stopContinuousRecognitionAsync(() => {
        setIsListening(false);
      });
    };
  }, []);

  const pauseListening = () => {
    setIsListening(false);
    recognizer.current.stopContinuousRecognitionAsync();
    console.log("Paused listening.");
  };

  const resumeListening = () => {
    if (!isListening) {
      setIsListening(true);
      recognizer.current.startContinuousRecognitionAsync(() => {
        console.log("Resumed listening...");
      });
    }
  };

  const stopListening = () => {
    setIsListening(false);
    recognizer.current.stopContinuousRecognitionAsync(() => {
      console.log("Speech recognition stopped.");
    });
  };
  const onRecognised = (trans) => {
    parentCallback(trans);
  };

  return (
    <div>
      {/* <button onClick={pauseListening}>Pause Listening</button>
      <button onClick={resumeListening}>Resume Listening</button>
      <button onClick={stopListening}>Stop Listening</button>

      <div>
        <div>
            Recognizing Transcript : {recognizingTranscript}
        </div>

        <div>
            RecognizedTranscript : {myTranscript}
        </div>
      </div> */}
      <div className={styles["pulse-ring"]}></div>
      <IconButton
        icon={<SendWhiteIcon />}
        text={!isListening ? "Record" : "Recording"}
        className={styles["chat-input-send"]}
        type={!isListening ? "primary" : "danger"}
        onClick={() => {
          if (isListening) {
            stopListening();
            //  onRecognised()
          } else {
            return resumeListening();
          }
        }}
      />
      {/* <i className="fa fa-microphone" aria-hidden="true"></i> */}
    </div>
  );
}
