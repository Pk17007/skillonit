import qBank from "./qbank"


const Que=()=>{

    qBank.map((el)=>{
            <h1>{el.id}.{el.question} </h1>
    })
}


export default Que

