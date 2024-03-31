<template>
  <div class="main">
    <div class="wrapper">
      <button class="btn info" @click="info">Info</button>
      <button class="btn success" @click="success">Success</button>
      <button class="btn warning" @click="warning">Warning</button>
      <button class="btn error" @click="error">Error</button>
    </div>
    <div class="wrapper">
      <div class="witchTitle">
        <input id="witchTitle" v-model="witchTitle" type="checkbox" />
        <label for="witchTitle"> Notify with label</label>
      </div>
      <div class="position">
        <div v-for="p in positions" :key="p" class="position-item">
          <input :id="p" v-model="position" type="radio" :value="p" />
          <label :for="p">
            {{ p }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $notify } = useNuxtApp()

type Position = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
const textMessage: string =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
const titleMessage: string = 'Lorem Ipsum is simply'
const witchTitle = ref<boolean>(true)
const position = ref<Position>('top-right')
const positions: Position[] = [
  'top-right',
  'top-left',
  'bottom-right',
  'bottom-left',
]
const message = computed(
  (): { title: string | undefined; message: string; position: Position } => {
    return {
      title: witchTitle.value ? titleMessage : undefined,
      message: textMessage,
      position: position.value,
    }
  }
)
const info = () => $notify.info({ ...message.value })
const success = () => $notify.success({ ...message.value })
const warning = () => $notify.warning({ ...message.value })
const error = () => $notify.error({ ...message.value })
</script>
<style>
body {
  background-color: #363636;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.main {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #494949;
  background-color: #4d4d4d;
  width: 500px;
  margin: auto;
  margin-top: 10%;
  transition: background-color 0.7s;
}

.main:hover {
  background-color: rgb(82, 82, 82);
}

.main,
.witchTitle {
  display: flex;
}

.wrapper {
  display: flex;
  flex-direction: column;
  height: 250px;
  padding-top: 40px;
}

.wrapper:last-child {
  margin-left: 40px;
}

.btn {
  margin: 5px;
  width: 150px;
  height: 40px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: all, 0.3s;
}

.btn:hover {
  opacity: 0.8;
}

.success {
  background-color: rgb(33, 186, 69);
  color: white;
  border: 1px solid rgb(33, 186, 69);
}

.info {
  background-color: rgb(49, 204, 236);
  color: #494949;
  border: 1px solid rgb(49, 204, 236);
}

.warning {
  background-color: rgb(242, 192, 55);
  color: #494949;
  border: 1px solid rgb(242, 192, 55);
}

.error {
  background-color: rgb(193, 0, 21);
  color: #ffffff;
  border: 1px solid rgb(193, 0, 21);
}

#witchTitle {
  width: 20px;
  height: 20px;
}

.witchTitle {
  line-height: 25px;
  color: #ffffff;
}

.position {
  margin-top: 10px;
  color: #ffffff;
}

.position-item {
  margin-top: 5px;
  text-transform: capitalize;
}
</style>
