document.getElementById(2).addEventListener("click", getStudent(), onclick)
const url =  "https://24a0dac0-2579-4138-985c-bec2df4bdfcc-00-3unzo70c406dl.riker.replit.dev/students"

async function getStudent(){
    if(document.getElementById(1).textContent==="1234"){
        const response = await fetch(url, {
            method: 'POST',
            headers: {      'Content-Type': 'application/json' 
            },
        body:JSON.stringify(payload)
        })
        console.log(response)
    }
}