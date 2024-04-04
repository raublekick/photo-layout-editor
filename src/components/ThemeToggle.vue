<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Theme {
  name: string
  icon: string
}

const themes = ref<Array<Theme>>([
  { name: 'light', icon: 'bi-sun-fill' },
  { name: 'dark', icon: 'bi-moon-stars-fill' },
  { name: 'auto', icon: 'bi-circle-half' }
])

const activeTheme = ref<Theme>({ name: 'auto', icon: 'bi-circle-half' })

const setTheme = (theme: string) => {
  if (theme === 'auto') {
    document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
  } else {
    document.documentElement.setAttribute('data-bs-theme', theme)
  }
  const themeObject = themes.value.find(t => t.name === theme)
  if (!themeObject) {
    activeTheme.value = { name: 'auto', icon: 'bi-circle-half' }
  } else {
    activeTheme.value = themeObject
  }
}

const getStoredTheme = () => localStorage.getItem('theme')
const setStoredTheme = (theme: string) => localStorage.setItem('theme', theme)

const getPreferredTheme = () => {
  const storedTheme = getStoredTheme()
  if (storedTheme) {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const changeTheme = (theme: string) => {
  setStoredTheme(theme)
  setTheme(theme)
}

onMounted(() => {
  setTheme(getPreferredTheme())

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

})


</script>
<template>

  <button class="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center show" id="bd-theme"
    type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static"
    aria-label="Toggle theme (dark)">
    <i class="bi my-1 theme-icon-active bi-moon-stars-fill"></i>
    <span class="d-lg-none ms-2" id="bd-theme-text">Toggle theme</span>
  </button>
  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text" data-bs-popper="static">
    <template v-for="theme in themes" :key="theme.name">
      <li>
        <button type="button" @click="changeTheme(theme.name)"
          :class="['dropdown-item d-flex align-items-center', theme.name === activeTheme.name ? 'active' : '']"
          :data-bs-theme-value="theme.name" aria-pressed="false">
          <i class="bi me-2 opacity-50" :class="theme.icon"></i>
          {{ theme.name.charAt(0).toUpperCase() + theme.name.slice(1) }}
          <i v-if="theme.name === activeTheme.name" class="bi ms-auto d-none bi-check"></i>
        </button>
      </li>
    </template>
    <!-- <li>
      <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light"
        aria-pressed="false">
        <i class="bi me-2 opacity-50 bi-sun-fill"></i>
        Light
        <i class="bi ms-auto d-none bi-check2"></i>
      </button>
    </li>
    <li>
      <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="dark"
        aria-pressed="true">
        <i class="bi me-2 opacity-50 bi-moon-stars-fill">
        </i>
        Dark
        <i class="bi ms-auto d-none bi-check2"></i>
      </button>
    </li>
    <li>
      <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="auto"
        aria-pressed="false">
        <i class="bi me-2 opacity-50 bi-circle-half"></i>
        Auto
        <i class="bi ms-auto d-none bi-check2">
        </i>
      </button>
    </li> -->
  </ul>


</template>