<template>
    <div>
      <h2>hello Menu</h2>
      <button @click="add">+</button>
        {{num}}
      <button @click="sub">-</button>
    </div>
</template>

<script>
    export default {
        name: "menu",
        data () {
          return{
            num: 0,
            thisObj : [
              { name: 'quber', email: 'qubernet@163.com', qq: 757200834 },
              { name: 'xm', email: 'xm@126.com', qq: 757200833 },
              { name: 'jack', email: 'jack@sina.com', qq: 757200832 },
              { name: 'maer', email: 'maer@gmail.com', qq: 757200831 }
            ]
          }
        },
        methods : {
          add(){
            this.num++
            console.table(this.thisObj)
            console.dir(this.thisObj);
          },
          sub() {
            this.num--
          },
        }
    }
</script>

<style scoped>

</style>
