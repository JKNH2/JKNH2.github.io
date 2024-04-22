const btn = document.getElementById(2).addEventListener("click", getStudent(), onclick)
const url =  "https://24a0dac0-2579-4138-985c-bec2df4bdfcc-00-3unzo70c406dl.riker.replit.dev/students"

function getStudent(){
    if(document.getElementById(1).textContent==="1234"){
        let res = makeStudentPayload(url, document.getElementById(0))
        document.getElementById(3).textContent = res
    }
}

function makeStudentPayload(url, payload){
    const response = fetch(url, {
        method: 'POST',
        headers: {      'Content-Type': 'application/json' 
        },
    body:JSON.stringify(payload)
    })
    return response.clave
}