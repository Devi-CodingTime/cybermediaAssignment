# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

//////////////////////////////////// documentation /////////////////////////////////////

OVER VIEW:
The Graph API is the primary way to get data into and out of the Facebook platform. It's an HTTP-based API that apps can use to programmatically query data, post new stories, manage ads, upload photos, and perform a wide variety of other tasks.
TECHNOLOGY USED:
react-Facebook-login : 
We use the react-Facebook-login library to implement Facebook Login.
This API collects users' access tokens to get their profile information, which is possible only after user approval.
React-Router-Dom: React Router DOM is an npm package that enables you to implement dynamic routing in a web app.
React Router Dom is used to build single-page applications i.e. that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL.
ACCESS TOKENS:
Access tokens allow your app to access the Graph API. They typically perform two functions:
1.	They allow your app to access a User's information without requiring the User's password. For example, your app needs a User's email to perform a function. If the User agrees to allow your app to retrieve their email address from Facebook, the User will not need to enter their Facebook password for your app to get their email address.
2.	They allow us to identify your app, the User who is using your app, and the type of data the User has permitted your app to access.
APPROACH:
Create a Developer Account using Facebook API
1.	GO to the Facebook Developer Website: Open your web browser and go to the Facebook for Developers website: developer.facebook.com.
2.	Sign Up or Log In: If you already have a Facebook account, you can log in using your existing credentials. If not, you’ll need to sign up for a Facebook account.
3.	Create a New App: Once logged in, navigate to the “My Apps” dropdown menu at the top right corner of the page and select “Create App”.
4.	Choose a Platform: Select the platform you’re building for (e.g., web, iOS, Android) and give your app a name.
5.	Configure Your App: Follow the prompt to configure your app settings, including providing a display name, email address, and privacy policy URL.
6.	Complete Security Check: Facebook may prompt you to complete a security check to verify your identity. Follow the instructions to complete this step.
7.	Access Your App Dashboard: After completing the setup process, you’ll be taken to you’re app’s dashboard. Here you find the app ID and app secret key which you will need to authenticate your app and access Facebook APIs.
WORKFLOW: 

1.	Access the Hosted Project: Visit the hosted link provided by the project owner.
2.	Click the "Login with Facebook" Button: On the homepage of the project, locate and click the "Login with Facebook" button.
3.	Authenticate with Facebook: A pop-up window will appear, prompting you to reconnect with Facebook to the developer's account. This step is necessary to establish a connection between your Facebook account and the dashboard application. Follow the instructions in the pop-up to authenticate with Facebook.
4.	Acknowledge Connection Established: After successfully reconnecting with Facebook, another pop-up will appear, indicating that the connection has been established. Click the "Got it" button to acknowledge and close the pop-up.
5.	Redirect to Dashboard Page: You will be automatically redirected to the dashboard page of the application. Here, you will find various metrics and insights related to your Facebook posts.
6.	View Post Metrics: On the dashboard page, you will see graphical representations of metrics such as post count, likes count, and comments count. These graphs provide a visual overview of your Facebook post performance.
7.	Explore Dashboard: Take some time to explore the dashboard and interact with the graphs to gain insights into your Facebook post performance. You can hover over data points for more detailed information and adjust settings to customize your view.


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
