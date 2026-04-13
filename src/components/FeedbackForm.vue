<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue'
import appConfig from '@/config/app.ts'
import type { App } from '@/config/apps.ts'
import axios from 'axios'
import { UAParser } from 'ua-parser-js'
import SupportLinks from '@/components/SupportLinks.vue'

const props = defineProps<{
  app: App
  params: Record<string, string>
}>()

const textArea = ref<HTMLTextAreaElement | null>(null)
const inputText = ref('')

const hasFocus = ref(false)
const isProcessing = ref(false)
const errorText = ref('')
const contentClass = ref('')

const switches = [
  {
    id: 'not-used',
    label: 'Do Not Need or Not Used',
    class: 'text-success-emphasis',
  },
  {
    id: 'not-expected',
    label: 'Does Not Work as Expected',
    class: 'text-warning-emphasis',
  },
  {
    id: 'not-working',
    label: 'Not Working or Broken',
    class: 'text-danger-emphasis',
  },
]
const values = reactive<Record<string, boolean>>(Object.fromEntries(switches.map((s) => [s.id, false])))

const textClass = computed(() => {
  if (inputText.value.length >= 900) return 'text-danger'
  if (inputText.value.length >= 800) return 'text-warning'
  return 'text-success-emphasis'
})

const getIcon = (value: boolean) => (value ? '✅' : '🔳')

const animateCSS = (node: HTMLElement, animation: string, prefix = 'animate__') => {
  const name = `${prefix}${animation}`
  node.classList.add(`${prefix}animated`, name)
  function handleAnimationEnd(event: Event) {
    event.stopPropagation()
    node.classList.remove(`${prefix}animated`, name)
  }
  node.addEventListener('animationend', handleAnimationEnd, {
    once: true,
  })
}

async function processForm() {
  console.debug('%c Start - processForm', 'color: SpringGreen')

  // const allFalse = switches.every((s) => !s.enabled)
  const allFalse = Object.values(values).every((v) => !v)
  console.debug('allFalse:', allFalse)

  if (allFalse && !inputText.value.trim()) {
    textArea.value?.focus()
    if (textArea.value) animateCSS(textArea.value, 'shakeX')
    return console.warn('No Data to Send.')
  }

  const ua = UAParser(navigator.userAgent)
  console.log('ua:', ua)

  const lines = [
    `**${props.app.name}** Uninstall, Version: \`${props.params['version']}\``,
    `**ID**: \`${props.params['id']}\``,
    `**Browser**: ${ua.browser.name} ${ua.browser.major} (${ua.engine.name} - ${ua.browser.version})`,
    `**System**: ${ua.os.name} ${ua.os.version} (${ua.cpu.architecture})`,
    `${getIcon(values['not-used'])} Not Used`,
    `${getIcon(values['not-expected'])} Not as Expected`,
    `${getIcon(values['not-working'])} Not Working`,
  ]
  if (inputText.value) lines.push(`\`\`\`\n${inputText.value}\n\`\`\``)
  console.debug('lines:', lines)

  const content = lines.join('\n')
  console.debug('content.length:', content.length)
  const relay_url = props.app.relay_url || appConfig.relay_url
  console.debug('relay_url:', relay_url)

  // await new Promise((resolve) => setTimeout(resolve, 2000))

  const data = {
    content,
    username: props.app.name,
    ...(props.app.icon?.endsWith('png') && { avatar_url: props.app.icon }),
  }
  console.debug('data:', data)
  const response = await axios.post(relay_url, data)
  console.debug('response:', response)
  console.debug('response.status:', response.status)

  contentClass.value = 'animate__animated animate__backOutUp'
  const url = props.app.redirect_url || appConfig.website_url
  setTimeout(() => window.location.replace(url), 500)
}

async function onSubmit() {
  console.debug('onSubmit')
  try {
    isProcessing.value = true
    errorText.value = ''
    await processForm()
  } catch (error) {
    console.log('error:', error)
    if (error instanceof Error) {
      console.log('error.message:', error.message)
      errorText.value = error.message
    }
  } finally {
    isProcessing.value = false
  }
}

function onChange() {
  console.log('onChange')
  if (values['not-working']) textArea.value?.focus()
}

