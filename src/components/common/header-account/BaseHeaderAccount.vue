<template>
  <b-dropdown class="header-account" menu-class="w-100">
    <template v-slot:button-content>
      <div class="user">
        <img
          src="../../../assets/images/profile.png"
          class="avatar"
          alt="avatar"
        />
        <div class="username">Văn thư Bộ</div>
      </div>
    </template>
    <b-dropdown-item href="#">
      <font-awesome-icon icon="user" />
      <span class="pl-2">Thông tin cá nhân</span>
    </b-dropdown-item>
    <b-dropdown-item href="#">
      <font-awesome-icon icon="exchange-alt" />
      <span class="pl-2">Thay đổi đơn vị</span>
    </b-dropdown-item>
    <b-dropdown-item href="#">
      <font-awesome-icon icon="sign-out-alt" @click="dangXuat" />
      <span class="pl-2">Đăng xuất</span>
    </b-dropdown-item>
    <b-modal
      id="thong-tin-tai-khoan"
      ref="thong-tin-tai-khoan"
      centered
      title="Thông tin cá nhân"
      size="lg"
      :hide-footer="true"
    >
      <div class="row mt-3 mb-3">
        <div class="col-sm-6">
          <span class="font-weight-bold">Họ tên: </span>
          <span>{{ tenCanBo }}</span>
        </div>
        <div class="col-sm-6">
          <span class="font-weight-bold"> Đơn vị: </span>
          <span>{{ tenDonVi }}</span>
        </div>
      </div>
      <div class="row row mt-3 mb-3">
        <div class="col-sm-6">
          <span class="font-weight-bold"> Chức vụ: </span>
          <span>{{ tenChucVu }}</span>
        </div>
        <div class="col-sm-6">
          <span class="font-weight-bold"> Phạm vi: </span>
          <span>{{ tenPhamVi }}</span>
        </div>
      </div>
    </b-modal>
  </b-dropdown>
</template>
<script>
export default {
  name: 'BaseHeaderAccount',
  data () {
    return {
      tenCanBo: '',
      tenDonVi: '',
      tenChucVu: '',
      tenPhamVi: ''
    }
  },
  methods: {
    dangXuat () {
      this.$emit(this, 'authenticated')
    }
  }
}
</script>
