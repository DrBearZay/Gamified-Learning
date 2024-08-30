<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <div class="pb-[30px] text-2xl">登录</div>
    <el-form
      ref="ruleFormRef"
      :model="form"
      label-width="auto"
      :rules="rules"
      style="max-width: 600px"
      status-icon
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <div class="button-group">
          <el-button type="primary" @click="onLogin(ruleFormRef)">登录</el-button>
          <el-button @click="onRegister">注册</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'
import { useAccountStore } from '@/stores/account'
import type { FormInstance, FormRules } from 'element-plus'
import { reactive } from 'vue'

interface RuleForm {
  name: string
  password: string
}
const form = reactive<RuleForm>({
  name: '',
  password: ''
})
const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
    // { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
    // { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ]
})

const ruleFormRef = ref<FormInstance>()

const accountStore = useAccountStore()
const { loginState } = storeToRefs(accountStore)

const onLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      loginState.value = 'student'
      router.push({ name: 'Home' })
    } else {
      console.log('error submit!', fields)
    }
  })
}

const onRegister = () => {
  router.push({ name: 'Register' })
}
</script>
