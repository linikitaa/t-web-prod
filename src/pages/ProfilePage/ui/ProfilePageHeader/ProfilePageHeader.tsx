import s from "./ProfilePageHeader.module.scss";
import clsx from "clsx";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import {
  profileActions,
  selectProfileReadonly,
  updateProfileData,
} from "entities/Profile";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDipstach";

interface Props {
  className?: string;
}

export const ProfilePageHeader = ({ className }: Props) => {
  const readonly = useSelector(selectProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);
  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={clsx(s.ProfilePageHeader, className)}>
      <Text title={"Профиль"} />
      <div>
        {readonly ? (
          <Button
            onClick={onEdit}
            className={s.editBtn}
            variant={ButtonTheme.INVERTED_OUTLINE}
          >
            Редактировать
          </Button>
        ) : (
          <>
            <Button
              onClick={onSave}
              className={s.editBtn}
              variant={ButtonTheme.INVERTED_OUTLINE}
            >
              Сохранить
            </Button>
            <Button
              onClick={onCancelEdit}
              className={s.editBtn}
              variant={ButtonTheme.INVERTED_OUTLINE_RED}
            >
              Отменить
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
