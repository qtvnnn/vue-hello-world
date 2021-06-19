<template>
  <div id="left-menu">
    <span class="icon-toggle d-md-none d-lg-block" @click="toggleMenu">
      <font-awesome-icon icon="bars" v-b-popover.hover.right="`Menu`" />
    </span>
    <ul class="menus">
      <li
        v-for="(route, index) in routes"
        :key="index"
        :id="route.name"
        class="border-bottom-menu"
      >
        <router-link
          :id="`${route.name}${index}`"
          :to="route.children ? '' : route.path"
          @click.native="onClickItemMenu(index, route.children)"
          data-toggle="collapse"
          :aria-expanded="route.expand ? 'true' : 'false'"
          :aria-controls="route.name"
          :class="route.expand ? null : 'collapsed'"
          :active-class="route.children ? '' : 'is-selected'"
        >
          <div class="menu-icon">
            <span v-if="route.icon"
              ><font-awesome-icon
                :icon="route.icon"
                v-b-popover.hover.right="`${route.menuName}`"
            /></span>
          </div>
          <span class="title-menu">{{ route.menuName }}</span>
          <div v-if="route.children">
            <div class="down-up-icon" v-if="route.expand && route.children">
              <font-awesome-icon icon="angle-down" />
            </div>
            <div class="down-up-icon" v-else>
              <font-awesome-icon icon="angle-right" />
            </div>
          </div>
        </router-link>
        <b-collapse :id="route.menuName" v-model="route.expand">
          <div>
            <ul>
              <li
                v-for="(routeChild, idx) in route.children"
                :key="idx"
                @mouseover="onMouseoverRouteChild(route.name, index)"
                @mouseleave="onMouseleaveRouteChild(route.name, index)"
              >
                <router-link
                  :to="`${route.path}${routeChild.path}`"
                  @click.native="onClickChildItemMenu()"
                  active-class="is-selected"
                  v-show="routeChild.isShowLeftMenu !== false"
                >
                  <div class="menu-icon ml-3 menu-icon-2">
                    <span v-if="routeChild.icon">
                      <font-awesome-icon
                        :icon="routeChild.icon"
                        v-b-popover.hover.right="`${routeChild.menuName}`"
                      />
                    </span>
                  </div>
                  <span class="ml-3 title-menu">{{ routeChild.menuName }}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </b-collapse>
      </li>
      <li>
        <BaseHeaderAccount />
      </li>
    </ul>
    <div class="version">Phiên bản: {{ version }}</div>
  </div>
</template>

<script>
import { removeLeftMenuAndOverlayClass } from '@/utils/headerUtils'
import BaseHeaderAccount from '@/components/common/header-account/BaseHeaderAccount'
import _isNil from 'lodash/isNil'
export default {
  name: 'BaseLeftMenu',
  components: {
    BaseHeaderAccount
  },
  data () {
    return {
      version: '3.0.1',
      routes: this.$router.options.routes.filter(
        (x) => x.isShowLeftMenu === true
      )
    }
  },
  created () {
    this.$router.onReady(() => {
      this.routes.forEach((item) => {
        item.children &&
          item.children.forEach((childItem) => {
            if (childItem.name === this.$route.name) {
              item.expand = true
            }
          })
      })
    })
  },
  methods: {
    toggleMenu () {
      document.getElementById(`left-menu`).classList.toggle('toggle-selected')
      document.getElementById(`app`).classList.toggle('toggle-main-wrapper')
    },
    onClickItemMenu (index, Childroute) {
      if (_isNil(Childroute)) {
        removeLeftMenuAndOverlayClass()
      }
      this.routes.forEach((item, i) => {
        item.expand = !item.expand
        if (i !== index) {
          item.expand = false
        }
      })
    },
    onClickChildItemMenu () {
      removeLeftMenuAndOverlayClass()
    },
    onMouseoverRouteChild (routeName, routeIndex) {
      document
        .getElementById(`${routeName}${routeIndex}`)
        .classList.add('is-selected')
    },
    onMouseleaveRouteChild (routeName, routeIndex) {
      document
        .getElementById(`${routeName}${routeIndex}`)
        .classList.remove('is-selected')
    }
  }
}
</script>
<style scoped lang="scss">
.version {
  position: absolute;
  bottom: 40px;
  left: 24px;
  color: #a5a5a5;
  font-size: 14px;
}
@media (max-width: 991px) {
  .version {
    bottom: 100px;
  }
}
</style>
