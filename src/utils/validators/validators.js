export const required=(value)=>{
    
    if(value) return undefined
         return "field cannot be blanc"
    
}


export const maxLengthCreator=(maxValue)=>{
return   (value)=>{
    if(value.length >=maxValue) return  "max length must be"+ maxValue  
      return undefined;
 }
 
}
