import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  test('Should render Button', () => {
    render(<Button onClick={() => {}}>Test</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
})
