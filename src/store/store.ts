import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        user: (state = {}, _action) => state,
        
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;