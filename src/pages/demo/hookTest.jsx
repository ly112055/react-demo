import React,{useState} from 'react';
import { Button } from 'antd';
import { useEffect } from 'react';

function useCom(){

}

function HookTest(){
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  // 首次渲染和每次更新都会执行该函数
  useEffect(()=>{
    document.title = `You clicks ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <Button onClick={()=>setCount(count +1)}>Click Me</Button>
    </div>
  )
}

export default HookTest;
