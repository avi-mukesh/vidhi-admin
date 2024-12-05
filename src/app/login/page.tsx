import { login } from "./actions";
// import { signup } from "./actions";

export default function LoginPage() {
  return (
    <form className="max-w-[300px] p-2">
      <div className="flex flex-col mb-1">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="bg-slate-100"
        />
      </div>
      <div className="flex flex-col mb-1">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="bg-slate-100"
        />
      </div>
      <button formAction={login} className="bg-slate-200 p-1">
        Log in
      </button>
      {/* <button formAction={signup}>Sign up</button> */}
    </form>
  );
}
