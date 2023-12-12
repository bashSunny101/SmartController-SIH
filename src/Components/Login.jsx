import React from 'react'

function Login() {
  return (
    <>
        <div className="rounded-xl border-2 border-gray-700 bg-card text-card-foreground shadow w-[90vw] max-w-xl">
        <div className="flex flex-col space-y-1.5 p-6 text-center">
          <h3 className="font-semibold leading-none tracking-tight text-gray-300">Login</h3>
          <p className="text-sm text-muted-foreground text-gray-300">
            Get all energy solutions at one place...
          </p>
        </div>
        <div className="p-6 pt-0">
          <form className="space-y-8">
            <div className="space-y-2 text-left">
              <label
                className="text-sm  text-gray-300 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for=":R5lbala:-form-item"
              >
                Username
              </label>
              <input
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-gray-700"
                placeholder="username"
                id=":R5lbala:-form-item"
                aria-describedby=":R5lbala:-form-item-description"
                aria-invalid="false"
                name="username"
              />
            </div>
            <div className="space-y-2 text-left">
              <label
                className="text-sm  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                for=":R9lbala:-form-item"
              >
                Password
              </label>
              <input
                type="password"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-gray-700"
                placeholder="password"
                id=":R9lbala:-form-item"
                aria-describedby=":R9lbala:-form-item-description"
                aria-invalid="false"
                name="password"
              />
            </div>
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary bg-gray-50 text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 text-black"
              type="submit"
            >
              Login
            </button>
          </form>
          <p
            id="undefined-form-item-description"
            className="text-[0.8rem] text-muted-foreground"
          ></p>
        </div>
      </div>
    </>
  )
}

export default Login