import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { GestureController } from '@ionic/angular';
import { DetectedService } from '@services/detected.service';
import { VoiceRecorder } from 'capacitor-voice-recorder';
import { RecordingData } from './definitions';

@Component({
  selector: 'listening',
  templateUrl: './listening.component.html',
  styleUrls: ['./listening.component.scss'],
})
export class ListeningComponent implements OnInit, AfterViewInit {

 public recording = false;
 public storedFileNames = [];
 public durationDisplay = '';
 public duration= 0;

 stoped = false;
 public routeHome: string ='../home';

@ViewChild('recordbtn', {read: ElementRef}) recordbtn: ElementRef;

  constructor( 
    private gestureCtrl: GestureController,
    private detectedService: DetectedService) { }

  ngOnInit():void {
    this.loadFiles();
    VoiceRecorder.requestAudioRecordingPermission();
  }




  ngAfterViewInit(){
/*     const longpress = this.gestureCtrl.create({
el: this.recordbtn.nativeElement,
threshold: 0,
gestureName: 'long-press',
onStart: ev =>{
Haptics.impact({ style: ImpactStyle.Light})
this.startRecording();
this.calculatedDuration();
},
onEnd: ev =>{
Haptics.impact({ style: ImpactStyle.Light})
this.stopRecording();
}
    }, true);
    longpress.enable(); */
    this.startRecording();
  }





calculatedDuration(){
  if(!this.recording){
    this.duration=0;
    this.durationDisplay = '';
    return;
  }
  this.duration += 1;
  const minutes = Math.floor(this.duration/60);
  const seconds = (this.duration%60).toString().padStart(2, '0');
  this.durationDisplay = `${minutes}:${seconds}`
  setTimeout(() => {
    this.calculatedDuration();
  }, 1000);

  if(this.duration === 5){
    this.stopRecording();
  }
}


  async loadFiles(){
    Filesystem.readdir({
      path: '',
      directory: Directory.Data
    }).then(result => {
        this.storedFileNames = result.files;
      }
    )
  }

  startRecording(){
  /*   if(this.recording){
      return
    } */
    this.recording = true;
    this.calculatedDuration();
    VoiceRecorder.startRecording();
  }

  stopRecording(){
    if(!this.recording){
      return
    }
    VoiceRecorder.stopRecording().then(async(result:RecordingData)=>{
    this.recording = false;
      if(result.value && result.value.recordDataBase64){
        const recordData = result.value.recordDataBase64;
        const fileName = new Date().getTime()+ '.wav';
        await Filesystem.writeFile({
          path: fileName,
          directory: Directory.Data,
          data: recordData
        });
        this.loadFiles();

        
        this.detectedService.detectedSong(result.value.recordDataBase64)
        .subscribe(data => { console.log(data)
        })    
      }
    })
  }

  
  
  async playFile(fileName){
    const audioFile = await Filesystem.readFile({
       path: fileName,
       directory: Directory.Data
    })
    const base64Sound = audioFile.data;
    const audioRef = new Audio(`data:audio/aac;base64,${base64Sound}`)
    audioRef.oncanplaythrough=()=> audioRef.play();
    audioRef.load();
  }

async deleteRecording(fileName){
  await Filesystem.deleteFile({
    directory: Directory.Data,
    path:fileName
  });
  this.loadFiles();
}
}