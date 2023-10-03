export default function List({people}){
   return (
    <>{
        people.map((e)=> 
        (<article class="person">
        <img src={e.image} alt=""></img>
        <div >
            <h4>{e.name}</h4>
            <p>{e.age} years</p>
        </div>
    </article>)
        )
    } </>
   )
}