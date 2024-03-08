import { useMutation } from '@tanstack/react-query';
import { login, changePassword } from '@/apis';

export const useLogin = (options) => {
  return useMutation({
    ...options,
    mutationFn: (account) => login(account),
  })
}

export const useChangePassword = (options) => {
  return useMutation({
    ...options,
    mutationFn: (password) => changePassword(password),
  })
}
