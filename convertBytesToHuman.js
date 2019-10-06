/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  var prefixes = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']; // prifeixes for byte(B)
  var N = prefixes.length - 1;// max number of prefix
  if(bytes>=0 && typeof(bytes)=='number' && bytes < Infinity)
  {
    var i = 0; //number of prefix
    for(;i<N && bytes>=1024; i++, bytes/=1024){}// got number of prefix and not rounded number
    bytes = (Math.round(bytes)==bytes? bytes.toString() : bytes.toFixed(2)) + ' '+ prefixes[i] +'B'; // result string
  }
  else
    bytes = false; // wrong input
  return bytes;
}
