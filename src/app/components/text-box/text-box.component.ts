import { Component, OnDestroy, OnInit } from '@angular/core';
import { ControllerRequest } from 'src/app/model/request';
import { ResponseBody } from 'src/app/model/response';
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
  client_name = '';
  account_type = '';

  constructor(private voiceService : VoiceRecognitionService,
              private accountsService: AccountsService) {
    this.voiceService.init();
    this.subscribeVoiceService();
  }

  ngOnInit(): void {
  }

  submitInput(){  
    this.accountsService.getControllerResponse(this.text).subscribe(response => { 
      this.handleResponse(response);
    });
   
  }
  startVoiceService(){
    this.isRecordingVoice = true;
    this.voiceService.start();
    this.voiceService.recognition.addEventListener('end', (condition: any) => {
      this.isRecordingVoice = false;
      this.accountsService.getControllerResponse(this.text).subscribe(response => { 
        this.handleResponse(response);
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

  handleResponse(response:ResponseBody){
    //change to response
    switch(response.actionType) {
      case 'show customer profile': {
        window.open('http://localhost:4200/ClientManagement','','popup=true')
         break;
      }
      case "show_balance": {
         this.showBalance = true;
         const person_name = response.data.entityList.filter( entity =>  entity.entity==='PERSON' && entity.extractor==='SpacyEntityExtractor')[0].value;
         const account_type = response.data.entityList.filter( entity =>  entity.entity==='account_type')[0].value;
         this.client_name = person_name;
         this.account_type = account_type;
         break;
      }
      case "show_customer_profile": {
        const person_name = response.data.entityList.filter( entity =>  entity.entity==='PERSON' && entity.extractor==='SpacyEntityExtractor')[0].value;  
        const urltoOpen = 'http://localhost:4200/ClientManagement?person_name='+person_name;
        console.log("url to open "+urltoOpen);
        window.open(urltoOpen,'','popup=true')
        break;
     }
      case "transfer_funds": {  
        const person_name = response.data.entityList.filter( entity =>  entity.entity==='PERSON' && entity.extractor==='SpacyEntityExtractor')[0].value;
        const target_account_type = response.data.entityList.filter( entity =>  entity.entity==='account_type' && entity.role==='target')[0].value;
        const source_account_type = response.data.entityList.filter( entity =>  entity.entity==='account_type' && entity.role==='source')[0].value;
        const amount = response.data.entityList.filter( entity =>  entity.entity === 'Amount')[0].value;
        const urltoOpen = 'http://localhost:4200/MoneyMarket?person_name='+person_name+"&target_account_type="+target_account_type+"&source_account_type="+source_account_type+"&amount="+amount;
        console.log("url to open "+urltoOpen);
        window.open(urltoOpen,'','popup=true')
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
