<template>
  <div>
    <h1>{{ name }}</h1>
    <!-- shortcut directive instead of v-bind:value = "email" -->
    <input :value="email" />
    <input v-model="email" />
    {{ email }}
    {{ uppercase }}
    <!-- I want to create one form which one add every time email address push on our given div block -->
    <!-- First -->
    <div id="first">
      <h1>Create Form</h1>
      <div class="mar-t20">
        <p>Title</p>
        <input type="text" v-model="note.title" />
      </div>
      <div class="">
        <p>Text</p>
        <textarea v-model="note.text"></textarea>
      </div>
      <el-button type="primary" @click="addData">Submit</el-button>

      <div class="data-show">
        <ul>
          <li v-for="(note, index) in notes" :key="note.title">
            <div class="remove" @click="removeData(index)">Remove</div>
            <h1>{{ note.title }}</h1>
            <p class="date">{{ note.date }}</p>
            <p class="text">{{ note.text }}</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- Second -->

    <!-- Show hide 1 -->
    <div class="mar-t20" v-if="show">Hello Learner</div>
    <div class="mar-t20" v-if="!show">Thanks Bro</div>
    <!-- shortcut method instead of v-on:click="toggle" -->
    <button @click="toggle">Show/hide- both from v-if</button>

    <!-- Show Hide 2 -->
    <div class="mar-t20" v-if="show">Hello Learner</div>
    <div class="mar-t20" v-else>Thanks Bro</div>
    <button @click.prevent="toggle">Show/hide v-if and else</button>

    <!-- Show Hide 3  when we use v-show directive then block only display none and block but all data have in DOM so this is not useful for -->
    <div class="mar-t20" v-show="show">Hello Learner</div>
    <div class="mar-t20" v-cloak v-show="!show">Thanks Bro</div>
    <button @click="toggle">Show/hide v-show</button>
    <!-- 
    <div class="mar-t20"
    Notes: 
    1. v-cloak directive ka use tab kerte hai jab hum refresh kerte hai
    to one time hidden div bhi show hoti hai. css ========= [v-cloak] { display:
    none;} 
    </div>
     -->
    <p class="mar-t20"><strong>Notes:</strong></p>
    <p>https://github.com/15Dkatz/vue-guides</p>
    <p>
      <strong
        >If you want current code folder open through terminal then type only
        open . same working folder has open your screen.</strong
      >
    </p>
    <ul class="notes-list">
      <li>
        Every Vue application starts by creating a
        <strong>new Vue instance</strong> with the Vue function: var vm = new
        Vue({ // options })
      </li>
      <li>
        1. We often use the variable vm (short for ViewModel) to refer to our
        Vue instance.
      </li>
      <li>
        API Referance
        <ul>
          <li><strong>Data: </strong> data () { return { } }</li>
          <li>
            <strong>Props: </strong>
            <br />
            URL: https://vuejs.org/v2/guide/components-props.html
            <br /><br />
            <strong>
              Prop Casing camelCase like - 'isPublished', 'commentIds'
            </strong>
            <div>
              <strong>type:</strong> can be one of the following native
              constructors: String, Number, Boolean, Array, Object, Date,
              Function, Symbol, any custom constructor function or an array of
              those. Will check if a prop has a given type, and will throw a
              warning if it doesn’t. More information on prop types.
              <br /><br />
              <strong>default:</strong> any Specifies a default value for the
              prop. If the prop is not passed, this value will be used instead.
              Object or array defaults must be returned from a factory function.
              <br /><br />
              <strong>required:</strong> Boolean Defines if the prop is
              required. In a non-production environment, a console warning will
              be thrown if this value is truthy and the prop is not passed.
              <br /><br />
              <strong>validator:</strong> Function Custom validator function
              that takes the prop value as the sole argument. In a
              non-production environment, a console warning will be thrown if
              this function returns a falsy value (i.e. the validation fails).
              You can read more about prop validation
            </div>
            <pre>
            props: { 
            // type check 
            height: Number, 
            // type check plus other validations 
            age: { 
              type: Number, 
              default: 0, 
              required: true,
              validator: function (value) { return value >= 0 } 
              } 
            }
          </pre
            >
          </li>
          <li>
            <strong>computed</strong>
            <br />
            <strong>Type:</strong>
            { [key: string]: Function | { get: Function, set: Function } }
            <br />
            <br />
            <strong>Details:</strong> Computed properties to be mixed into the
            Vue instance. All getters and setters have their this context
            automatically bound to the Vue instance. Note that if you use an
            arrow function with a computed property, <strong>this</strong> won’t
            be the component’s instance, but you can still access the instance
            as the function’s first argument:
            <strong>Example:</strong>
            <br />
            <pre>
              var vm = new Vue({
                data: { a: 1 },
                computed: {
                  // get only
                  aDouble: function () {
                    return this.a * 2
                  },
                  // both get and set
                  aPlus: {
                    get: function () {
                      return this.a + 1
                    },
                    set: function (v) {
                      this.a = v - 1
                    }
                  }
                }
            })
            vm.aPlus   // => 2
            vm.aPlus = 3
            vm.a       // => 2
            vm.aDouble // => 4

            https://vueschool.io/lessons/vuejs-computed-properties?friend=vuejs
            https://vuejs.org/v2/guide/computed.html
            </pre>
          </li>
          <li>
            <strong>methods</strong>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.mar-t20 {
  margin-top: 20px;
}
.data-show {
  margin: 20px 0;
  padding: 0;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      border: 1px solid #e2e2e2;
      border-radius: 4px;
      margin: 5px 5px 5px 0;
      padding: 10px;
      display: inline-flex;
      flex-direction: column;
      width: 200px;
      h1 {
        margin: 5px 0;
        padding: 0;
        font-size: 16px;
        font-weight: 600;
        color: #000;
      }
      .text {
        font-size: 14px;
        font-weight: 400;
        color: #123;
      }
      .date {
        font-size: 10px;
        font-weight: 300;
        color: #555;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      name: "Vue Basic",
      email: "amit@gmail.com",
      show: true,
      note: {
        title: "",
        text: ""
      },
      notes: [
        {
          title: "title",
          text: "Dummy text here",
          date: new Date(Date.now()).toLocaleString()
        }
      ]
    };
  },
  computed: {
    uppercase() {
      return this.email.toUpperCase();
    }
  },
  methods: {
    toggle: function() {
      this.show = !this.show;
    },
    alertTime() {
      alert(`The time is ${Date.now().toLocaleString()}`);
    },
    addData() {
      let text = this.note.text;
      let title = this.note.title;
      this.notes.push({
        title,
        text,
        date: new Date(Date.now()).toLocaleString()
      });
      this.note.text = " ";
      this.note.title = " ";
    },
    removeData(index) {
      this.notes.splice(index, 1);
    }
  },
  Created() {
    this.alertTime();
  },
  mounted() {
    this.alertTime();
  }
};
</script>
