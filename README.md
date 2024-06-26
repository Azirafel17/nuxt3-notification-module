# Nuxt3 Notifications Module

<p>
  <a href="https://www.npmjs.com/package/aak-nuxt3-notifications" target="_blank"><img src="https://img.shields.io/npm/v/aak-nuxt3-notifications" alt="Version"></a>
  <a href="https://github.com/Azirafel17/nuxt3-notification-module/blob/main/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/Azirafel17/nuxt3-notification-module" alt="License"></a>
<a href="https://nuxt.com" target="_blank"><img src="https://img.shields.io/badge/Nuxt-18181B?&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAoCAYAAABNefLBAAAAAXNSR0IArs4c6QAAA91JREFUaEPNWdtV20AQvSsVEDoIPoh8QwWBDkwFkApiCrCQ5QICFcSpIKQCoAL4DuJgOoAC2M0Zy8Y23pl9SEqyv9rH3J2rO3d3Fdpuv4s9JMkZgP586glSPUKvmLa9VOx8Knagddz9+ADKXFm+PSPV+/8L8PZAPxZbeE1uAWwzG3mNLD9sdZMjJ2sP9P2ogFJEa6GpI2TDy8hYWxvWDujHYhuvyaNHVNM5zZ89+nbWpR3QVUn/8YFXlMaMsHtWePXtqFNz0NW4D5ifQfGluuclarUwfgWwBWAKrS/wqbgLWsvSuRlot3hx8blFrSq/AzixTPAFWT5pArwZaFm8nuYZ+mAPUBA1mT2Ny188aJd4GXUI6ANB0e2i5sceN1OkGhJNE1m8fiHLa0dWleTEPlrXsYmaV+kDQJu6O7yOiT8u0y7xWhUq3qVRvOtUdbFnHeEUWd77i6BLqsl252XLXlVSRj4zAV4iy4/mrPAvfTQgsvyFZ9olXqneQ69YNx+uDM7+f4Dx7VIyo0QtDHQdPPlrqpu2CsjbTHmzFicwzre/AGCqAJZM8eR6GOiqJBOyODK+X+IGWc67slqVyVjYRY0P+Ala95HMNtveAkXNH7QsSICPy3IJoMQeF1MCRM0fdBUoXlxWZFHj2eNiSoCo+YGOES8OtEvUVse9Z09LTs0Nuol4ccB9DAiXOd/y18iRNREvPtsuUXuCrfTRfPUdXCNRkzPdhnjZgDdlTzU6BxQdOTebUnfYGe5L1UsG/TC+hTF7TJ24QHY28CyN692asqcWNart9tqtcIqd/JyLjQf9UA5g8I0Z+IJUb284L58daIs9VUlnbTpz2xo5NbqosF5L2UHXO0n+mnFeiD/It1X6CKooauoHsqHtEgJ20NV4AphjZhdl5yVlW1btcPZEitomaBf9tN6Puqfqij0RorYJujPx6og9EaK2DvpfiVcsexa/UqCoLUF3RT+aV6dXnZS+Vf0IELUl6K7Ei7/KpZDDxYu1tuzjYT1i5fhZg+5KvGTAtHJ86bOBlxP3doNagxZvNvl6x1ananQMlQx4Ss9Gxpc+bmGXqM03WUEWAYC8rDEhD24+b1pEa7pLsz/U1zFxPsHl+8g2c6Zq5tQUxBLlmj/6O09rt6BGLzobqHBKmTbNZgkeLf/H8n8ZvNjGAGNGBJp/gWi+xOoMdKM5EB/fXLayjXhmmfa5xWi+2A1SfeJ8ng15546LaaYlc/UWLWLc9FSDoS5hMPF6c3IJamwUy3EvMKpPsSzNCVFLKe5O239JpaYwauoFdHVWssDacKrrv76tZ6KekejJ4nz9B5NWGK+XC+AAAAAAAElFTkSuQmCC" alt="Nuxt"></a>
<a href="https://www.npmjs.com/package/aak-nuxt3-notifications" target="_blank"><img src="https://img.shields.io/npm/dm/aak-nuxt3-notifications
  " alt="Downloads"></a>

</p>

This is module [aak-nuxt3-notifications](https://github.com/Azirafel17/nuxt3-notification-module) for Nuxt3

## 📦 Get Started

1. Install `aak-nuxt3-notifications` as project dependency:

```bash
npm i aak-nuxt3-notifications # npm

yarn add aak-nuxt3-notifications # yarn
```

2. Add it to the `modules` section of your `nuxt.config`:

```ts
export default defineNuxtConfig({
  modules: [
    'aak-nuxt3-notifications',
  ],
})
```

## 🚀 Example

![Example](https://github.com/Azirafel17/nuxt3-notification-module/blob/main/assets/example.gif)

```html
<!-- component.vue -->

<script setup>
  const { $notify } = useNuxtApp()

  const acceptsAnObject = () => $notify.info({ 
                                    title: 'Title message', 
                                    message: 'Text message', 
                                    position: 'bottom-right',
                                    duration: 8000
                                  })
  // ‎‧₊˚✧[Only text]✧˚₊‧
  const onlyText = () => $notify.info('You can only specify the text') 

  const info = () => $notify.info('An info-style message') // 💬
  const success = () => $notify.success('An success-style message') // ✅
  const warning = () => $notify.warning('An warning-style message') // ⚠️
  const error = () => $notify.error('An error-style message') // ❗
</script>

<template>
  <button @click="acceptsAnObject">Show notify acceptsAnObject</button>
  <button @click="onlyText">Show notify onlyText</button>
  <button @click="info">Show notify info</button>
  <button @click="success">Show notify success</button>
  <button @click="warning">Show notify warning</button>
  <button @click="error">Show notify error</button>
</template>
```

![Example](https://github.com/Azirafel17/nuxt3-notification-module/blob/main/assets/writeCode.gif)

# 🔨 API

## Options

| **Name** | **Description**                                                                                                                  | **Type**                                                                | **Default** |
| -------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------- |
| title    | title                                                                                                                            | string                                                                  | ''          |
| message  | description text                                                                                                                 | string                                                                  | ''          |
| offset   | offset from the top edge of the screen. <br /> Every Notification instance of the same moment <br /> should have the same offset | number                                                                  | 0           |
| position | custom position                                                                                                                  | 'top-right' <br />'top-left' <br /> 'bottom-right' <br />'bottom-left'" | top-right   |
| duration | duration before close. <br /> It will not automatically close if set 0                                                           | number </br> undefined                                                                  | duration is calculated based </br>on the number of characters </br>in a string, but not less than </br>4000, and if </br>duration === undefined, </br>then duration 4000        |
| type     | notification type                                                                                                                | 'success' <br /> 'warning' <br /> 'info' <br /> 'error' <br /> ''       | ''          |

## 💻 Development

- Fork and clone [Azirafel17/nuxt3-notification-module](https://github.com/Azirafel17/nuxt3-notification-module)
- Install dependencies using `npm install`
- Run `npm dev:prepare` to generate type stubs.
- Use `npm dev` to start [playground](https://github.com/Azirafel17/nuxt3-notification-module/tree/main/playground) in
  development mode.
