# Assignment

## Tasks
- Create a web application using create-react-app:
- Create a grid layout of users
- Create a navbar showing any brand name (for eg. AirData, Censusster, Data Works etc.)
- Add a button in the navbar saying 'Get users', which makes an API call to get the users data
- Use `given API Link` to get the data (page number can be anything )
- Show a loader while the API fetches the data
- **Bonus** points for using custom CSS/SASS/styled-components
- **Bonus** points for writing clean code.

## Project Journey.

1. I created [this](https://github.com/1447bits/assignment) Github Repository. it hardly took me : `5 mins`
2. creating React App initialising the project, It took me : `10-15 mins`
> I have used react Functional components made with Javascript.
> Website has and very basic (Respponsive) UI design.
4. First step towards the development was Designing the UI and decide the flow of the application. This step took me arround : `1 hr` 
> first component in the dveelopment phase was Navbar, Design being simple yet functional has a Brand Logo and **6** naviigation links. 
> Second component is the Grid Design for user cards.
> Third is the page navigation bar at the bottom of the page.
5. Development of Navbar, 
   - navbar has aspect ratio of 100:15, designed usign CSS.
   - their are total 6 navigation links (focus on Users).
   - for displays below width 500px breakdown has been made to collapse navbar and active link only is visibble.
   - developing this design took me arround : `1.5 hrs`
6. Next step was to and develop card design for Each user.
    - card UI design is a columen templete : repeat(2, 1fr), grid design.
    - each card consist of User name, Avatar, Email ID, and User ID.
    - Each Card is responsive and had functional hover animations. 
   - developing this design took me arround : `2 hrs`
7. lastly it has page navigation buttons at the end.
   
## Functionalities

1. API call is made using Fetch function of javascript.
2. Responce consists of an JSON object with user data.
   - Api call and UI integration Took me arround : `2 hrs`
    > **Learnings**. I experimented with different react Hooks like Usestate, UseEffect, useNavigate etc, but the combination of useEffect and useState fitted the best.
3. Page shift method uses useState and useEffect hooks, to switch fetch function arguments.
   - This took me arround : `1 hr`
   - learning from my previous mistakes I was able to write much effecient and error free code.

## Conclusion 
In Total this development took my : `8 hrs`

I Learned better about mentioned react Hooks and got to know more about functionalities of the React.