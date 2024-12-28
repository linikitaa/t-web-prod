import s from './ProfilePage.module.scss'
import clsx from 'clsx'

interface Props {
  className?: string
}

const ProfilePage = ({ className }: Props) => {
  return <div className={clsx(s.ProfilePage, className)}>Profile</div>
}
export default ProfilePage
