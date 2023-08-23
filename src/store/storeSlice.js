import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Asenkron thunk: Belirli sayıda ve belirli dilde alıntıları çeker
export const getParagraph = createAsyncThunk(
  "quote/getParagraph",
  async ({ count, includeHTML }) => {
    const res = await fetch(
      `https://baconipsum.com/api/?type=all-meat&paras=${count}&format=${includeHTML}`
    ).then((data) => data.text());
    return res;
  }
);

export const quoteSlice = createSlice({
  name: "paragraph",
  initialState: {
    quotes: "",
    loading: false,
    includeHTML: "text",
    count: 3,
    error: "",
  },
  reducers: {
    // Alıntı sayısını güncelleme
    updateParagraph: (state, action) => {
      state.count = action.payload;
    },
    // Alıntının dilini güncelleme
    updateIncludeHTML: (state, action) => {
      state.includeHTML = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getParagraph.pending, (state, action) => {
      state.loading = true;
      
    });
    builder.addCase(getParagraph.fulfilled, (state, action) => {
      state.quotes = action.payload;
      state.loading = false;
    });
    builder.addCase(getParagraph.rejected, (state, action) => {
      state.loading = false;
       state.error = "Alıntıları yüklerken bir hata oluştu.";
  });
  },
});

export const { updateParagraph, updateIncludeHTML } = quoteSlice.actions;

// Reducer'ı dışarıya aktar
export default quoteSlice.reducer;
