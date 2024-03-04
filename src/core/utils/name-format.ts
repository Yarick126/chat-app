export const nameFormat = (name: string):string => {
  let result: string = ''
  let n: number = 0
  let isOneWord: boolean = false
  name = name.split('').map((e,i) => {
    if(i === 0) e=e.toUpperCase()
    return e}).join('')
  
  for (let i = 0; i < name.length; i++) {
    if(i===0) continue
    if(name[i] === name[i].toUpperCase()){
      result += name.slice(n,i) + ' ' + name.slice(i, name.length).toLowerCase()
      
      return result
    }
  }

  isOneWord = true

  if(isOneWord) result = name
  
  return result

}