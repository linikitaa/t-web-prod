import { Button, SizeButton } from 'shared/ui/Button/Button'
import { useEffect, useState } from 'react'

//компонент для тестирования
export const BugButton = () => {
  const [error, setError] = useState(false)

  useEffect(() => {
    if (error) throw new Error()
  }, [error])

  const onThrow = () => {
    setError(true)
  }

  return (
    <Button size={SizeButton.S} onClick={onThrow}>
      throw Error
    </Button>
  )
}
