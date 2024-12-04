export class Music {
    constructor(audio){
        this.audio = audio
        this.audio.currentTime = 53;
    }

    playAudio(){
        this.audio.play()
          setTimeout(() => {
              this.audio.pause(); 
              this.audio.currentTime = 53; } 
              , 5000);
      }
}