const template = document.createElement('template');
template.innerHTML = `
<style>
  :host{
    height: 60px;
    display: flex;
    flex-direction: row;
  }
  .headerButton{
    height: 100%;
    width: 60px;
    margin: 0 15px;
    cursor: pointer;
  }
  .headerButton:hover{
    opacity: 4.0;
  }
  .headerButton:active{
    opacity: 0.6;
  }
  .nameContainer{
    flex: auto;
    height: 100%;
    padding: 5px 0;
    display: flex;
    flex-direction: row;
    justify-content: left;
  }

  .nameContainer .userName{
    height: 100%;
    padding-top: 5px;
  }
  .userName .name{
    font-size: 25px;
    color: #fbfbff;
  }
  .userName .status{
    font-size: 15px;
    color: #fbfbff;
  }

  .backButton{
    background: url(https://image.flaticon.com/icons/png/512/93/93634.png);
    height: 100%;
    background-size : 100% 100%;
    opacity: 0.25;
    transition-duration: 0.15s;
  }
  
  .searchButton{
    background: url(https://cdn0.iconfinder.com/data/icons/it-hardware/100/search-512.png);
    height: 100%;
    background-size : 100% 100%;
 
    opacity: 0.25;
    transition-duration: 0.15s;    
  }

  .optionsButton{
    background: url(https://cdn4.iconfinder.com/data/icons/game-interface-outline/100/objects-10-512.png);
    background-size : 100% 100%;
    height: 100%;
    opacity: 0.25;
    transition-duration: 0.15s;
  }
  
</style>
<div class="headerButton backButton"></div>
<div class="nameContainer">
  <div class="userName">
    <div class="name">Dyadya Rodya</div>
    <div class="status">online</div>
    
  </div>
  
</div>
<div class="headerButton searchButton"></div>
<div class="headerButton optionsButton"></div>
`;

class DialogInfo extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$backButton = this.shadowRoot.querySelector('.backButton');
    this.$searchButton = this.shadowRoot.querySelector('.searchButton');
    this.$optionButton = this.shadowRoot.querySelector('.optionsButton');

    this.$backButton.addEventListener('click', this.backButton.bind(this));
    this.$searchButton.addEventListener('click', this.searchButton.bind(this));
    this.$optionButton.addEventListener('click', this.optionButton.bind(this));
  }

  backButton() {
    this.dispatchEvent(new Event('clickBackButton'));
  }

  searchButton() {
    this.dispatchEvent(new Event('clickSearchButton'));
  }

  optionButton() {
    this.dispatchEvent(new Event('clickOptionButton'));
  }
}

customElements.define('dialog-info', DialogInfo);
