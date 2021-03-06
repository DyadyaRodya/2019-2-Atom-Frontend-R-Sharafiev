const template = document.createElement('template');
template.innerHTML = `
<style>
  :host{
    width: 100%;
    height: 100%;
    background-color: #c4eff2;
    background-size: 50px;
    display: flex;
    flex-direction: column;
  }

  .header{
    background-color: #FB8C01;
    width: 100%;
    z-index: 1;
    box-shadow: 0 0 2px 0 #151716;
  }

  .content{
    width: 100%;
    display: flex;
    flex: auto;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    align-content: flex-end;
    z-index: 0;
    overflow-y: auto;
  }

  ::-webkit-scrollbar {
    width: 0px;
  }

  .messageWrap{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-end;
  }

  message-box.newBox{
    animation-name: messageAppearing;
    animation-duration: 1s;
  }

  @keyframes messageAppearing{
    from{
      max-height: 0;
      opacity: 0;
      padding 0 0 0 0;
    }
    to{
      max-height: 100%;
      opacity: 1;
      padding: 0 10px 20px 10px;
    }
  }

  message-box{
    box-sizing: border-box;
    width: 100%;
    padding: 0 10px 20px 10px;
  }

  .bottom{
    width: 100%;
    z-index: 1;
  }
</style>
<div class="header">
  <dialog-info></dialog-info>
</div>
<div class="content">
  <div class="messageWrap"></div>
</div>
<div class="bottom">
  <form-input placeholder="Введите сообщение"></form-input>
</div>
`;

class MessageForm extends HTMLElement {
  constructor() {
    super();

    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$input = this.shadowRoot.querySelector('form-input');
    this.$messages = this.shadowRoot.querySelector('.messageWrap');

    this.$header = this.shadowRoot.querySelector('dialog-info');
  }

  renderPrevMessages() {
    const dstr = localStorage.getItem(`dialogID_${this.dialogID}`);
    if (dstr == null) { return false; }
    const dialogInfo = JSON.parse(dstr);
    if (dialogInfo == null) { return false; }

    this.$messages.innerHTML = '';

    for (const [messageID, message] of Object.entries(dialogInfo)) {
      this.renderMessage(messageID, message);
    }
  }

  renderMessage(messageID, messageBox, newMessage = false) {
    let elem = document.createElement('message-box');
    elem = this.$messages.appendChild(elem);
    for (const [attr, value] of Object.entries(messageBox)) {
      elem.setAttribute(attr.toLowerCase(), value);
    }
    if (newMessage) { elem.classList.add('newBox'); }
  }

  static get observedAttributes() {
    return ['dialogid'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.dialogID = newValue;
  }
}

customElements.define('message-form', MessageForm);
