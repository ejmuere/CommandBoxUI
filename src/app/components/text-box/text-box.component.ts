import { Component, OnDestroy, OnInit } from '@angular/core';
import { VoiceRecognitionService } from 'src/app/service/voice-recognition.service';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit, OnDestroy {

  text = '';
  backendResponse = ''
;
  constructor(private voiceService : VoiceRecognitionService) {
    this.voiceService.init();
    this.subscribeVoiceService();
  }

  ngOnInit(): void {
  }

  startVoiceService(){
    this.voiceService.start();
    this.voiceService.recognition.addEventListener('end', (condition: any) => {
      if (this.text === 'hello' || this.text === 'goodbye' || this.text === 'transfer') {
        this.backendResponse = this.text;
      }
    });
  }

  subscribeVoiceService() {
    this.voiceService.recognition.addEventListener('result', (e:any) => {
      const transcript = Array.from(e.results)
        .map((result:any) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.text = transcript;
      console.log(transcript);
    });
  }

  ngOnDestroy(): void {
    // this.voiceService.recognition.unsubscribe();
  }


}
