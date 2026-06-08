1. Absolute Path

An absolute path starts with /.

<Link to="/about">About</Link>

It always goes to the exact route:

/about

No matter where you currently are.

Examples
<Link to="/host">Host</Link>
<Link to="/host/income">Income</Link>
<Link to="/about">About</Link>
2. Relative Path

A relative path does NOT start with /.

<Link to="income">Income</Link>

React Router adds it to the current route.

Example

Current URL:

/host

Link:

<Link to="income">Income</Link>

Result:

/host/income
Another Example

Current URL:

/host
<Link to="reviews">Reviews</Link>

Result:

/host/reviews
3. . (Current Route)

. means:

Stay at the current route.

<Link to=".">Dashboard</Link>

Current URL:

/host

Result:

/host
4. .. (Parent Route)

.. means:

Go up one level.

Current URL:

/host/income
<Link to="..">Back</Link>

Result:

/host

Think of it like folders:

host/
 └── income/

.. = go back to host.

5. Index Route

An index route is the default child route.

Example
<Route path="host" element={<HostLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="income" element={<Income />} />
    <Route path="reviews" element={<Reviews />} />
</Route>
URLs
/host          → Dashboard
/host/income   → Income
/host/reviews  → Reviews

The Dashboard route has no path because it is the default page.

<Route index element={<Dashboard />} />

means:

When user visits /host,
show Dashboard automatically.
Index vs Path
Index Route
<Route index element={<Dashboard />} />

URL:

/host
Normal Child Route
<Route path="income" element={<Income />} />

URL:

/host/income