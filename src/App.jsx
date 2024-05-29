const datas =[
  {grupname:"Antariksa",
  member:[
    {name:"Tisatun",born:"07 April 2003",age:"21 tahun"}],
  groupsmember:["tisa","jamil","fitri","teguh","fadly"]}
];

export function Header() {
  return (
    <div>
      <h1>Kuis 1 antariksa</h1>
    </div>
  );
}

export default function App() {
  const data = datas[0]; 
  const member = data.member[0]; 

  return (
    <>
      <div className="container">
        <h1>{data.grupname}</h1>
        <div className="container-1"> 
          <h4>Member data :</h4>
          <p>{member.name}</p>
          <p>{member.born}</p>
          <p>{member.age}</p>
          <h4>Group Members :</h4>
          {data.groupsmember.map((show, index) => (
            <p key={index}>{show}</p>
          ))}
        </div>
      </div>
    </>
  );
}
