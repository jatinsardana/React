import React from 'react'
import { RecoilRoot, atom, useRecoilSnapshot, useRecoilState, useRecoilValue } from 'recoil'
import { meassageAtom, networkAtom } from './Atom'

function Practice() {
  return (
    <>
    <RecoilRoot>
      <MainApp />
      </RecoilRoot>      
    </>
  )
}

function MainApp(){
  const [networkCount,setCount] = useRecoilState(networkAtom)
  const messCount = useRecoilValue(meassageAtom)
  return (
    <div>
      <button onClick={()=>{
        setCount(networkCount+1)
      }}>Increase</button>
      <div>
        ME {networkCount} <br />
      </div>
    </div>
  )
}

export default Practice
