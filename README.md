*** Features of this Course Registration project are:

. Here student can select Courses according to their choices.And their selected courses names along with their total credit hours, total price and remaining credit hour for all selected course will be shown on a cart presented in the right side. 

.Students can select a specific course only once. If they tries to select multiple times a specific course the system will refrain them by showing a toast that they cant select multiple times a specic course.

.Any student can only select courses upto 20hr credit. If the tries to select over 20hr credit it will show a toast that they cant select anymore courses. 

.In the cart they can sees the remaining credit hour after selecting their courses by which they can decide how much else they can purchase.

***Technology and tools : ***
HTML, CSS, JS, React, Tailwind






***Discussion regarding how I managed the state in myr assignment project:

1.Local Component State:

React components have their own local state.  I used the useState hook for data that is specific to a particular component and doesn't need to be shared with other components. For example in my project the objects inside the courses array, i sent them to cart to create duplicate array of object, and set them in the useState() with an empty array. I have created a simple carts component that uses useState() to manage the carts state. The initial state value is set to empty array [], and we use the setCarts function to update the carts when the "Select" button is clicked.
I modified the state when needed. In my case, I used it in the onClick handler of the button to update the carts..
I used it to manage various types of state, such as  form input values, or any other data that needs to change and trigger re-renders in my component for example i used for totalCreditHour, CreditHourRemaining, totalPrice to set the state.

2.Props for Data Flow:
To share data and state between parent and child components, I passed data down as props from parent to child components. Child components can then communicate with their parents. For example, in my project, i sent totalCreditHour, CreditHourRemaining, totalPrice as props from app.jsx file (parent component) to other components and accessed them on cart (child component) as the app.jsx file is the common component for both courses and carts child component. 
