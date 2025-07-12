'use client'
import LandingPage from "./pages/index"
import { Provider } from "react-redux";
import { store } from "./redux/store"

export default function Home() {
  return (
    <Provider store={store}>
    <div className=" bg-white w-full h-full ">
      <LandingPage/>
    </div>
    </Provider>
  );
}
