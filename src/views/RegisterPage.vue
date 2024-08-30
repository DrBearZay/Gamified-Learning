<template>
  <div class="h-screen flex justify-center items-center">
    <div v-if="!isRegisterSuccess" class="flex flex-col justify-center items-center">
      <div class="pb-[30px] text-2xl">注册</div>
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
        <el-form-item label="角色" prop="character">
          <el-radio-group v-model="form.character">
            <el-radio value="student">学生</el-radio>
            <el-radio value="teacher">老师</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <div class="button-group">
            <el-button type="primary" @click="onRegister(ruleFormRef)">注册</el-button>
            <el-button @click="onCancel">返回登录</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>

    <el-result v-else icon="success" title="注册成功" sub-title="点击确认返回登录页">
      <template #extra>
        <el-button type="primary" @click="onRegisterSuccess">确认</el-button>
      </template>
    </el-result>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'
import { useAccountStore } from '@/stores/account'
import type { FormInstance, FormRules } from 'element-plus'
import { reactive } from 'vue'

const isRegisterSuccess = ref(false)

interface RuleForm {
  name: string
  password: string
  character: string
}

const form = reactive<RuleForm>({
  name: '',
  password: '',
  character: ''
})

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
    // { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
    // { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  character: [{ required: true, message: '请选择一个角色' }]
})

const ruleFormRef = ref<FormInstance>()

const accountStore = useAccountStore()
const { loginState } = storeToRefs(accountStore)

const onRegister = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      isRegisterSuccess.value = true
      // 弹出注册成功
      // loginState.value = "student";
      // router.push({ name: "Home" });
    } else {
      console.log('error submit!', fields)
    }
  })
}

const onRegisterSuccess = () => {
  router.push({ name: 'Login' })
}

const onCancel = () => {
  router.push({ name: 'Login' })
}
</script>
