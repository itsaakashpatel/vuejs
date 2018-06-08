Vue.component("card", {
  props: ["title", "text"],
  data() {
    return {
      isVisible: true
    };
  },

  template: `
    <div align="center">

    <div class="card" v-show="isVisible">
        <div class="card-content">
          <p class="title">
            {{title}}
          </p>
          <p class="subtitle">
            {{text}}
          </p>
          <button class="button is-text" @click="isVisible:false"   >Delete</button>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <span>
              View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
            </span>
          </p>
          <p class="card-footer-item">
            <span>
              Share on <a href="#">Facebook</a>
            </span>
          </p>
        </footer>
      </div>
</div>
    `
});

Vue.component("modal", {
  template: `

<div class="modal is-active">
<div class="modal-background"></div>
<div class="modal-content">
<div class="box">
How are you, buddy?
</div>
  
</div>
<button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
</div>

`
});

new Vue({
  el: "#root",
  data: {
    msg: "hello",
    names: ["aakash", "karan", "adi"],
    showModal: false
  },

  methods: {
    addName() {
      this.names.push(this.msg);
      this.msg = "";
    }
  }
});