function handleKeyboard(e: KeyboardEvent) {
  // Ctrl+Enter
  if (e.key === 'Enter' && e.ctrlKey) {
    console.log('%c Ctrl+Enter Submit', 'color: Yellow')
    onSubmit()
    return
  }

  const target = e.target as HTMLInputElement
  if (['INPUT', 'TEXTAREA', 'SELECT', 'OPTION'].includes(target?.tagName)) return
  if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.repeat) return
  if (e.key.length !== 1 || e.key === ' ') return

  console.log(`handleKeyboard: ${e.code} "${e.key}" - ${e.key.length}`)
  textArea.value?.focus()
}

function onFocus() {
  hasFocus.value = true
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyboard)
  window.addEventListener('focus', onFocus, { once: true })
  if (document.hasFocus()) hasFocus.value = true
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyboard)
  window.removeEventListener('focus', onFocus)
})
</script>

<template>
  <div
    class="content-wrapper my-4 p-2 p-sm-3 mx-auto w-100 rounded rounded-3 animate__animated animate__backInDown"
    :class="contentClass"
  >
    <div class="justify-content-center align-items-center d-flex">
      <a
        :href="app.github_url"
        target="_blank"
        rel="noopener"
        class="d-flex align-items-center link-body-emphasis text-decoration-none hvr-grow"
      >
        <img :src="app.icon" class="img-fluid me-2" alt="I" height="42" width="42" />
        <h1 class="align-middle mb-0">{{ app.name }}</h1>
      </a>
    </div>

    <SupportLinks :app="app" :has-focus="hasFocus" class="my-2" />
    <hr class="my-2" />

    <div class="text-center">
      <p class="lead">Please let us know why you uninstalled {{ app.name }}.</p>

      <!--<p class="mb-1 fs-3 animate__animated animate__delay-1s" :class="{ animate__shakeX: hasFocus }">-->
      <p>
        All bugs that
        <a class="link-body-emphasis" :href="`${app.github_url}/issues`" target="_blank" rel="noopener">
          get reported</a
        >
        will be fixed! Support is also available on
        <a class="link-body-emphasis" :href="appConfig.discord_invite" target="_blank" rel="noopener">Discord</a>.
      </p>
    </div>

    <form @submit.prevent="onSubmit">
      <template v-for="item in switches" :key="item.id">
        <div class="form-check form-switch fs-5">
          <input
            v-model="values[item.id as keyof typeof values]"
            class="form-check-input animate__animated animate__delay-1s"
            :class="{ animate__tada: hasFocus }"
            type="checkbox"
            role="switch"
            :name="item.id"
            :id="item.id"
            @change="onChange"
          />
          <label class="form-check-label" :class="item.class" :for="item.id">{{ item.label }}</label>
        </div>
        <div
          v-if="item.id === 'not-working'"
          v-show="values['not-working'] && app.broken_text"
          class="alert alert-warning text-center p-2 mt-2 mb-0 animate__animated animate__pulse"
        >
          {{ app.broken_text }}
        </div>
      </template>

      <div class="my-2">
        <label for="user-response" class="form-label visually-hidden">Uninstall Feedback</label>
        <textarea
          v-model="inputText"
          ref="textArea"
          name="user-response"
          placeholder="Optional Feedback, Bugs, Missing Features, etc..."
          class="form-control"
          rows="4"
          maxlength="1000"
          autofocus
        ></textarea>
        <span class="input-counter float-end label label-default" :class="textClass"
          ><span>{{ inputText.length }}</span> / 1000</span
        >
      </div>
      <button class="btn btn-success w-100" :class="{ disabled: isProcessing }" type="submit">
        Submit Feedback
        <i class="mx-2" :class="isProcessing ? 'fa-solid fa-sync fa-spin' : 'fa-regular fa-comment-dots'"></i>
        <span class="text-muted d-none d-sm-inline">(Ctrl+Enter)</span>
      </button>
    </form>
    <div v-show="errorText" class="alert alert-danger alert-dismissible fade show text-center mt-3" role="alert">
      {{ errorText }}
    </div>
  </div>
</template>

<style scoped>
.content-wrapper {
  max-width: 800px;
  backdrop-filter: blur(6px);
}

.input-counter {
  margin-top: -25px;
  margin-right: 15px;
}
</style>
