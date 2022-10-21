import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/service/accounts.service';
import { VoiceRecognitionService } from 'src/app/service/voice-recognition.service';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit{

  text = '';
  backendResponse = ''
  isRecordingVoice = false;
  showBalance = false;
  windowOpen = false;
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
    this.isRecordingVoice = true;
    this.voiceService.start();
    this.voiceService.recognition.addEventListener('end', (condition: any) => {
      this.isRecordingVoice = false;
      this.handleResponse(this.text);
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

  handleResponse(text:any){
    //change to response
    switch(text) {
      case 'show customer profile': {
        window.open('http://localhost:4200/ClientManagement',)
         break;
      }
      case "show balance": {
         this.showBalance = true
         break;
      }
      case "transfer funds": {
        window.open('http://localhost:4200/MoneyMarket',)
        break;
      }
     case "add_notes": {
      //statements;
      break;
     }
    case "call_customer": {
      //statements;
      break;
    }
  default: {
      //statements;
      break;
  }
  //response action types
  //show_customer_profile
  // show_balance
  // transfer_funds
  // add_notes
  // call_customer
  }

  // ngOnDestroy(): void {
  //   // this.voiceService.recognition.unsubscribe();
  // };


}
}
