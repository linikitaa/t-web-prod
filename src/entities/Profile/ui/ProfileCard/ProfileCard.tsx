import s from "./ProfileCard.module.scss";
import clsx from "clsx";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { Input, InputTheme } from "shared/ui/Input/Input";
import { Profile } from "../../model/types/profile";
import { Loader } from "shared/ui/Loader/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";

interface Props {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstName?: (value: string) => void;
  onChangeLastName?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCountry?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
}

export const ProfileCard = (props: Props) => {
  const {
    className,
    data,
    isLoading,
    error,
    onChangeFirstName,
    onChangeLastName,
    readonly,
    onChangeCountry,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
  } = props;
  if (isLoading) {
    return (
      <div className={clsx(className, s.loading)}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={clsx(className, s.error)}>
        <Text
          title={"Произошла ошибка при загрузке профиля"}
          subtitle={"Попробуйте обновить страницу"}
          theme={TextTheme.ERROR}
        />
      </div>
    );
  }

  return (
    <div className={clsx(s.ProfileCard, className)}>
      <div className={s.data}>
        {data?.avatar && <Avatar size={200} src={data?.avatar} alt="avatar" />}

        <Input
          variant={InputTheme.PRIMARY}
          value={data?.first}
          placeholder={"Ваше имя"}
          className={s.input}
          onChange={onChangeFirstName}
          readonly={readonly}
        />
        <Input
          variant={InputTheme.PRIMARY}
          value={data?.lastname}
          placeholder={"Ваша фамилия"}
          className={s.input}
          onChange={onChangeLastName}
          readonly={readonly}
        />
        <Input
          variant={InputTheme.PRIMARY}
          value={data?.age}
          placeholder={"Ваш возраст"}
          className={s.input}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          variant={InputTheme.PRIMARY}
          value={data?.country}
          placeholder={"Ваша страна"}
          className={s.input}
          onChange={onChangeCountry}
          readonly={readonly}
        />
        <Input
          variant={InputTheme.PRIMARY}
          value={data?.city}
          placeholder={"Ваш город"}
          className={s.input}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          variant={InputTheme.PRIMARY}
          value={data?.username}
          placeholder={"Введите мия пользователя"}
          className={s.input}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          variant={InputTheme.PRIMARY}
          value={data?.avatar}
          placeholder={"Введите ссылку на аватар"}
          className={s.input}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
