export default function resultTwo(){
    let json = {       
        name: "Sorangel",
        edad: 31,
        city: "Caracas",
        country: "Venezuela",
    }
    try{
        let myJson = JSON.stringify(json);
      return myJson;
        
      }
      catch(err){
        return alert(err.message)
      }
      }