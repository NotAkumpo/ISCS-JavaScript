import { Refresher } from "./refresh.js";
import { ThreeDAssets } from "./3dassets.js";
import { Music } from "./music.js";
import { Animations } from "./animations.js";


const searchbutton = document.querySelector('#searchbutton')
const searchbar = document.querySelector('#searchbar')
const point = document.querySelector('#point')
const definition = document.querySelector('#definition')
const audio = document.querySelector('#song');

const threeDAsset = new ThreeDAssets()
const music = new Music(audio)


window.addEventListener('load', () => {
    const word = Refresher.getWord()
    if (word){
      searchbar.value = word
      searchWord(word)
    }
})

searchbutton.addEventListener('click', evt => {
    const word = searchbar.value.trim();
    if (word) {
        Refresher.setWord(word)
        searchWord(word)
        searchbar.value = ''
        music.playAudio()
    }
})

function searchWord(word){
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(res => {
    return res.json();
      }).then (res => {
        if (res.title === 'No Definitions Found'){
          const result = document.createElement("p");
          result.textContent = "Word does not exist"
          definition.appendChild(result)
        }
        else {
          definition.innerHTML = ''
          const wordTitle = document.createElement("h3");
          wordTitle.textContent = word
          definition.appendChild(wordTitle)
          showDefinitions(res)
        }
    })
}

function showDefinitions(data){
    data.forEach(dfns => {
      const psos = dfns.meanings;
      
      psos.forEach(pos => {
      const dfn = document.createElement('div');
      definition.appendChild(dfn)
      Animations.animateHeaderElement(dfn)

      const postype = document.createElement('div');
      postype.textContent = `Part of speech: ${pos.partOfSpeech}`;
      dfn.appendChild(postype);
      Animations.animateHeaderElement(postype)

      pos.definitions.forEach((defn, index) => {
          const dfnentry = document.createElement('p');
          dfnentry.textContent = `${index + 1}. ${defn.definition}`;
          dfn.appendChild(dfnentry);
          Animations.animateElement(dfnentry)
      })
    });
  });
}