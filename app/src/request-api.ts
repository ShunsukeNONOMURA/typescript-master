import axios from 'axios';

async function main() {
  const url = 'http://localhost:3001/users'
  const { data } = await axios.get(url)
  console.log( data )
}

main()
