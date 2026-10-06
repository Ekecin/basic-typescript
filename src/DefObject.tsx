import type { JSX } from "react/jsx-runtime";

interface Obj{
    name:string;
    age:number;
    male:boolean;
    title: string;
}



export default function Def({name,age,male,title}:Obj ):JSX.Element {
  return(
<div className="user-card">
  <header>{title}</header>
  <p>Name: {name}</p>
  <p>Age: {age}</p>
  <p>Gender: {male ? 'Male' : 'Female'}</p>
</div>);
}



