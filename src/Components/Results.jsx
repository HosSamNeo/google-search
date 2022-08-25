import React , {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultContext } from '../Context/ResultContextProvider';
import Loading from './Loading';



const Results = () => {
  const { results , getResults , isLoading , searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm !== '') {
      if (location.pathname === '/videos') {
        getResults(`/search/q=${searchTerm} videos`);
      }else if(location.pathname === '/images'){
        getResults(`/image/q=${searchTerm}`);
      }else if(location.pathname === '/search'){
        getResults(`/search/q=${searchTerm}`);
      }
    }
  }, [searchTerm, location.pathname]);


  console.log(results)

  if(isLoading) return <Loading />
  
  switch (location.pathname) {
    case '/search':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {results?.results?.map(({link , title } , index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target='_blank' rel='noreferrer'>
                <p className='text-lg hover:underline text-blue-700'>
                  {title}
                </p>
                <p className='text-sm'>
                  {link.length > 30 ? link.substring(0,30) : link}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case '/images':
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.image_results?.map(({image : { src } , link : {href , title}} , index) => (
            <a href={href} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5">
            <img src={src} alt={title} loading="lazy" />
            <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
          </a>
          ))}
        </div>
      );
    case '/videos':
      return (
        <div className="flex flex-wrap ">
          {results?.results?.map((video, index) => (
            <div key={index} className="p-2">
              <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px" />
            </div>
          ))}
        </div>
      );
    default:
      return 'error'
  }
}

export default Results;