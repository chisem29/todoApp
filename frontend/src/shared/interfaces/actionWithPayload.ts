import { PayloadAction } from "@reduxjs/toolkit";

interface actionWithPayloadI<T> extends PayloadAction<T> {}

export default actionWithPayloadI