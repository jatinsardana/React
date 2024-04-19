import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { jobAtom, meassageAtom, networkAtom, notificationAtom } from "./Atom";
import { useMemo } from "react";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkCount = useRecoilValue(networkAtom);
  const [messCount, setmessCount] = useRecoilState(meassageAtom);
  const jobCount = useRecoilValue(jobAtom);
  const notiCount = useRecoilValue(notificationAtom);

  const TotalNotification = useMemo(() =>{
    return networkCount+messCount+jobCount+notiCount}, [networkCount,messCount,jobCount,notiCount])

  return (
    <>
      <button>Home</button>
      <button>Networks ({networkCount >= 100 ? "99+" : networkCount})</button>
      <button onClick={()=>{
        setmessCount(messCount+1)
      }}>Messaging ({messCount})</button>
      <button>Jobs ({jobCount})</button>
      <button>Notification ({notiCount})</button>
      <button
        onClick={() => {
          setmessCount(messCount + 1);
        }}
      >
        Me ({TotalNotification})
      </button>
    </>
  );
}

export default App;
