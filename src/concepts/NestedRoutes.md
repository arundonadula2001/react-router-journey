What are Nested Routes?

Route inside another route.

Example:

/host
/host/income
/host/reviews

Here:

/host → parent route
income, reviews → child routes
Parent Route
<Route path="/host" element={<Host />}>
Child Routes
<Route path="income" element={<Income />} />

<Route path="reviews" element={<Reviews />} />

IMPORTANT:
NO /

Correct:

path="income"

Wrong:

path="/income"
Why Nested Routes?

To share:

layout
navbar
sidebar
dashboard

between pages.

MOST IMPORTANT
Outlet
<Outlet />

Means:

“Render child route here”

Without Outlet

Child routes DO NOT appear.

With Outlet

Child routes render inside parent.

Simple Flow

URL:

/host/income

↓

React renders:

<Host />

↓

Inside Host:

<Outlet />

↓

Outlet becomes:

<Income />
Example
App.jsx
<Route path="/host" element={<Host />}>

    <Route path="income" element={<Income />} />

</Route>
Host.jsx
import { Outlet } from "react-router-dom"

function Host() {

    return (
        <div>

            <h1>Host Page</h1>

            <Outlet />

        </div>
    )
}
Income.jsx
function Income() {
    return <h1>Income Page</h1>
}
Result

URL:

/host/income

Screen:

Host Page
Income Page
Link in Nested Routes

Inside parent:

<Link to="income">Income</Link>

NOT:

<Link to="/host/income">

because React already knows parent route.

Memory Trick
Parent Route
/host
Child Route
income
Outlet
placeholder for child