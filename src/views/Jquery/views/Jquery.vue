<template>
  <div>
    <h1>{{ name }}</h1>
    <div class="question-ans">
      <ul>
        What is Jquery?
        <li>
          jquery is a cross-browser lightweight JavaScript library. Jquery is
          not a programing language but a well written javascript code.
        </li>
      </ul>
      <ul>
        What is $() in jQuery library?
        <li>The $() function is an alias ofjQuery() function</li>
      </ul>
      <ul>
        How do you add an HTML element in DOM tree?
        <li>
          You can use jQuery method appendTo() to add an HTML element in DOM
          tree.
        </li>
      </ul>
      <ul>
        Why do we use jQuery?
        <li>
          Due to following advantages.
          <ul>
            <li>Easy to use and learn.</li>
            <li>Easily expandable.</li>
            <li>
              Cross-browser support (IE 6.0+, FF 1.5+, Safari 2.0+, Opera 9.0+)
            </li>
            <li>Easy to use for DOM manipulation and traversal.</li>
            <li>Large pool of built in methods.</li>
            <li>AJAX Capabilities.</li>
            <li>Methods for changing or applying CSS, creating animations.</li>
            <li>Event detection and handling.</li>
            <li>Tons of plug-ins for all kind of needs.</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li></li>
      </ul>
      <ul>
        <li></li>
      </ul>
      <ul>
        <li></li>
      </ul>
      <ul>
        <li></li>
      </ul>
      <ul>
        <li></li>
      </ul>
      <ul>
        <li></li>
      </ul>
      <ul>
        <li></li>
      </ul>
      <ul>
        <li></li>
      </ul>
      <ul>
        <li></li>
      </ul>
      <ul>
        <li></li>
      </ul>
      <ul>
        <li></li>
      </ul>
      <ul>
        <li></li>
      </ul>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.question-ans {
  margin: 20px;
  padding: 0;
  ul {
    font-size: 14px;
    font-weight: 600;
    list-style: none;
    padding: 0;
    margin: 0 0 20px;
    li {
      font-size: 14px;
      font-weight: 300;
      line-height: 16px;
      color: #123;
      padding: 0 0 5px;
      &:first-child {
        margin-top: 5px;
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      name: "Detail of Jquery"
    };
  },
  methods: {}
};
</script>
