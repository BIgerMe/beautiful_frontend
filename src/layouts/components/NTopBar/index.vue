<template>
  <div class="top-bar-container">
    <div class="vab-main">
      <el-row>
        <el-col :xl="8" :lg="8" :md="8" :sm="8" :xs="8">
          <vab-logo />
        </el-col>
        <el-col :xl="11" :lg="11" :md="11" :sm="11" :xs="11">
          <el-menu
            :background-color="variables['menu-background']"
            :text-color="variables['menu-color']"
            :active-text-color="variables['menu-color-active']"
            :default-active="activeMenu"
            mode="horizontal"
            menu-trigger="hover"
          >
            <template v-for="route in routes">
              <vab-side-bar-item
                v-if="!route.hidden"
                :key="route.path"
                :full-path="route.path"
                :item="route"
              />
            </template>
          </el-menu>
        </el-col>
        <el-col :xl="5" :lg="5" :md="5" :sm="5" :xs="5">
          <div class="right-panel">
            <vab-avatar />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import variables from '@/styles/variables.scss'
  import { mapGetters } from 'vuex'

  export default {
    name: 'NTopBar',
    data() {
      return {
        pulse: false,
        menuTrigger: 'hover',
      }
    },
    computed: {
      ...mapGetters({
        routes: 'routes/routes',
        visitedRoutes: 'tabsBar/visitedRoutes',
      }),
      activeMenu() {
        const route = this.$route
        const { meta, path } = route
        if (meta.activeMenu) {
          return meta.activeMenu
        }
        return path
      },
      variables() {
        return variables
      },
    },
    methods: {
      async refreshRoute() {
        this.$baseEventBus.$emit('reload-router-view')
        this.pulse = true
        setTimeout(() => {
          this.pulse = false
        }, 1000)
      },
    },
  }
</script>
<style lang="scss" scoped>

</style>
