import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import app_firebase from "../firebaseConfig"
import { getFirestore, collection, getDocs, DocumentData } from 'firebase/firestore/lite';

// Define the Item type
interface Item {
  baslik: string;
  kategori: string;
  tarih: string;
  gorsel: string;
  metin: string;
  yayinci_yazar: string;
}

// Define the initial state type
interface CounterState {
  value: number;
  veri: Item[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CounterState = {
  value: 0,
  veri: [],
  status: 'idle',
  error: null,
}

const db = getFirestore(app_firebase);

export const VeriGetir2 = createAsyncThunk('counter/VeriGetir2', async () => {
  const veriler = await getDocs(collection(db, "haberler"));
  return veriler.docs.map((doc) => doc.data() as Item);
})

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(VeriGetir2.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(VeriGetir2.fulfilled, (state, action: PayloadAction<Item[]>) => {
        state.status = 'succeeded';
        state.veri = action.payload;
        console.log(state.veri.length);
      })
      .addCase(VeriGetir2.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
})

// Action creators are generated for each case reducer function
export const { increment } = counterSlice.actions

export default counterSlice.reducer
