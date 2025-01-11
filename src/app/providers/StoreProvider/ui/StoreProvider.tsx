import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "app/providers/StoreProvider/config/store";
import { StateSchema } from "../config/StateSchema";
import { DeepPartial } from "react-hook-form";
interface Props {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};
