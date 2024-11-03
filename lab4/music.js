export class Music {
    constructor(audio){
        this.audio = audio
        this.audio.currentTime = 53;
    }

    static playAudio(){
        this.audio.play()
          setTimeout(() => {
              audio.pause(); 
              audio.currentTime = 53; } 
              , 5000);
      }
}