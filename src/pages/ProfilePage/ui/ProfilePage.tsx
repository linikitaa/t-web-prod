import s from "./ProfilePage.module.scss";
import clsx from "clsx";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDipstach";
import {
  fetchProfileData,
  profileActions,
  ProfileCard,
  selectProfileData,
  selectProfileError,
  selectProfileIsLoading,
  selectProfileReadonly,
} from "entities/Profile";
import { useSelector } from "react-redux";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { selectProfileForm } from "entities/Profile/model/selectors/selectProfileForm";
import { Country } from "shared/const/common";

interface Props {
  className?: string;
}

const ProfilePage = ({ className }: Props) => {
  const dispatch = useAppDispatch();
  const data = useSelector(selectProfileData);
  const formData = useSelector(selectProfileForm);
  const error = useSelector(selectProfileError);
  const isLoading = useSelector(selectProfileIsLoading);
  const readonly = useSelector(selectProfileReadonly);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ first: value || "" }));
    },
    [dispatch],
  );
  const onChangeLastName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || "" }));
    },
    [dispatch],
  );
  const onChangeAge = useCallback(
    (value?: string) => {
      const age = value && /^\d+$/.test(value) ? Number(value) : 0;
      dispatch(profileActions.updateProfile({ age }));
    },
    [dispatch],
  );
  const onChangeCountry = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          country: (value as Country) || undefined,
        }),
      );
    },
    [dispatch],
  );
  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || "" }));
    },
    [dispatch],
  );
  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || "" }));
    },
    [dispatch],
  );
  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || "" }));
    },
    [dispatch],
  );
  return (
    <div className={clsx(s.ProfilePage, className)}>
      <ProfilePageHeader />
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onChangeFirstName={onChangeFirstName}
        onChangeLastName={onChangeLastName}
        onChangeAge={onChangeAge}
        onChangeCountry={onChangeCountry}
        onChangeCity={onChangeCity}
        onChangeUsername={onChangeUsername}
        onChangeAvatar={onChangeAvatar}
      />
    </div>
  );
};
export default ProfilePage;
