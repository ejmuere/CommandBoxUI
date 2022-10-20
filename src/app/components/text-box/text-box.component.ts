import { Component, OnInit } from '@angular/core';
import { VoiceRecognitionService } from 'src/app/service/voice-recognition.service';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {

  text = '';

  constructor(public service : VoiceRecognitionService) {
    this.service.init()
  }

  ngOnInit(): void {
  }

  startService(){
    this.service.start()
  }

}
