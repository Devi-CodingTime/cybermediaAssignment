import React, { useState} from 'react';
import FacebookLogin from 'react-facebook-login';
import Dashboard from './dashboard';

const Login = () => {
  const [userData, setUserData] = useState(null);


  // Function to fetch user's posts
  const fetchUserDetail = async (accessToken) => {
    // let access_Token = "EAAFCo5CqeZAYBO7fGZARRTgkuExwFZCZABV2gjHC7FuxxZBzzGjSJT1Q4IpiUTfU2KKapTXZAUZB9WteBUGe5ENDrHIXgSeey5ra8ZAL6D1EzaLZB37BvS0WvuzzuO1vK26nGM7XgbCHZB351qi7B5rYfbzILa1BBwAnLyV2PlGad6ZAUhJM5ZAp6F7KmeGB6lFaenXSPCvROAlSE99VqMzWZBwZDZD";

    try {
      const res = await fetch(
        `https://graph.facebook.com/v19.0/me?fields=id,name,picture,email,accounts&access_token=${accessToken}`
      );
      const response = await res.json();
      console.log("ok", response);
    } catch (error) {
      console.error('Error fetching user posts:', error);
    }
  };

  // Function to handle Facebook login success
  const responseFacebook = (response) => {
    if (response.status !== 'unknown') {
      setUserData(response);
      fetchUserDetail(response?.accounts?.data[0]?.access_token);
    }
  };

  return (
    <div>
    
    
      {!userData ? (<div className='flex flex-col gap-20'>
     
        <div className="bg-gray-800 text-gray-100 p-4 w-full h-300 flex gap-1 justify-center items-center">
        <img className='w-10 h-10 rounded-full ' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEU6VZ////80UZ309vqToMfM0uQyT5xbcK0uTZyXpMu5wNna3eni5fB0hLdida5SaqogRJjq7PRNZaehq80oSZpAW6NqfbN7i7qwudW+xdzGzeERPJRIYKSpss+LmcTU2OfuBL5hAAAC6klEQVR4nO3c23KrIACFYYuKxmM8RGu2ie//lm3vOtNNQDLA0ln/fWf4xgNGsFHEGGOMMcYYY4wxxtj5EkLmL5Khx2eaGK+juPXZVKubbqFHaVR+jebHZ7Hct7JS1qWtCD1QbfJfPhdbF3/oqjL0Ey2X02IAOQImF3VqBDkARtaLMQUbI0RTdDssyBhxe5Z7KMgYuQ67DgsyRrafZrewA2DEZH4TQ8fIZuflAoyR62ZhAcWMe2YXcMz1YWWBxIyJnQURk9d75xdcjOzvlhZATPTcPVnCYkRrMVuiYvKL9YGBw8jMarrExIyDvQUNI+xvZXiYvLa/YuAw0TtnGRjmvbMMDTPZPskAYqLknUvmo4PC3ArDYcfVlv6t6IHeNYvV7FGmHOYma//Whwb8TvQmv/y7pI+klOI/hQb8TrSVwWHJJNSglTV6TNrnoUdpltT/xiyng1giOevuzPEl9BiNk9ppJs2Ocb18J3SYeDjGEuxPWkw3H+bA6DHVYS5/A8zWID18vU6LSaGeJF9HDGrEoEYMasSgRgxqxKBGDGrEoEYMasQETvnZyKjHjK8+OfH/Uk2s80VRotsAWA2J6m9/arxrpMG6hWVP768I7TbGGjWfCFNN3m8P7jCb//UOd5i7/5Vzd5jCN8Ul5uF/nnGHGU6EiZ/+n3WcYar5RJhyOtFpFmCacYe5ryfCLLfzYOJHgA0PzjAhttW4wnTPALs3XGGq+kyYELs3XGG29kSYJcQ+YEeY+HP1b3GGGQJYnGGSEPvqXGH8v2dyh+nqE2HKIJsEHWHuIaYZV5giwA8AZ5gA75kiZ6sAjzEERrRDoUr39Wy3KP80yJ35O+XK11X3wXnaXg/zj9q0HzYArmkqO+ICrTJiUCMGNWJQIwY1YlAjBjViUCMGNWJQIwY1YlAjBjViUCMGNWJQIwY1YlAjBjViUCMGNWJQIwY1YlAjBjViUCMGNWJQIwY1YlAjBjViUCMGNWJQIwY155gvTt5IUAsJbbkAAAAASUVORK5CYII='/>

        <h2 className="py-2 px-4 hover:bg-gray-700 font-bold text-2xl ">
            Facebook Post Performance Checker
        </h2>
        </div>
        <FacebookLogin
          appId="354745250904470"
          autoLoad={false}
          fields="name,email,picture"
          scope="public_profile,email,pages_read_engagement"
          callback={responseFacebook}
        />
        
        </div>
      ) : (
        <Dashboard name={userData.name} img={userData.picture.data.url}/>
        
      )}
    </div>
  );
};

