import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/service/accounts.service';
import { VoiceRecognitionService } from 'src/app/service/voice-recognition.service';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit, OnDestroy {

  text = '';
  backendResponse = ''
;
  constructor(private voiceService : VoiceRecognitionService,
              private accountsService: AccountsService) {
    this.voiceService.init();
    this.subscribeVoiceService();
  }

  ngOnInit(): void {
  }

  submitInput(){
    this.accountsService.getAllClients(this.text).subscribe(response => {
      this.backendResponse = JSON.stringify(response);
    });
  }
  startVoiceService(){
    this.voiceService.start();
    this.voiceService.recognition.addEventListener('end', (condition: any) => {
      this.accountsService.getAllClients(this.text).subscribe(response => {
        this.backendResponse = JSON.stringify(response);
      });
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
