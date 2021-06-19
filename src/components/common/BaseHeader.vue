<template>
  <div class="header">
    <div class="position-relative content">
      <div class="logo-text">
        <a class="header-logo">
          <b-link :to="{ path: '/van-ban-den' }">
            <img src="../../assets/images/logo.png" alt="avatar1" />
          </b-link>
        </a>
        <div class="header-title text-uppercase">
          {{ tieuDe }}
        </div>
        <div class="header-sologan text-uppercase">
          <div class="w-100">{{ tieuDeCon }}</div>
        </div>
        <BaseLeftMenu />
      </div>
      <div class="nav-toggle mt-2" @click="toggleNav()">
        <font-awesome-icon icon="bars" />
      </div>
      <BaseHeaderAccount @authenticated="setAuthenticated" />
    </div>
  </div>
</template>
logo-text

<script>
import {
  addLeftMenuAndOverLayClass,
  removeLeftMenuAndOverlayClass
} from '@/utils/headerUtils'
import _isEmpty from 'lodash/isEmpty'
import BaseHeaderAccount from '@/components/common/header-account/BaseHeaderAccount'
import BaseLeftMenu from '@/components/common/BaseLeftMenu'

export default {
  name: 'BaseHeader',
  components: {
    BaseLeftMenu,
    BaseHeaderAccount
  },
  data () {
    return {
      tieuDe: 'Hệ thống Quản lý ABC',
      tieuDeCon: 'Bộ ABC',
      loGo: 'logo'
    }
  },
  methods: {
    setAuthenticated () {
      this.$emit(this, 'authenticated')
    },
    toggleNav () {
      window.addEventListener('resize', () => {
        removeLeftMenuAndOverlayClass()
      })
      if (!_isEmpty(document.getElementsByClassName('tab-menu-show'))) {
        removeLeftMenuAndOverlayClass()
      } else {
        addLeftMenuAndOverLayClass()
      }
      document.getElementById('overlay-common') &&
        document
          .getElementById('overlay-common')
          .addEventListener('click', () => {
            if (!_isEmpty(document.getElementsByClassName('tab-menu-show'))) {
              removeLeftMenuAndOverlayClass()
            }
          })
    }
  }
}
</script>
