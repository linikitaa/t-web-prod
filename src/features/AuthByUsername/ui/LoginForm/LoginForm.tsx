import clsx from 'clsx'
import s from './LoginForm.module.scss'
import { Input } from 'shared/ui/Input/Input'
import { useCallback, useState } from 'react'
import { useAppDispatch } from 'app/providers/StoreProvider'
import { Button, ButtonTheme, SizeButton } from 'shared/ui/Button/Button'

interface Props {
  className?: string
  onSuccess?: () => void
}

export const LoginForm = ({ className, onSuccess }: Props) => {
  const dispatch = useAppDispatch()
  // const { username, password } = useSelector((state: RootState) => state)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onChangeValueHandler = useCallback((value: string) => {}, [dispatch])

  const onChangePasswordHandler = useCallback(
    (password: string) => {},
    [dispatch],
  )

  const onClickLoginForm = useCallback(async () => {}, [])

  return (
    <div className={clsx(s.LoginForm, className)}>
      {/*{error && <Text subtitle={error} theme={TextTheme.ERROR} />}*/}
      {/*{!error && <Text subtitle={'admin 123'} theme={TextTheme.PRIMARY} />}*/}
      <div className={s.formGroup}>
        <label htmlFor="username">Username:</label>
        <Input
          value={username}
          placeholder={'введите username'}
          type="text"
          id={'username'}
          onChange={onChangeValueHandler}
        />
      </div>
      <div className={s.formGroup}>
        <label htmlFor="password">Password:</label>
        <Input
          value={password}
          placeholder={'введите пароль'}
          type="password"
          id={'password'}
          onChange={onChangePasswordHandler}
        />
      </div>
      <Button
        size={SizeButton.S}
        variant={ButtonTheme.OUTLINE}
        onClick={onClickLoginForm}
      >
        Войти
      </Button>
    </div>
  )
}
