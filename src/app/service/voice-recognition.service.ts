import { Injectable, Input } from '@angular/core';


declare var webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root'
})
export class VoiceRecognitionService {
  recognition =  new webkitSpeechRecognition();
<<<<<<< HEAD
=======

  tempWords: any;
>>>>>>> 97f4a32b9867edaaa091de3841d32c5cae314d39

  constructor() { }

  init() {
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US'; 
  }

  start() {
    this.recognition.start();
    console.log("Speech recognition started")
  }
<<<<<<< HEAD
=======

>>>>>>> 97f4a32b9867edaaa091de3841d32c5cae314d39
}
