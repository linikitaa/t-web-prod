import React from "react";
import "app/styles/index.scss";
import { StoreProvider } from "app/providers/StoreProvider";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { Decorator } from "@storybook/react";
import { DeepPartial } from "react-hook-form";
export const StoreDecorator =
  (state: DeepPartial<StateSchema>): Decorator =>
  (Story) => {
    return (
      <StoreProvider initialState={state}>
        <Story />
      </StoreProvider>
    );
  };
