export class Refresher {

    static getWord(){
        return localStorage.getItem('word');
    }

    static setWord(word){
        localStorage.setItem('word', word)
    }

}