export default Login;


// userPot
// {
//     "id": "1869744613472900",
//     "name": "Pawan Kumar",
//     "picture": {
//         "data": {
//             "height": 50,
//             "is_silhouette": false,
//             "url": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1869744613472900&height=50&width=50&ext=1716349168&hash=AbYVHVA_ayLEno4k6vwxIlLc",
//             "width": 50
//         }
//     },
//     "email": "devidewangan26899@gmail.com",
//     "accounts": {
//         "data": [
//             {
//                 "access_token": "EAAFCo5CqeZAYBOwgkZBYTZC1EGUdNsNEsAvc81elkRXlZAoXoH3ZCWRE2IhbCUMeVriKz7a0p1BDAHZBCSEnjY8WxAEZBTGZBW2ms0es2Bl6WTihcZB39m9fC3E0ZAso2DfFjoTgJZBjrWcObYMdrITkwhGrQ3SO9K9b1DD4MMZAypKV6DZCd50MDUnx78erEGY37fNzZCMvZAxtqTONZB4g1ND9jB3DzfLJ",
//                 "category": "Personal blog",
//                 "category_list": [
//                     {
//                         "id": "2700",
//                         "name": "Personal blog"
//                     }
//                 ],
//                 "name": "Pawan",
//                 "id": "638336123259461",
//                 "tasks": [
//                     "ADVERTISE",
//                     "ANALYZE",
//                     "CREATE_CONTENT",
//                     "MESSAGING",
//                     "MODERATE",
//                     "MANAGE"
//                 ]
//             }
//         ],
//         "paging": {
//             "cursors": {
//                 "before": "QVFIUlQ1UXpqcFhJU1pTVU1yZATZADdF8xMXVLMUhiSlFTeFVfbVBlOEo4LUU5czNCekJqS1dGNWwwd0wzdEo0MU9TaTVXVnE4a3lGOTJPdUNnNDFGanZAHUDNn",
//                 "after": "QVFIUlQ1UXpqcFhJU1pTVU1yZATZADdF8xMXVLMUhiSlFTeFVfbVBlOEo4LUU5czNCekJqS1dGNWwwd0wzdEo0MU9TaTVXVnE4a3lGOTJPdUNnNDFGanZAHUDNn"
//             }
//         }
//     }
// }

// Render user posts if user is authenticated
       {/* <div>
            <div className='flex flex-col justify-center items-center gap-5'>
                <img src={userData.picture.data.url} alt='profileimg' className='h-40 w-40 rounded-lg border border-solid '/>
            </div>
           <h1>Welcome, {userData.name}!</h1>
           <h1> Email: {userData.email}</h1>
          <h2>Your Posts:</h2>
           <ul>
            {userPosts.map((post) => (
              <li key={post.id}>
                <p>Post ID: {post.id}</p>
                <p>Message: {post.message}</p>
                <p>Created Time: {post.created_time}</p>
              </li>
            ))}
          </ul> 
        </div>*/}