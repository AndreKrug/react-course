import {useLoaderData} from 'react-router-dom'

function Github() {
  /*
  const [data, setData] = React.useState([])
  useEffect(() => {
      fetch('https://api.github.com/users/andrekrug')
      .then((response) => response.json())
      .then (data => {
          console.log(data)
          setData(data)
      })
  }, [])
  */
  const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      <img src={data.avatar_url} alt="Github Image" width={300} />
      Github 
      <br/>Followers: { data.followers }
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch ('https://api.github.com/users/andrekrug')
  return response.json()
}
