export type LoginStateType = 'notLogin' | 'student' | 'teacher'
export const useAccountStore = defineStore('account', () => {
  const loginState = ref<LoginStateType>('notLogin')

  return {
    loginState
  }
})
