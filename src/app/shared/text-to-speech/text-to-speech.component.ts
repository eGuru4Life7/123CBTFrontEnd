import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Speech from 'speak-tts';
import * as googleTTS from 'google-tts-api';
@Component({
  selector: 'app-text-to-speech',
  templateUrl: './text-to-speech.component.html',
  styleUrls: ['./text-to-speech.component.scss']
})
export class TextToSpeechComponent implements OnInit {
  @Input() html: any = null;
  result = '';
  speech: any;
  speechData: any;
  isPlay: Boolean = true;
  isPaused: Boolean = false;
  text: any;
  constructor(private translate: TranslateService) {


  }

  ngOnInit(): void {
    this.initSpeech();
  }

  stop() {
    this.speech?.cancel()
  }

  async initSpeech() {
    this.speech = new Speech() // will throw an exception if not browser supported
    if (this.speech.hasBrowserSupport()) { // returns a boolean
      await this.speech
        .init({
          volume: 1,
          lang: 'en-GB',
          rate: 1,
          pitch: 1,
          voice: 'Google UK English Male',
          splitSentences: true,
          listeners: {
            onvoiceschanged: (voices) => {
              console.log('Event voiceschanged', voices);
            },
          },
        }).then(async (data) => {
          console.log("Speech is ready, voices are available", data)
          this.speechData = data;
        }).catch(e => {
          console.error("An error occured while initializing : ", e)
        })
    }
  }


  // ngOnChanges(changes: SimpleChanges): void {
  //   this.speech?.cancel()
  // }

  async start() {
    this.stop();
    if (this.isPlay) {
      this.isPlay = !this.isPlay;
      let Languages = [
        { lang: 'en-US', voice: 'Google US English', selectedLang: 'en' },
        { lang: 'en-ES', voice: 'Google español', selectedLang: 'spa' },
        { lang: 'zh-CN', voice: 'Google 普通话（中国大陆）', selectedLang: 'ch' },
        { lang: 'hi-IN', voice: 'Google हिन्दी', selectedLang: 'hindi' },
        { lang: 'hi-IN', voice: 'Google हिन्दी', selectedLang: 'gm' },
        { lang: 'hi-IN', voice: 'Google हिन्दी', selectedLang: 'ur' },
        { lang: 'ar-SA', voice: 'Google US English', selectedLang: 'ar' }
      ];
      let currentlang = this.translate.currentLang;
      let selectedlang: any = {};
      selectedlang = Languages.filter(d => d.selectedLang == currentlang)[0];
      this.speech.setLanguage(selectedlang.lang);
      let voice =this.speechData.voices.forEach((d:SpeechSynthesisVoice)=>
      {
        if(d.lang == selectedlang.lang){
          this.speech.setVoice(d.name);
        }
      })
      
      var temporalDivElement = document.createElement("div");
      temporalDivElement.innerHTML = this.html;
      this.result = temporalDivElement.textContent || temporalDivElement.innerText || "";

      await this.speech.speak({
        text: this.result,
      }).then((res: any) => {
        console.log(res)
      }).catch(e => {
        this.isPlay = false;
        console.error("An error occurred :", e)
      })

    } 
  }

  pauseResume() {
    this.isPaused = !this.isPaused;
    if(this.isPaused){
    console.log(this.speech.paused());
      this.speech[this.speech.paused() ? 'resume' : 'pause']();
    }else{
      this.speech[this.speech.resume() ? 'pause' : 'resume']();
    }
    //this.isPlay = !this.isPlay;
  }

  setLanguage(i) {
    console.log(i);
    console.log(this.speechData.voices[i].lang + this.speechData.voices[i].name);
    this.speech.setLanguage(this.speechData.voices[i].lang);
    this.speech.setVoice(this.speechData.voices[i].name);
  }


  isSpeak(){
    
    this.start();

  }
  // speech(): void {
  //   // 1. get audio URL
  //   const url = googleTTS.getAudioUrl('Hello World', { lang: 'en-GB' });
  //   console.log({ url }); // https://translate.google.com/translate_tts?...

  //   // 2. get base64 text
  //   googleTTS
  //     .getAudioBase64('Hello World', { lang: 'en-GB', slow: false,
  // host: 'https://translate.google.com', })
  //     .then((base64) => {
  //       console.log({ base64 });
  //     })
  //     .catch(console.error);
  // }

}
