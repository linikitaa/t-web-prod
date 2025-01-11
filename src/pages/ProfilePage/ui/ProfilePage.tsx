import s from "./ProfilePage.module.scss";
import clsx from "clsx";
import { useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDipstach";
import { fetchProfileData } from "entities/Profile";

interface Props {
  className?: string;
}

const ProfilePage = ({ className }: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return <div className={clsx(s.ProfilePage, className)}>Profile</div>;
};
export default ProfilePage;
