<template>
  <el-dropdown v-if="accessToken" @command="handleCommand">
    <span class="avatar-dropdown">
      <el-avatar class="user-avatar" :src="avatar"></el-avatar>
      <div class="user-name">
        {{ nickname }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-if="accessToken" command="myBlog" divided>
        我的写作
      </el-dropdown-item>
      <el-dropdown-item v-if="accessToken" command="shopping" divided>
        商品管理
      </el-dropdown-item>
      <el-dropdown-item v-if="accessToken" command="pics" divided>
        图库
      </el-dropdown-item>
      <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
  <el-dropdown v-else @command="handleCommand">
    <span class="avatar-dropdown">
      <div class="user-name">
        未登录
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
    </span>

    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="login" divided>登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { recordRoute } from '@/config'

  export default {
    name: 'VabAvatar',
    computed: {
      ...mapGetters({
        accessToken: 'user/accessToken',
        avatar: 'user/avatar',
        username: 'user/username',
        nickname: 'user/nickname',
      }),
    },
    created() {},
    methods: {
      handleCommand(command) {
        switch (command) {
          case 'logout':
            this.logout()
            break
          case 'login':
            this.$router.push('/login')
            break
          case 'pics':
            this.$router.push('/pics/index')
            break
          case 'myBlog':
            this.$router.push('/blog/self')
            break
          case 'shopping':
            this.$router.push('/shopping_admin/goods')
            break
          case 'plus':
            window.open(
              'https://chu1204505056.gitee.io/admin-plus/?hmsr=homeAd&hmpl=&hmcu=&hmkw=&hmci='
            )
        }
      },
      logout() {
        this.$baseConfirm(
          '您确定要退出' + this.$baseTitle + '吗?',
          null,
          async () => {
            await this.$store.dispatch('user/logout')
            if (recordRoute) {
              const fullPath = this.$route.fullPath
              this.$router.push(`/login?redirect=${fullPath}`)
            } else {
              this.$router.push('/login')
            }
          }
        )
      },
    },
  }
</script>
<style lang="scss" scoped>
  .avatar-dropdown {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
    height: 50px;
    padding: 0;

    .user-avatar {
      width: 40px;
      height: 40px;
      cursor: pointer;
      border-radius: 50%;
    }

    .user-name {
      position: relative;
      margin-left: 5px;
      margin-left: 5px;
      cursor: pointer;
    }
  }
</style>
