import s from "./ProfileCard.module.scss";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectProfileData } from "../../model/selectors/selectProfileData";
import { selectProfileError } from "../../model/selectors/selectProfileError";
import { selectProfileIsLoading } from "../../model/selectors/selectProfileIsLoading";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input, InputTheme } from "shared/ui/Input/Input";

interface Props {
  className?: string;
}

export const ProfileCard = ({ className }: Props) => {
  const data = useSelector(selectProfileData);
  const error = useSelector(selectProfileError);
  const isLoading = useSelector(selectProfileIsLoading);

  return (
    <div className={clsx(s.ProfileCard, className)}>
      <div className={s.header}>
        <Text title={"Профиль"} />
        <Button variant={ButtonTheme.INVERTED_OUTLINE}>Редактировать</Button>
      </div>
      <div className={s.data}>
        <Input
          variant={InputTheme.PRIMARY}
          value={data?.first}
          placeholder={"Ваше имя"}
          className={s.input}
        />
        <Input
          variant={InputTheme.PRIMARY}
          value={data?.lastname}
          placeholder={"Ваша фамилия"}
          className={s.input}
        />
      </div>
    </div>
  );
};
