const template = document.createElement('template');
template.innerHTML = `
<style>
  :host{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: flex-end;
    position: relative;
    background-color: #c4eff2;
  }
  .header{
    background-color: #FB8C01;
    width: 100%;
    height: 60px;
    z-index: 1;
    box-shadow: 0 0 2px 0 #151716;
    flex-shrink: 0;
    padding-left: 15px;
  }
  .header .hamburger{
    width: 60px;
    height: 100%;
    display: inline-block;
    margin-right: 20px;
    background: url(https://cdn1.iconfinder.com/data/icons/ui-22/24/502-512.png) no-repeat;
    background-size: 100%;
    float: left;
    opacity: 0.25;
    transition-duration: 0.15s;
  }
  .header .hamburger:hover{
    opacity: 4.0;
  }
  .header .hamburger:active{
    opacity: 0.6;
  }
  .header .formName{
    line-height: 60px;
    float: left;
    color: #FFFFFF;
 
  }
  .content{
    flex: auto;
    overflow-y: auto;
    z-index: 0;
  }
  .noneMessages{
    width: 100%;
    text-align: center;
    padding-top: 50%;
    color: #4C4C4D;
  }
  .dialogWrap{
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: auto; 
  }
  .buttonNew{
    position: absolute;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    opacity: 0.75;
    background-color: #002aff;
    border-radius: 30px;
    transition-duration: 0.4s;
    cursor: pointer;
  }
  .buttonNew:hover{
    opacity: 1.0;
    animation: none;
  }
  .pen{
    background: url(https://cdn0.iconfinder.com/data/icons/email-7/100/Minio_Email_Bold-82-512.png) no-repeat center center;
    background-size: 30px;
    width: 30px;
    height: 60px;
    margin: auto;
  }
  dialog-model{
    display: block;
    overflow: hidden;
  }
  
</style>
<div class="header">
  <div class="hamburger"></div>
  <a class="formName">Сообщения</a>
</div>
<div class="content">
  <div class="noneMessages">Сообщений пока нет (</div>
</div>
<div class="buttonNew">
  <div class="pen"></div>
</div>
`;

class ChatList extends HTMLElement {
  constructor() {
    super();

    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$content = this.shadowRoot.querySelector('.content');
  }

  dialogUpdate(dialogID, dialogInfo) {
    const elem = this.$content.querySelector(`dialog-model[dialogid="${dialogID}"]`);
    this.$content.insertBefore(elem, this.$content.firstChild);
    elem.dialogRender(dialogInfo);
  }

  renderDialog(dialogID, dialogInfo, intoFirst = true) {
    let elem = document.createElement('dialog-model');

    if (intoFirst) {
      elem = this.$content.insertBefore(elem, this.$content.firstChild);
    } else { elem = this.$content.appendChild(elem); }

    elem.setAttribute('dialogid', dialogID);
    elem.dialogRender(dialogInfo);
  }

  dialogAvatar() {
    return 'https://icon-library.net/images/flat-support-icon/flat-support-icon-5.jpg';
  }

  dialogName() {
    return 'Rodion Sharafiev';
  }
}

customElements.define('chat-list', ChatList);
